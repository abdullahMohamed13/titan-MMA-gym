import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import SportsMmaIcon from '@mui/icons-material/SportsMma';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative flex items-center justify-start min-h-[100vh] py-10 overflow-hidden">
      {/* Background Video */}
      <video
        className="opacity-0 md:opacity-100 absolute inset-0 w-full h-full object-cover"
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
          <div className="flex items-center relative justify-center md:mb-4">
            <img
              loading="lazy"
              src="/images/hero-section-brand-logo.webp"
              alt="Titan Gym Logo"
              className={`w-48 h-48 rounded-full border-4 border-[var(--color-primary)] shadow-2xl object-cover transition-all duration-1000 ${isLoaded ? 'scale-100 rotate-0' : 'scale-0 rotate-180'}`}
            />
          </div>

          {/* Main Headline */}
          <h1 className={`text-center bg-clip-text text-yellow-400 font-bold text-xl md:text-2xl transition-all duration-1000 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            WHERE CHAMPIONS ARE FORGED
          </h1>

          {/* Description */}
          <div className={`text-center space-y-4 transition-all duration-1000 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <p className="text-white text-center text-lg md:text-xl font-medium leading-relaxed">
              <span className=" text-[var(--color-primary)] font-bold">THE ULTIMATE MMA DESTINATION</span> for warriors who refuse to settle for ordinary.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6
              *:p-4 *:rounded-xl *:border *:bg-white/5 *:border-white/10">
              <div>
                <SportsMmaIcon sx={{mb: 2, fontSize: '24px'}} color='primary' />
                <p className="text-white font-semibold">150+ Locations</p>
                <p className="text-gray-300 text-sm">Worldwide Network</p>
              </div>
              <div>
                <div className="text-2xl mb-2">🏆</div>
                <p className="text-white font-semibold">UFC Champions</p>
                <p className="text-gray-300 text-sm">Trained Here</p>
              </div>
              <div>
                <div className="text-2xl mb-2">⚡</div>
                <p className="text-white font-semibold">24/7 Access</p>
                <p className="text-gray-300 text-sm">Train Anytime</p>
              </div>
            </div>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              We're not just a gym, we're the <span className="text-yellow-400 font-bold">ORIGINAL</span>, the <span className="text-yellow-400 font-bold">BIGGEST</span>, the <span className="text-yellow-400 font-bold">BEST</span>, and the <span className="text-[var(--color-primary)] font-bold">FASTEST-GROWING</span> MMA fitness network on the planet.
            </p>
          </div>
        </div>

        {/* CTA section */}
        <div className="flex justify-center md:justify-self-start w-full md:w-auto">
          <Link to="/pricing">
            <button
              className="rounded-2xl font-bold text-lg text-white hover:text-black hover:bg-white border-2 border-white/30 hover:border-transparent
                px-8 py-4 shadow-2xl backdrop-blur-sm transition-all duration-300 transform hover:scale-105">
                <SportsMmaIcon color='primary'/> BOOK YOUR FIRST CLASS
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
