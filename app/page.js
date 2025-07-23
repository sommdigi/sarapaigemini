'use client';

import { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

export default function Home() {
  const [history, setHistory] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef(null);

  // Automatically scroll to the bottom of the chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  // Set a default welcome message
  useEffect(() => {
    setHistory([{
      role: 'model',
      parts: [{ text: "Merhaba! Ben Sarap.ai, senin kişisel şarap arkadaşın. Şarap dünyası hakkında merak ettiklerini sorabilirsin." }]
    }]);
  }, []);

  const handleSendMessage = async () => {
    if (!userInput.trim() || isLoading) return;

    const newUserMessage = {
      role: 'user',
      parts: [{ text: userInput }],
    };

    setIsLoading(true);
    // Add user message to history immediately for a responsive feel
    setHistory(prev => [...prev, newUserMessage]);
    setUserInput('');

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          // Send the last 10 messages for context to keep the payload light
          history: [...history, newUserMessage].slice(-10),
        }),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.statusText}`);
      }

      const data = await response.json();
      
      const newModelMessage = {
        role: 'model',
        parts: [{ text: data.response }],
      };

      setHistory(prev => [...prev, newModelMessage]);

    } catch (error) {
      console.error("Failed to send message:", error);
      const errorMessage = {
        role: 'model',
        parts: [{ text: "Üzgünüm, bir sorun oluştu. Lütfen daha sonra tekrar dene." }],
      };
      // To prevent duplicate user message on error, we replace the user's last message with the error.
      // A better UX would be to show an error icon next to the user's message.
      setHistory(prev => [...prev.slice(0, -1), errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-screen bg-light-bg font-sans">
      <header className="bg-wine-dark p-4 shadow-md z-10">
        <h1 className="text-2xl font-bold text-gold-accent text-center">Sarap.ai</h1>
      </header>

      <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
        <div className="max-w-3xl mx-auto">
          {history.map((msg, index) => (
            <div key={index} className={`flex my-4 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`p-4 rounded-2xl max-w-lg lg:max-w-xl shadow ${
                msg.role === 'user'
                  ? 'bg-wine-light text-light-text rounded-br-none'
                  : 'bg-white text-dark-text rounded-bl-none'
              }`}>
                <ReactMarkdown className="prose prose-sm max-w-none">
                  {msg.parts[0].text}
                </ReactMarkdown>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start my-4">
              <div className="p-4 rounded-2xl max-w-lg lg:max-w-xl shadow bg-white text-dark-text rounded-bl-none">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-wine-dark rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-wine-dark rounded-full animate-pulse [animation-delay:0.2s]"></div>
                  <div className="w-2 h-2 bg-wine-dark rounded-full animate-pulse [animation-delay:0.4s]"></div>
                </div>
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>
      </main>

      <footer className="bg-white/80 backdrop-blur-sm p-4 border-t border-gray-200 sticky bottom-0">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center bg-white border border-gray-300 rounded-full shadow-sm overflow-hidden">
            <textarea
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Bir soru sorun..."
              className="flex-1 p-4 bg-transparent resize-none outline-none text-dark-text placeholder-gray-500"
              rows="1"
              disabled={isLoading}
            />
            <button
              onClick={handleSendMessage}
              disabled={isLoading || !userInput.trim()}
              className="p-3 m-2 rounded-full bg-wine-dark text-white disabled:bg-gray-400 disabled:cursor-not-allowed hover:bg-wine-light transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
              </svg>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
