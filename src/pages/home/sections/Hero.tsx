import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative flex items-center justify-start min-h-[100vh] py-10 overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        muted
        autoPlay
        loop
        playsInline
        poster="images/just-brand-logo.png"
        aria-label="Background training video"
      >
        <source src="videos/hero.mp4" type="video/mp4" />
        <source src="videos/hero.webm" type="video/webm" />
        {/* Fallback for very old browsers */}
        <div className="flex items-center justify-center w-full h-full bg-black text-white">
          <img
            src="images/just-brand-logo.png"
            alt="Gym logo"
            className="max-w-xs mx-auto"
          />
          <p className="sr-only">Video not supported in this browser.</p>
        </div>
      </video>
      
      <div className="relative z-10 flex flex-col gap-6 items-start justify-center h-full px-6 sm:px-10 md:px-16 max-w-3xl">
        <div className="w-full bg-black/60 backdrop-blur-sm rounded-2xl p-8 flex flex-col gap-6 text-left">
        <img
        src="/images/hero-section-brand-logo.png"
        alt="Titan Gym Logo"
        className="flex my-0 mx-auto items-center justify-center gap-4 w-20 h-20 sm:w-25 sm:h-25 md:w-30 md:h-30 rounded-full border-2 border-white shadow-xl object-cover"
        />
          <p className="text-white text-sm sm:text-base md:text-lg font-medium leading-relaxed">
            WE ARE TITAN GYM.
            The ultimate destination for MMA and fitness warriors.
            We're not just a gym—we're the original, the biggest, the best, and the fastest-growing MMA fitness network on the planet.

            Train like a champion at 150+ locations worldwide, with 40 countries in our sights by 2027.
            Wherever you are, Titan Gym is your arena.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <Link to="/classes">
            <button className="w-full sm:w-auto rounded-lg px-6 py-3 bg-primary hover:bg-white text-white hover:text-black font-semibold shadow-lg transition">
              Book A Class
            </button>
          </Link>
          <Link to="/products">
            <button className="w-full sm:w-auto rounded-lg px-6 py-3 border border-white text-white font-semibold hover:bg-white hover:text-gray-900 transition">
              Explore Our Products
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
