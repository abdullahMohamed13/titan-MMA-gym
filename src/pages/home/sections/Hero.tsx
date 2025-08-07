import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative flex items-center justify-start min-h-[100vh] py-10 overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        muted
        autoPlay
        loop
        playsInline
        poster="images/titan-gym-2.webp"
        aria-label="Background training video"
      >
        <source src="videos/hero.mp4" type="video/mp4" />
        {/* Fallback for very old browsers */}
        <div className="flex items-center justify-center w-full h-full bg-black text-white">
          <img
            loading="lazy"
            src="images/titan-gym-2.webp"
            alt="Gym logo"
            className="max-w-xs mx-auto"
          />
          <p className="sr-only">Video not supported in this browser.</p>
        </div>
      </video>

      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-20 left-20 w-32 h-32 border-2 border-red-500/30 rounded-full animate-pulse transition-all duration-1000 ${isLoaded ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}></div>
        <div className={`absolute bottom-32 right-32 w-24 h-24 border-2 border-orange-500/30 rounded-full animate-pulse transition-all duration-1000 delay-300 ${isLoaded ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}></div>
        <div className={`absolute top-1/2 right-1/4 w-16 h-16 border-2 border-yellow-500/30 rounded-full animate-pulse transition-all duration-1000 delay-600 ${isLoaded ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}></div>
      </div>
      
      <div className="relative z-10 flex flex-col gap-8 items-start justify-center h-full px-6 sm:px-10 md:px-16 max-w-4xl">
        
        {/* Main Content Card */}
        <div className={`w-full bg-black/70 backdrop-blur-md rounded-3xl p-8 md:p-12 flex flex-col gap-8 text-left border border-white/10 shadow-2xl transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
          {/* Logo Section */}
          <div className="flex items-center justify-center mb-4">
            <div className="relative">
              <img
                loading="lazy"
                src="/images/hero-section-brand-logo.webp"
                alt="Titan Gym Logo"
                className={`w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-red-500 shadow-2xl object-cover transition-all duration-1000 ${isLoaded ? 'scale-100 rotate-0' : 'scale-0 rotate-180'}`}
              />
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                <span className="text-white text-xs font-bold">🔥</span>
              </div>
            </div>
          </div>

          {/* Main Headline */}
          <div className="text-center mb-6">
            <h1 className={`text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <span className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                TITAN GYM
              </span>
            </h1>
            <p className={`text-xl md:text-2xl text-red-400 font-bold mb-2 transition-all duration-1000 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              WHERE CHAMPIONS ARE FORGED
            </p>
          </div>

          {/* Description */}
          <div className={`space-y-4 transition-all duration-1000 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <p className="text-white text-lg md:text-xl font-medium leading-relaxed">
              <span className="text-red-400 font-bold">THE ULTIMATE MMA DESTINATION</span> for warriors who refuse to settle for ordinary.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="text-2xl mb-2">🥊</div>
                <p className="text-white font-semibold">150+ Locations</p>
                <p className="text-gray-300 text-sm">Worldwide Network</p>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="text-2xl mb-2">🏆</div>
                <p className="text-white font-semibold">UFC Champions</p>
                <p className="text-gray-300 text-sm">Trained Here</p>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="text-2xl mb-2">⚡</div>
                <p className="text-white font-semibold">24/7 Access</p>
                <p className="text-gray-300 text-sm">Train Anytime</p>
              </div>
            </div>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              We're not just a gym—we're the <span className="text-red-400 font-bold">ORIGINAL</span>, the <span className="text-orange-400 font-bold">BIGGEST</span>, the <span className="text-yellow-400 font-bold">BEST</span>, and the <span className="text-red-400 font-bold">FASTEST-GROWING</span> MMA fitness network on the planet.
            </p>
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 w-full transition-all duration-1000 delay-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <Link to="/classes" className="flex-1">
            <button className="w-full rounded-2xl px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold text-lg shadow-2xl hover:shadow-red-500/25 transition-all duration-300 transform hover:scale-105 border-2 border-red-500/50">
              🥊 BOOK YOUR FIRST CLASS
            </button>
          </Link>
          
          <Link to="/products" className="flex-1">
            <button className="w-full rounded-2xl px-8 py-4 border-2 border-white/30 text-white font-bold text-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300 transform hover:scale-105 shadow-2xl">
              <span className="flex items-center justify-center gap-2">
                🛡️ EXPLORE GEAR & PRODUCTS
              </span>
            </button>
          </Link>
        </div>

        {/* Floating Action Button */}
        <div className={`absolute bottom-8 right-8 transition-all duration-1000 delay-1200 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <button className="w-16 h-16 bg-red-600 hover:bg-red-700 rounded-full shadow-2xl hover:shadow-red-500/50 transition-all duration-300 transform hover:scale-110 flex items-center justify-center">
            <span className="text-2xl">🔥</span>
          </button>
        </div>

        {/* Scroll Indicator */}
        {/* <div className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex flex-col items-center text-white/60">
            <span className="text-sm mb-2">SCROLL TO EXPLORE</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}
