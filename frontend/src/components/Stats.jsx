import { Users, Building2, Globe, Headphones } from 'lucide-react'

const stats = [
  { icon: Users, value: '1M+', label: 'Happy Travelers' },
  { icon: Building2, value: '5K+', label: 'Verified Hotels' },
  { icon: Globe, value: '120+', label: 'Countries' },
  { icon: Headphones, value: '24/7', label: 'Customer Support' },
]

export default function Stats() {
  return (
    <section className="bg-bg-light py-12 lg:py-16 border-t border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="text-center">
              <div className="w-12 h-12 bg-navy/5 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Icon size={24} className="text-navy" />
              </div>
              <p className="text-2xl md:text-3xl font-extrabold text-navy">
                {value}
              </p>
              <p className="text-gray-500 text-sm mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
