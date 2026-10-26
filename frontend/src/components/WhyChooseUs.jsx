import { Tag, ShieldCheck, CalendarX2, Headphones } from 'lucide-react'

const features = [
  {
    icon: Tag,
    title: 'Best Rates Always',
    desc: 'We guarantee the best prices. Find a lower rate elsewhere? We\'ll match it — no questions asked.',
    color: 'bg-teal/10 text-teal',
  },
  {
    icon: ShieldCheck,
    title: 'Verified Properties',
    desc: 'Every property is personally reviewed and verified for quality, safety, and comfort.',
    color: 'bg-emerald-50 text-emerald-500',
  },
  {
    icon: CalendarX2,
    title: 'Flexible Cancellations',
    desc: 'Plans change — we get it. Enjoy free cancellation on most bookings up to 48 hours before check-in.',
    color: 'bg-purple-50 text-purple-500',
  },
  {
    icon: Headphones,
    title: 'Travel Support 24/7',
    desc: 'Our dedicated support team is available around the clock to help you with anything you need.',
    color: 'bg-gold/10 text-gold-dark',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-[#fb7207] font-semibold tracking-[0.2em] uppercase text-sm mb-2">
            Why Choose Traveloop
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Your Travel, Our Priority
          </h2>
          <p className="text-gray-500">
            We make travel simple, safe and unforgettable — with the best
            options, prices and support.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map(({ icon: Icon, title, desc, color }) => (
            <div
              key={title}
              className="text-center group"
            >
              <div
                className={`w-16 h-16 ${color} rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                <Icon size={28} />
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
