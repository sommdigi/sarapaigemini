'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-800 to-black flex items-center justify-center p-4">
      
      {/* Subtle background particles */}
      <div className="absolute inset-0">
        {Array.from({length: 50}).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-amber-200 opacity-20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Corner Labels */}
      <div className="absolute top-8 left-8 text-amber-100/60 text-sm font-light tracking-widest">
        ŞARAP-01
      </div>
      <div className="absolute top-8 right-8 text-amber-100/60 text-sm font-light tracking-widest">
        TÜRKÇE AI
      </div>

      {/* Main Content */}
      <div className="text-center relative z-10">
        
        {/* Brand Name */}
        <h1 className={`text-6xl md:text-8xl font-bold text-white mb-16 tracking-wider transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          ŞARAP.AI
        </h1>

        {/* 3D Interactive Grape Cluster */}
        <div className="relative mb-16 flex justify-center">
          <div 
            className="relative w-40 h-40 transition-transform duration-100"
            style={{
              transform: `perspective(1000px) rotateX(${mousePosition.y * 0.5}deg) rotateY(${mousePosition.x}deg) rotateZ(${Math.sin(Date.now() * 0.001) * 2}deg)`
            }}
          >
            {/* 3D Grape Cluster */}
            <div className="relative">
              {/* Top row - 3 grapes */}
              <div className="flex justify-center space-x-2 mb-2">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-8 h-8 bg-gradient-to-br from-amber-400 via-amber-600 to-amber-800 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300" 
                    style={{
                      boxShadow: '0 0 20px rgba(251, 191, 36, 0.3)',
                      animationDelay: `${i * 0.1}s`
                    }}
                  />
                ))}
              </div>
              
              {/* Second row - 4 grapes */}
              <div className="flex justify-center space-x-1 mb-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-7 h-7 bg-gradient-to-br from-amber-500 via-amber-700 to-amber-900 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300"
                    style={{
                      boxShadow: '0 0 15px rgba(251, 191, 36, 0.2)',
                      animationDelay: `${i * 0.1 + 0.3}s`
                    }}
                  />
                ))}
              </div>
              
              {/* Third row - 5 grapes */}
              <div className="flex justify-center space-x-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-6 h-6 bg-gradient-to-br from-amber-600 via-amber-800 to-stone-900 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300"
                    style={{
                      boxShadow: '0 0 12px rgba(251, 191, 36, 0.15)',
                      animationDelay: `${i * 0.1 + 0.6}s`
                    }}
                  />
                ))}
              </div>
              
              {/* Fourth row - 4 grapes */}
              <div className="flex justify-center space-x-1 mb-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-5 h-5 bg-gradient-to-br from-amber-700 via-amber-900 to-stone-900 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300"
                    style={{
                      boxShadow: '0 0 10px rgba(251, 191, 36, 0.1)',
                      animationDelay: `${i * 0.1 + 0.9}s`
                    }}
                  />
                ))}
              </div>
              
              {/* Bottom row - 2 grapes */}
              <div className="flex justify-center space-x-1">
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="w-4 h-4 bg-gradient-to-br from-amber-800 via-stone-800 to-stone-900 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300"
                    style={{
                      boxShadow: '0 0 8px rgba(251, 191, 36, 0.05)',
                      animationDelay: `${i * 0.1 + 1.2}s`
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Glowing stem */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gradient-to-t from-amber-600 to-green-600 rounded-full opacity-60"></div>
          </div>

          {/* Curved "ÇOK YAKINDA" text around grape */}
          <div className="absolute inset-0 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 200 200">
              <defs>
                <path id="circle" d="M 100, 100 m -50, 0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0"/>
              </defs>
              <text className="fill-amber-100 text-lg font-bold tracking-widest">
                <textPath href="#circle" startOffset="0%">
                  ÇOK YAKINDA • ÇOK YAKINDA • 
                </textPath>
              </text>
            </svg>
          </div>
        </div>

        {/* Subtitle */}
        <h2 className={`text-xl md:text-2xl font-light text-amber-100 mb-8 tracking-wide transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Dünya'nın İlk Türkçe Şarap Yapay Zekası
        </h2>

        {/* AI Processing Animation */}
        <div className={`flex justify-center items-center space-x-4 transition-all duration-1000 delay-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-1 h-8 bg-gradient-to-t from-amber-900 to-amber-400 animate-pulse"
                style={{
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: '1.5s'
                }}
              />
            ))}
          </div>
          <span className="text-amber-200/60 text-sm tracking-widest">YAKINDA AKTIF</span>
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-1 h-8 bg-gradient-to-t from-amber-900 to-amber-400 animate-pulse"
                style={{
                  animationDelay: `${i * 0.2 + 0.5}s`,
                  animationDuration: '1.5s'
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
