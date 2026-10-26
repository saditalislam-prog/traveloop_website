import { useState, useEffect } from 'react'
import { MapPin, Star, ArrowRight } from 'lucide-react'
import { getDestinations } from '../services/api'

const fallbackDestinations = [
  {
    name: 'Bali',
    country: 'Indonesia',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400',
  },
  {
    name: 'Dubai',
    country: 'UAE',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400',
  },
  {
    name: 'Santorini',
    country: 'Greece',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=400',
  },
  {
    name: 'Tokyo',
    country: 'Japan',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400',
  },
]

export default function PopularDestinations() {
  const [destinations, setDestinations] = useState(fallbackDestinations)

  useEffect(() => {
    getDestinations()
      .then((res) => {
        const data = res.data?.results || res.data
        if (Array.isArray(data) && data.length > 0) {
          setDestinations(data)
        }
      })
      .catch((err) => {
        console.info('Using fallback destinations:', err.message)
      })
  }, [])
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <p className="text-teal font-semibold tracking-[0.2em] uppercase text-sm mb-2">
              Explore the World
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-3">
              Popular Destinations
            </h2>
            <p className="text-gray-500 max-w-lg">
              From tropical beaches to bustling cities, find the perfect place
              for your next adventure.
            </p>
          </div>
          <a
            href="#destinations"
            className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-[#fb7207] font-bold hover:text-[#e55f00] transition-colors duration-200 group text-sm"
          >
            View All Destinations
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform duration-200"
            />
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((dest) => (
            <div
              key={dest.name}
              className="group cursor-pointer rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 flex items-center gap-1 bg-[#fb7207] text-white px-2.5 py-1 rounded-full text-xs font-bold shadow-sm">
                  <Star size={12} fill="currentColor" />
                  {dest.rating}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-navy group-hover:text-teal transition-colors duration-200">
                  {dest.name}
                </h3>
                <p className="flex items-center gap-1 text-gray-500 text-sm mt-1">
                  <MapPin size={14} />
                  {dest.country}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
