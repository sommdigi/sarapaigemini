export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-stone-50 via-amber-50 to-stone-100 flex items-center justify-center p-4">
      {/* Wine Culture Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        
        {/* 🍷 Wine Glass Silhouettes */}
        <div className="absolute top-16 left-20 opacity-25 animate-pulse" style={{animationDuration: '3s'}}>
          <svg className="w-8 h-12 text-stone-500" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
            <path d="M8 2V11C8 13.21 9.79 15 12 15S16 13.21 16 11V2H8M11 16H13V20H16V22H8V20H11V16Z"/>
          </svg>
        </div>
        
        <div className="absolute bottom-24 right-16 opacity-20 animate-bounce" style={{animationDuration: '4s', animationDelay: '2s'}}>
          <svg className="w-6 h-10 text-amber-600" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
            <path d="M8 2V11C8 13.21 9.79 15 12 15S16 13.21 16 11V2H8M11 16H13V20H16V22H8V20H11V16Z"/>
          </svg>
        </div>

        {/* 🍇 Grape Clusters */}
        <div className="absolute top-32 right-24 opacity-30 animate-pulse" style={{animationDelay: '1s'}}>
          <div className="grid grid-cols-2 gap-0.5">
            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
            <div className="w-1 h-1 bg-purple-500 rounded-full ml-0.5"></div>
            <div className="w-1 h-1 bg-purple-500 rounded-full mr-0.5"></div>
          </div>
        </div>

        <div className="absolute bottom-40 left-32 opacity-25 animate-ping" style={{animationDuration: '4s', animationDelay: '3s'}}>
          <div className="grid grid-cols-3 gap-0.5">
            <div className="w-1 h-1 bg-amber-600 rounded-full"></div>
            <div className="w-1 h-1 bg-amber-600 rounded-full"></div>
            <div className="w-1 h-1 bg-amber-600 rounded-full"></div>
            <div className="w-0.5 h-0.5 bg-amber-700 rounded-full ml-1"></div>
            <div className="w-0.5 h-0.5 bg-amber-700 rounded-full"></div>
            <div className="w-0.5 h-0.5 bg-amber-700 rounded-full mr-1"></div>
          </div>
        </div>

        {/* 🍾 Wine Bottle Silhouettes */}
        <div className="absolute top-40 left-16 opacity-20 animate-bounce" style={{animationDuration: '5s'}}>
          <svg className="w-4 h-14 text-stone-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 2V4H8V6H9V8C9 8.55 9.45 9 10 9H11V20C11 21.1 11.9 22 13 22C14.1 22 15 21.1 15 20V9H16C16.55 9 17 8.55 17 8V6H18V4H17V2H9Z"/>
          </svg>
        </div>

        {/* 🍃 Vine Leaves */}
        <div className="absolute top-24 right-32 opacity-25 animate-pulse" style={{animationDelay: '2s'}}>
          <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,15.5C2,15.5 2,16.75 3,16.75C3,16.75 3.75,16.75 4,16.5C4,16.5 17,8 17,8Z"/>
          </svg>
        </div>

        <div className="absolute bottom-32 right-40 opacity-20 animate-bounce" style={{animationDuration: '6s', animationDelay: '1s'}}>
          <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,15.5C2,15.5 2,16.75 3,16.75C3,16.75 3.75,16.75 4,16.5C4,16.5 17,8 17,8Z"/>
          </svg>
        </div>

        {/* 📚 Wine Knowledge Books */}
        <div className="absolute top-52 left-24 opacity-25 animate-pulse" style={{animationDelay: '4s'}}>
          <svg className="w-8 h-6 text-stone-500" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
            <path d="M6.5 2H20V22H6.5A2.5 2.5 0 0 1 4 19.5V4.5A2.5 2.5 0 0 1 6.5 2Z"></path>
          </svg>
        </div>

        {/* 🍽️ Food Pairing Elements */}
        <div className="absolute bottom-52 left-16 opacity-20 animate-bounce" style={{animationDuration: '7s'}}>
          <svg className="w-8 h-6 text-amber-600" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
            <path d="M3 12h18m-9-9v18M8 8l4-4 4 4M16 16l-4 4-4-4"/>
          </svg>
        </div>

        {/* 🧀 Cheese Pairing */}
        <div className="absolute top-60 right-20 opacity-25 animate-pulse" style={{animationDelay: '5s'}}>
          <div className="w-6 h-4 bg-amber-200 border border-amber-400 transform rotate-12 rounded-sm">
            <div className="w-1 h-1 bg-amber-500 rounded-full absolute top-1 left-1"></div>
            <div className="w-0.5 h-0.5 bg-amber-500 rounded-full absolute top-2 right-1"></div>
          </div>
        </div>

        {/* 🏡 Vineyard House */}
        <div className="absolute bottom-28 left-40 opacity-20 animate-pulse" style={{animationDelay: '6s'}}>
          <svg className="w-8 h-6 text-stone-600" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
            <path d="M3 21L12 2L21 21H3Z"/>
            <path d="M9 21V12H15V21"/>
          </svg>
        </div>

        {/* 🛤️ Vineyard Paths */}
        <div className="absolute top-1/2 left-8 opacity-15 animate-pulse" style={{animationDelay: '7s'}}>
          <div className="w-12 h-0.5 bg-stone-400 transform rotate-12"></div>
          <div className="w-8 h-0.5 bg-stone-400 transform rotate-12 mt-2 ml-2"></div>
        </div>

        {/* Additional floating dots for depth */}
        <div className="absolute top-1/4 right-1/4 opacity-30 animate-ping" style={{animationDelay: '3s'}}>
          <div className="w-1 h-1 bg-amber-600 rounded-full"></div>
        </div>
        
        <div className="absolute bottom-1/3 left-1/3 opacity-25 animate-ping" style={{animationDuration: '4s', animationDelay: '1.5s'}}>
          <div className="w-1.5 h-1.5 bg-stone-500 rounded-full"></div>
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

        {/* Zen-style Coming Soon Button */}
        <div className="pt-8">
          <div className="relative group">
            {/* Subtle outer glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-stone-300 to-amber-200 rounded-full blur-md opacity-20 group-hover:opacity-30 transition-all duration-1000"></div>
            
            {/* Main button with breathing animation */}
            <div className="relative inline-block px-10 py-5 bg-gradient-to-r from-stone-800 to-stone-900 text-white rounded-full shadow-2xl transform hover:scale-105 transition-all duration-700 animate-pulse" style={{animationDuration: '3s'}}>
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
