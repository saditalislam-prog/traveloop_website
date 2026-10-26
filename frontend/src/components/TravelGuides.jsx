import { useState, useEffect } from 'react'
import { ArrowRight, Clock } from 'lucide-react'
import { getGuides } from '../services/api'

const fallbackGuides = [
  {
    title: '10 Best Places to Visit in 2025',
    tag: 'Travel Tips',
    tagColor: 'bg-teal',
    date: 'October 15, 2025',
    image: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?w=400',
  },
  {
    title: 'What to Pack for a Beach Vacation',
    tag: 'Packing Guide',
    tagColor: 'bg-gold',
    date: 'October 10, 2025',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400',
  },
  {
    title: 'Exploring Tokyo: A Complete Guide',
    tag: 'City Guide',
    tagColor: 'bg-purple-500',
    date: 'October 5, 2025',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400',
  },
]

export default function TravelGuides() {
  const [guides, setGuides] = useState(fallbackGuides)

  useEffect(() => {
    getGuides()
      .then((res) => {
        const data = res.data?.results || res.data
        if (Array.isArray(data) && data.length > 0) {
          const formatted = data.map((g, idx) => ({
            ...g,
            tag: g.category?.replace('_', ' ').replace(/\b\w/g, (l) => l.toUpperCase()) || 'Guide',
            tagColor: fallbackGuides[idx % fallbackGuides.length].tagColor,
          }))
          setGuides(formatted)
        }
      })
      .catch((err) => {
        console.info('Using fallback guides:', err.message)
      })
  }, [])
  return (
    <section className="py-16 lg:py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <p className="text-[#fb7207] font-semibold tracking-[0.2em] uppercase text-sm mb-2">
              Travel Tips & Guides
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-3">
              Latest Travel Guides
            </h2>
            <p className="text-gray-500 max-w-lg">
              Get inspired with travel tips, destination guides and expert
              advice for your next trip.
            </p>
          </div>
          <a
            href="#guides"
            className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-[#fb7207] font-bold hover:text-[#e55f00] transition-colors duration-200 group text-sm"
          >
            View All Guides
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform duration-200"
            />
          </a>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {guides.map((guide) => (
            <div
              key={guide.title}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={guide.image}
                  alt={guide.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span
                    className={`${guide.tagColor} text-white text-xs font-bold px-3 py-1 rounded-full`}
                  >
                    {guide.tag}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-navy group-hover:text-teal transition-colors duration-200 mb-3">
                  {guide.title}
                </h3>
                <p className="flex items-center gap-1.5 text-gray-400 text-sm">
                  <Clock size={14} />
                  {guide.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
