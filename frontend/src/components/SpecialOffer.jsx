import { ArrowRight, Sparkles } from 'lucide-react'

export default function SpecialOffer() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-teal via-sky-500 to-blue-600 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            {/* Left Content */}
            <div className="p-8 md:p-12 lg:p-16 relative z-10">
              <span className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full mb-6">
                <Sparkles size={14} />
                SPECIAL OFFER
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
                Up to 40% Off on
                <br />
                Your Dream Stay
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-md">
                Book now and enjoy exclusive deals on selected hotels and
                resorts worldwide.
              </p>
              <a
                href="#stays"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#fb7207] hover:bg-[#e55f00] text-white font-bold rounded-full transition-all duration-300 shadow-lg shadow-orange-950/30 hover:shadow-xl hover:-translate-y-0.5 group"
              >
                Explore Deals
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
              </a>
            </div>

            {/* Right - Decorative */}
            <div className="relative hidden lg:flex items-center justify-center min-h-[320px]">
              {/* Decorative circles */}
              <div className="absolute w-64 h-64 rounded-full bg-white/5 -right-8 -top-8" />
              <div className="absolute w-48 h-48 rounded-full bg-white/10 right-12 bottom-4" />
              <div className="absolute w-32 h-32 rounded-full bg-white/5 right-48 top-8" />

              {/* Travel More text */}
              <div className="relative z-10 text-center">
                <p className="text-6xl font-extrabold text-white/10 italic select-none">
                  Travel
                </p>
                <p className="text-7xl font-extrabold text-white/15 italic -mt-4 select-none">
                  More
                </p>
              </div>

              {/* Beach image */}
              <img
                src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400"
                alt="Travel destination"
                className="absolute bottom-0 right-0 w-64 h-48 object-cover rounded-tl-3xl opacity-30"
              />
            </div>
          </div>

          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
            <svg viewBox="0 0 400 400" className="w-full h-full">
              <circle cx="300" cy="100" r="120" fill="white" />
              <circle cx="200" cy="300" r="80" fill="white" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
