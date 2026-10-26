import { ArrowRight, Home, Building, Castle, Palmtree, Warehouse } from 'lucide-react'

const categories = [
  { icon: Castle, label: 'Villas' },
  { icon: Building, label: 'Resorts' },
  { icon: Home, label: 'Apartments' },
  { icon: Palmtree, label: 'Bungalows' },
  { icon: Warehouse, label: 'Guest Houses' },
]

export default function LuxuryStays() {
  return (
    <section className="py-16 lg:py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left - Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800"
              alt="Luxury overwater bungalows"
              className="w-full h-80 lg:h-[480px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
          </div>

          {/* Right - Content */}
          <div>
            <p className="text-[#fb7207] font-semibold tracking-[0.2em] uppercase text-sm mb-2">
              Premium Collection
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4 leading-tight">
              Luxury Stays for
              <br />
              Special Moments
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              From romantic getaways to family vacations, find stays that make
              every moment count. Experience world-class hospitality and
              breathtaking views.
            </p>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-3 mb-8">
              {categories.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="flex items-center gap-2 px-4 py-2.5 bg-white rounded-full text-sm font-medium text-navy shadow-sm border border-gray-100 hover:border-teal hover:text-teal cursor-pointer transition-all duration-200"
                >
                  <Icon size={16} />
                  {label}
                </span>
              ))}
            </div>

            <a
              href="#stays"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#fb7207] hover:bg-[#e55f00] text-white font-bold rounded-full transition-all duration-300 shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/35 hover:-translate-y-0.5 group"
            >
              Explore Luxury Stays
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
