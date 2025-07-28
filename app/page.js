'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 15;
      const y = (e.clientY / window.innerHeight - 0.5) * 15;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-stone-50 via-amber-50 to-stone-100 flex items-center justify-center p-4">
      
      {/* Subtle floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-16 opacity-20 animate-pulse">
          <div className="w-12 h-12 border border-stone-400 rounded-full"></div>
        </div>
        <div className="absolute bottom-32 right-20 opacity-15 animate-bounce" style={{animationDuration: '4s'}}>
          <div className="w-8 h-8 border border-amber-600 transform rotate-45"></div>
        </div>
        <div className="absolute top-1/3 right-32 opacity-25 animate-pulse" style={{animationDelay: '2s'}}>
          <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
        </div>
      </div>

      {/* Corner Labels */}
      <div className="absolute top-8 left-8 text-stone-600 text-sm font-light tracking-widest">
        ŞARAP-01
      </div>
      <div className="absolute top-8 right-8 text-stone-600 text-sm font-light tracking-widest">
        TÜRKÇE AI
      </div>

      {/* Main Content */}
      <div className="text-center relative z-10 max-w-2xl w-full">
        
        {/* Brand Name */}
        <h1 className={`text-6xl md:text-8xl font-bold text-stone-800 mb-16 tracking-wider transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          ŞARAP.AI
        </h1>

        {/* 3D Realistic Grape Cluster */}
        <div className="relative mb-16 flex justify-center">
          <div 
            className="relative transition-transform duration-200 ease-out"
            style={{
              transform: `perspective(1000px) rotateX(${mousePosition.y * 0.3}deg) rotateY(${mousePosition.x * 0.5}deg)`
            }}
          >
            {/* Realistic 3D Grape Cluster with proper shading */}
            <div className="relative">
              
              {/* Grape stem */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-2 h-6 bg-gradient-to-b from-green-600 to-green-700 rounded-full shadow-md"></div>
              
              {/* Top row - 3 grapes */}
              <div className="flex justify-center space-x-1 mb-1">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="relative w-10 h-10">
                    {/* Main grape body */}
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 via-purple-600 to-purple-800 shadow-xl relative overflow-hidden">
                      {/* Top highlight */}
                      <div className="absolute top-1 left-2 w-3 h-3 bg-white/40 rounded-full blur-sm"></div>
                      {/* Side highlight */}
                      <div className="absolute top-2 right-1 w-1 h-4 bg-white/20 rounded-full"></div>
                      {/* Bottom shadow */}
                      <div className="absolute bottom-0 left-0 w-full h-3 bg-purple-900/30 rounded-full"></div>
                    </div>
                    {/* Grape shadow */}
                    <div className="absolute -bottom-1 left-1 w-8 h-2 bg-stone-300 rounded-full blur-sm opacity-30"></div>
                  </div>
                ))}
              </div>
              
              {/* Second row - 4 grapes */}
              <div className="flex justify-center space-x-0.5 mb-1">
                {[0, 1, 2, 3].map((i) => (
                  <div key={i} className="relative w-9 h-9">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-500 via-purple-700 to-purple-900 shadow-xl relative overflow-hidden">
                      <div className="absolute top-1 left-1.5 w-2.5 h-2.5 bg-white/35 rounded-full blur-sm"></div>
                      <div className="absolute top-1.5 right-0.5 w-0.5 h-3 bg-white/15 rounded-full"></div>
                      <div className="absolute bottom-0 left-0 w-full h-2.5 bg-purple-900/40 rounded-full"></div>
                    </div>
                    <div className="absolute -bottom-1 left-0.5 w-7 h-1.5 bg-stone-300 rounded-full blur-sm opacity-25"></div>
                  </div>
                ))}
              </div>
              
              {/* Third row - 5 grapes */}
              <div className="flex justify-center space-x-0 mb-1">
                {[0, 1, 2, 3, 4].map((i) => (
                  <div key={i} className="relative w-8 h-8">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 via-purple-800 to-stone-900 shadow-xl relative overflow-hidden">
                      <div className="absolute top-0.5 left-1 w-2 h-2 bg-white/30 rounded-full blur-sm"></div>
                      <div className="absolute top-1 right-0 w-0.5 h-2.5 bg-white/10 rounded-full"></div>
                      <div className="absolute bottom-0 left-0 w-full h-2 bg-stone-900/50 rounded-full"></div>
                    </div>
                    <div className="absolute -bottom-0.5 left-0.5 w-6 h-1 bg-stone-300 rounded-full blur-sm opacity-20"></div>
                  </div>
                ))}
              </div>
              
              {/* Fourth row - 4 grapes */}
              <div className="flex justify-center space-x-0.5 mb-1">
                {[0, 1, 2, 3].map((i) => (
                  <div key={i} className="relative w-7 h-7">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-700 via-stone-800 to-stone-900 shadow-xl relative overflow-hidden">
                      <div className="absolute top-0.5 left-1 w-1.5 h-1.5 bg-white/25 rounded-full blur-sm"></div>
                      <div className="absolute bottom-0 left-0 w-full h-1.5 bg-stone-900/60 rounded-full"></div>
                    </div>
                    <div className="absolute -bottom-0.5 left-0.5 w-5 h-1 bg-stone-300 rounded-full blur-sm opacity-15"></div>
                  </div>
                ))}
              </div>
              
              {/* Bottom row - 2 grapes */}
              <div className="flex justify-center space-x-1">
                {[0, 1].map((i) => (
                  <div key={i} className="relative w-6 h-6">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-800 via-stone-900 to-black shadow-xl relative overflow-hidden">
                      <div className="absolute top-0.5 left-0.5 w-1 h-1 bg-white/20 rounded-full blur-sm"></div>
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-black/70 rounded-full"></div>
                    </div>
                    <div className="absolute -bottom-0.5 left-0.5 w-4 h-0.5 bg-stone-300 rounded-full blur-sm opacity-10"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Clear and readable "ÇOK YAKINDA" */}
        <div className={`mb-8 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block px-12 py-4 bg-stone-800 text-white rounded-full shadow-2xl">
            <h2 className="text-2xl md:text-3xl font-bold tracking-widest">
              ÇOK YAKINDA
            </h2>
          </div>
        </div>

        {/* Subtitle */}
        <h3 className={`text-xl md:text-2xl font-normal text-stone-700 mb-12 tracking-wide leading-relaxed transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Dünya'nın İlk Türkçe Şarap Yapay Zekası
        </h3>

        {/* AI Processing Animation */}
        <div className={`flex justify-center items-center space-x-4 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-1.5 h-8 bg-gradient-to-t from-stone-600 to-amber-600 animate-pulse rounded-full"
                style={{
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: '1.5s'
                }}
              />
            ))}
          </div>
          <span className="text-stone-600 text-sm tracking-widest font-medium">YAKINDA AKTİF</span>
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-1.5 h-8 bg-gradient-to-t from-stone-600 to-amber-600 animate-pulse rounded-full"
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
