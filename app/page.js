export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-stone-50 via-amber-50 to-stone-100 flex items-center justify-center p-4">
      {/* Futuristic Wine Geometry Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Digital Wine Glass Outline */}
        <div className="absolute top-16 left-20 opacity-30 animate-pulse" style={{animationDuration: '3s'}}>
          <svg className="w-12 h-16 text-stone-400" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
            <path d="M8 2V11C8 13.21 9.79 15 12 15S16 13.21 16 11V2H8M11 16H13V20H16V22H8V20H11V16Z"/>
          </svg>
        </div>

        {/* Floating Wine Bottle Silhouette */}
        <div className="absolute top-32 right-16 opacity-25 animate-bounce" style={{animationDuration: '4s', animationDelay: '1s'}}>
          <svg className="w-6 h-20 text-stone-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 2V4H8V6H9V8C9 8.55 9.45 9 10 9H11V20C11 21.1 11.9 22 13 22C14.1 22 15 21.1 15 20V9H16C16.55 9 17 8.55 17 8V6H18V4H17V2H9Z"/>
          </svg>
        </div>

        {/* Neural Network Wine Connections */}
        <div className="absolute top-40 left-32 opacity-20">
          <div className="relative">
            <div className="w-2 h-2 bg-amber-600 rounded-full animate-ping"></div>
            <div className="absolute top-0 left-0 w-16 h-0.5 bg-gradient-to-r from-amber-600 to-transparent transform rotate-45 animate-pulse"></div>
            <div className="absolute top-0 left-0 w-12 h-0.5 bg-gradient-to-r from-amber-600 to-transparent transform -rotate-12 animate-pulse" style={{animationDelay: '0.5s'}}></div>
          </div>
        </div>

        {/* Grape Cluster Digital Pattern */}
        <div className="absolute bottom-32 left-16 opacity-30 animate-pulse" style={{animationDuration: '2.5s', animationDelay: '2s'}}>
          <div className="grid grid-cols-3 gap-1">
            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full ml-1"></div>
            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-1"></div>
            <div className="w-1 h-1 bg-purple-400 rounded-full ml-2"></div>
            <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
            <div className="w-1 h-1 bg-purple-400 rounded-full mr-2"></div>
          </div>
        </div>

        {/* AI Data Flow Lines */}
        <div className="absolute top-20 right-32 opacity-25">
          <div className="flex flex-col space-y-2">
            <div className="w-16 h-0.5 bg-gradient-to-r from-stone-500 to-transparent animate-pulse"></div>
            <div className="w-12 h-0.5 bg-gradient-to-r from-stone-500 to-transparent animate-pulse" style={{animationDelay: '0.3s'}}></div>
            <div className="w-20 h-0.5 bg-gradient-to-r from-stone-500 to-transparent animate-pulse" style={{animationDelay: '0.6s'}}></div>
          </div>
        </div>

        {/* Cork Geometric Shape */}
        <div className="absolute bottom-40 right-24 opacity-20 animate-bounce" style={{animationDuration: '5s'}}>
          <div className="w-3 h-8 bg-amber-700 rounded-sm transform rotate-12"></div>
        </div>

        {/* Floating Digital Nodes */}
        <div className="absolute top-1/3 left-1/4 opacity-40">
          <div className="relative">
            <div className="w-3 h-3 bg-stone-600 rounded-full animate-ping" style={{animationDuration: '3s'}}></div>
            <div className="absolute top-1 left-1 w-1 h-1 bg-white rounded-full"></div>
          </div>
        </div>

        <div className="absolute bottom-1/4 right-1/3 opacity-35">
          <div className="relative">
            <div className="w-2 h-2 bg-amber-600 rounded-full animate-ping" style={{animationDuration: '4s', animationDelay: '1s'}}></div>
            <div className="absolute top-0.5 left-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
          </div>
        </div>

        {/* Wine Drop Digital Effect */}
        <div className="absolute top-60 right-40 opacity-30 animate-bounce" style={{animationDuration: '3s', animationDelay: '1.5s'}}>
          <div className="w-4 h-6 bg-red-800 rounded-full rounded-t-none transform rotate-180"></div>
        </div>

        {/* Futuristic Grid Pattern */}
        <div className="absolute bottom-20 left-1/2 opacity-15">
          <div className="grid grid-cols-4 gap-2">
            {Array.from({length: 8}).map((_, i) => (
              <div key={i} className="w-1 h-1 bg-stone-400 rounded-full animate-pulse" style={{animationDelay: `${i * 0.2}s`}}></div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-2xl w-full text-center relative z-10 space-y-12">
        {/* Brand name - BIGGER & BOLDER */}
        <div className="space-y-4">
          <h1 className="text-7xl md:text-8xl font-bold text-stone-800 tracking-wider drop-shadow-sm">
            ŞARAP.AI
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto animate-pulse"></div>
        </div>

        {/* Value proposition - More Dynamic */}
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-stone-700 leading-relaxed tracking-wide">
            Şarabı Türkçe Anlatan Yapay Zeka
          </h2>
          <div className="flex justify-center space-x-2 opacity-60">
            <div className="w-2 h-2 bg-amber-600 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-stone-600 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
            <div className="w-2 h-2 bg-amber-600 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
          </div>
        </div>

        {/* Coming soon with POWER */}
        <div className="pt-8">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-stone-600 to-amber-600 rounded-full blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative px-12 py-6 bg-stone-800 text-white rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300">
              <p className="text-xl md:text-2xl font-bold tracking-wider">
                ÇOK YAKINDA
              </p>
            </div>
          </div>
        </div>

        {/* Futuristic Loading Indicator */}
        <div className="flex justify-center items-center space-x-3 pt-8">
          <div className="w-3 h-3 bg-gradient-to-r from-stone-600 to-amber-600 rounded-full animate-pulse"></div>
          <div className="w-8 h-0.5 bg-gradient-to-r from-stone-600 to-amber-600 animate-pulse" style={{animationDelay: '0.2s'}}></div>
          <div className="w-3 h-3 bg-gradient-to-r from-amber-600 to-stone-600 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
          <div className="w-8 h-0.5 bg-gradient-to-r from-amber-600 to-stone-600 animate-pulse" style={{animationDelay: '0.6s'}}></div>
          <div className="w-3 h-3 bg-gradient-to-r from-stone-600 to-amber-600 rounded-full animate-pulse" style={{animationDelay: '0.8s'}}></div>
        </div>
      </div>
    </div>
  );
}
