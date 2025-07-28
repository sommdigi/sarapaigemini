export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-stone-50 via-amber-50 to-stone-100 flex items-center justify-center p-4">
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large floating triangle */}
        <div className="absolute top-20 left-16 opacity-30 animate-pulse">
          <div className="w-16 h-16 border-l-2 border-t-2 border-stone-400 transform rotate-45"></div>
        </div>
        
        {/* Floating circle */}
        <div className="absolute top-32 right-20 opacity-25 animate-bounce" style={{animationDuration: '4s'}}>
          <div className="w-12 h-12 border-2 border-stone-400 rounded-full"></div>
        </div>
        
        {/* Small geometric square */}
        <div className="absolute bottom-32 left-24 opacity-20 animate-pulse" style={{animationDelay: '2s'}}>
          <div className="w-8 h-8 border border-stone-400 transform rotate-12"></div>
        </div>
        
        {/* Ultra minimal grape hint - single dot */}
        <div className="absolute bottom-40 right-32 opacity-40 animate-ping" style={{animationDuration: '3s'}}>
          <div className="w-3 h-3 bg-amber-600 rounded-full"></div>
        </div>
        
        {/* Floating rectangle */}
        <div className="absolute top-1/2 right-16 opacity-20 animate-bounce" style={{animationDuration: '5s', animationDelay: '1s'}}>
          <div className="w-20 h-4 border border-stone-400 transform -rotate-12"></div>
        </div>
        
        {/* Small floating dots */}
        <div className="absolute top-40 left-1/3 opacity-30 animate-ping" style={{animationDelay: '3s'}}>
          <div className="w-2 h-2 bg-stone-400 rounded-full"></div>
        </div>
        
        <div className="absolute bottom-20 right-1/4 opacity-25 animate-ping" style={{animationDuration: '4s', animationDelay: '1.5s'}}>
          <div className="w-1.5 h-1.5 bg-amber-600 rounded-full"></div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-lg w-full text-center relative z-10 space-y-8">
        {/* Brand name */}
        <div className="space-y-2">
          <h1 className="text-5xl md:text-6xl font-light text-stone-800 tracking-wider">
            Sarap.ai
          </h1>
        </div>

        {/* Value proposition */}
        <div className="space-y-4">
          <h2 className="text-xl md:text-2xl font-normal text-stone-700 leading-relaxed tracking-wide">
            Şarabı Türkçe Anlatan Yapay Zeka
          </h2>
        </div>

        {/* Enhanced Zen-style Coming Soon Button */}
        <div className="pt-8">
          <div className="relative group">
            {/* Subtle outer glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-stone-300 to-amber-200 rounded-full blur-md opacity-20 group-hover:opacity-30 transition-all duration-1000"></div>
            
            {/* Main button with breathing animation */}
            <div className="relative inline-block px-12 py-5 bg-gradient-to-r from-stone-800 to-stone-900 text-white rounded-full shadow-2xl transform hover:scale-105 transition-all duration-700 animate-pulse" style={{animationDuration: '3s'}}>
              {/* Inner zen glow */}
              <div className="absolute inset-1 bg-gradient-to-r from-stone-700 to-stone-800 rounded-full opacity-50"></div>
              
              <p className="relative text-lg md:text-xl font-light tracking-[0.3em] text-center">
                ÇOK YAKINDA
              </p>
              
              {/* Zen dots below text */}
              <div className="flex justify-center space-x-2 mt-2">
                <div className="w-1 h-1 bg-amber-200 rounded-full opacity-60"></div>
                <div className="w-1 h-1 bg-white rounded-full opacity-40"></div>
                <div className="w-1 h-1 bg-amber-200 rounded-full opacity-60"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle loading indicator */}
        <div className="flex justify-center items-center space-x-1 pt-6">
          <div className="w-2 h-2 bg-stone-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-stone-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
          <div className="w-2 h-2 bg-stone-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
        </div>
      </div>
    </div>
  );
}
