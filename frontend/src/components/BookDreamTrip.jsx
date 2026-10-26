import { ArrowRight } from 'lucide-react'

export default function BookDreamTrip() {
  return (
    <section className="relative py-20 lg:py-28 bg-navy overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 rounded-full bg-teal/5 -top-48 -left-24" />
        <div className="absolute w-64 h-64 rounded-full bg-gold/5 -bottom-32 -right-16" />
        <div className="absolute w-48 h-48 rounded-full bg-teal/5 top-1/2 right-1/4" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gold font-semibold tracking-[0.2em] uppercase text-sm mb-4">
          Ready for Your Next Adventure?
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
          Book Your Dream Trip Today
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
          Explore amazing destinations, top-rated hotels and exclusive deals —
          all at your fingertips.
        </p>
        <a
          href="#search"
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#fb7207] hover:bg-[#e55f00] text-white font-bold rounded-full transition-all duration-300 shadow-xl shadow-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/40 hover:-translate-y-0.5 text-lg group"
        >
          Start Booking
          <ArrowRight
            size={20}
            className="group-hover:translate-x-1 transition-transform duration-200"
          />
        </a>
      </div>
    </section>
  )
}
