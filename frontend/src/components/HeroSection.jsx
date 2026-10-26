import { useState, useEffect } from 'react'
import { Shield, CreditCard, Headphones, CalendarCheck, ChevronLeft, ChevronRight, MapPin } from 'lucide-react'

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1920&q=85',
    tag: 'PARADISE RETREATS · MALDIVES',
    title: 'Private Overwater',
    highlight: 'Sanctuaries',
    subtitle: 'Wake up to crystalline turquoise lagoons, private sun decks, and world-class bespoke island hospitality.',
    location: 'North Malé Atoll, Maldives',
  },
  {
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=1920&q=85',
    tag: 'ALPINE MAJESTY · SWITZERLAND',
    title: 'Enchanting Winter',
    highlight: 'Wonderlands',
    subtitle: 'Experience snow-draped Swiss alpine chalets, fireside luxury, and panoramic Matterhorn starlit vistas.',
    location: 'Zermatt, Swiss Alps',
  },
  {
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1920&q=85',
    tag: 'ANCIENT HERITAGE · JAPAN',
    title: 'Magical Lanternlit',
    highlight: 'Evenings',
    subtitle: 'Stroll through historic stone paths, illuminated Yasaka pagodas, and tranquil traditional ryokans.',
    location: 'Kyoto, Japan',
  },
  {
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1920&q=85',
    tag: 'MEDITERRANEAN HORIZONS · GREECE',
    title: 'Breathtaking Sunset',
    highlight: 'Calderas',
    subtitle: 'Perch atop dramatic whitewashed cliffs overlooking azure seas, infinity pools, and world-famous sunsets.',
    location: 'Oia, Santorini, Greece',
  },
  {
    image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1920&q=85',
    tag: 'ARCTIC SPECTACLE · NORWAY',
    title: 'Dancing Aurora &',
    highlight: 'Fjords',
    subtitle: 'Witness the ethereal Northern Lights dancing across dark arctic skies from heated luxury glass lodges.',
    location: 'Tromsø & Lofoten, Norway',
  },
  {
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=85',
    tag: 'DESERT LUXURY · DUBAI',
    title: 'Futuristic Wonder &',
    highlight: 'Opulence',
    subtitle: 'Indulge in skyline penthouse suites, rooftop infinity lounges, and private starlit desert safaris.',
    location: 'Downtown Dubai, UAE',
  },
]

const badges = [
  { icon: CreditCard, label: 'Best Price Guarantee' },
  { icon: CalendarCheck, label: 'Easy Booking' },
  { icon: Headphones, label: '24/7 Support' },
  { icon: Shield, label: 'Secure Payments' },
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto advance slides every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Dark Slide Images Carousel */}
      {slides.map((slide, idx) => (
        <div
          key={slide.location}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? 'opacity-100 z-0' : 'opacity-0 -z-10'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.location}
            className={`w-full h-full object-cover transition-transform duration-7000 ease-out ${
              idx === currentSlide ? 'scale-105' : 'scale-100'
            }`}
          />
          {/* Deep Cinematic Dark Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/65 to-slate-950/80" />
          <div className="absolute inset-0 bg-radial-[at_center_center] from-transparent via-slate-950/45 to-slate-950/95" />
        </div>
      ))}

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28 pb-32 sm:pb-36">
        {/* Destination Location Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold mb-6 animate-fade-in shadow-sm">
          <MapPin size={14} className="text-[#fb7207]" />
          <span>{slides[currentSlide].location}</span>
        </div>

        {/* Tagline */}
        <p className="text-[#fb7207] font-bold tracking-[0.25em] uppercase text-xs sm:text-sm mb-3">
          {slides[currentSlide].tag}
        </p>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 tracking-tight">
          {slides[currentSlide].title}{' '}
          <span className="bg-gradient-to-r from-[#fb7207] via-orange-400 to-amber-300 bg-clip-text text-transparent">
            {slides[currentSlide].highlight}
          </span>
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-slate-200 max-w-2xl mx-auto mb-9 leading-relaxed font-normal">
          {slides[currentSlide].subtitle}
        </p>

        {/* Action Buttons - Brand Orange Unified */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="#stays"
            className="w-full sm:w-auto px-8 py-3.5 bg-[#fb7207] hover:bg-[#e55f00] text-white font-bold rounded-full transition-all duration-300 shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 hover:-translate-y-0.5 active:translate-y-0 text-center"
          >
            Explore Stays
          </a>
          <a
            href="#why-us"
            className="w-full sm:w-auto px-8 py-3.5 border border-white/30 hover:border-white/70 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full backdrop-blur-md transition-all duration-300 text-center"
          >
            Why Traveloop
          </a>
        </div>

        {/* 4 Trust Badges - Completely Visible, Clear & Uncovered */}
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-2">
          {badges.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 bg-slate-900/85 backdrop-blur-md rounded-2xl px-4 py-3.5 border border-white/20 shadow-lg text-left hover:border-[#fb7207]/50 transition-colors"
            >
              <div className="p-2 bg-[#fb7207]/20 rounded-xl shrink-0">
                <Icon size={19} className="text-[#fb7207]" />
              </div>
              <span className="text-white text-xs sm:text-sm font-bold leading-tight">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Slider Controls - Left / Right Chevrons */}
      <button
        onClick={prevSlide}
        className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 items-center justify-center rounded-full bg-slate-900/70 hover:bg-[#fb7207] text-white border border-white/20 hover:border-[#fb7207] backdrop-blur-md transition-all duration-200 shadow-lg"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        onClick={nextSlide}
        className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 items-center justify-center rounded-full bg-slate-900/70 hover:bg-[#fb7207] text-white border border-white/20 hover:border-[#fb7207] backdrop-blur-md transition-all duration-200 shadow-lg"
        aria-label="Next Slide"
      >
        <ChevronRight size={22} />
      </button>

      {/* Slider Indicator Dots */}
      <div className="absolute bottom-6 sm:bottom-8 z-20 flex items-center justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`transition-all duration-300 rounded-full ${
              i === currentSlide
                ? 'w-8 h-2.5 bg-[#fb7207]'
                : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
