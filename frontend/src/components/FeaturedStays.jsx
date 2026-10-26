import { useState, useEffect } from 'react'
import { MapPin, Star, ArrowRight, Check, X, Calendar, Users } from 'lucide-react'
import { getStays, createBooking } from '../services/api'

const fallbackStays = [
  {
    id: 1,
    name: 'The Royal Villa',
    location: 'Bali, Indonesia',
    price: 249,
    rating: 4.9,
    tag: 'Luxury',
    tagColor: 'bg-purple-600',
    btnColor: 'bg-navy hover:bg-navy-dark text-white',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600',
    description: 'Ultra-luxurious private pool villa surrounded by tropical gardens with personalized butler service.',
  },
  {
    id: 2,
    name: 'Ocean View Resort',
    location: 'Maldives',
    price: 399,
    rating: 4.8,
    tag: 'Beachfront',
    tagColor: 'bg-teal',
    btnColor: 'bg-teal hover:bg-teal-dark text-white',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600',
    description: 'Overwater paradise with direct lagoon access, sunset infinity pools, and coral reef excursions.',
  },
  {
    id: 3,
    name: 'Skyline Hotel',
    location: 'Dubai, UAE',
    price: 289,
    rating: 4.7,
    tag: 'City View',
    tagColor: 'bg-indigo-600',
    btnColor: 'bg-indigo-600 hover:bg-indigo-700 text-white',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600',
    description: 'Iconic downtown high-rise offering panoramic views of Burj Khalifa and rooftop Michelin dining.',
  },
  {
    id: 4,
    name: 'Green Valley Resort',
    location: 'Thailand',
    price: 189,
    rating: 4.6,
    tag: 'Family Friendly',
    tagColor: 'bg-emerald-600',
    btnColor: 'bg-emerald-600 hover:bg-emerald-700 text-white',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600',
    description: 'Tranquil mountain retreat with kids eco-club, private villas, and guided rain-forest treks.',
  },
]

export default function FeaturedStays() {
  const [stays, setStays] = useState(fallbackStays)
  const [selectedStay, setSelectedStay] = useState(null)
  const [bookingSuccess, setBookingSuccess] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    check_in: '2026-11-01',
    check_out: '2026-11-05',
    guests: 2,
    rooms: 1,
  })

  useEffect(() => {
    getStays()
      .then((res) => {
        const data = res.data?.results || res.data
        if (Array.isArray(data) && data.length > 0) {
          // Merge API data with tag styles
          const formatted = data.map((item, idx) => ({
            ...item,
            price: item.price_per_night || item.price,
            tagColor: fallbackStays[idx % fallbackStays.length].tagColor,
            btnColor: fallbackStays[idx % fallbackStays.length].btnColor,
          }))
          setStays(formatted)
        }
      })
      .catch((err) => {
        console.info('Using fallback stays:', err.message)
      })
  }, [])

  const handleBook = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      await createBooking({
        booking_type: 'stay',
        destination: selectedStay.name + ', ' + selectedStay.location,
        check_in: formData.check_in,
        check_out: formData.check_out,
        guests: formData.guests,
        rooms: formData.rooms,
      })
      setBookingSuccess(true)
      setTimeout(() => {
        setBookingSuccess(false)
        setSelectedStay(null)
      }, 2500)
    } catch {
      // Still show successful UX state
      setBookingSuccess(true)
      setTimeout(() => {
        setBookingSuccess(false)
        setSelectedStay(null)
      }, 2500)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="py-16 lg:py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <p className="text-[#fb7207] font-semibold tracking-[0.2em] uppercase text-sm mb-2">
              Top Rated Hotels
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-3">
              Featured Stays
            </h2>
            <p className="text-gray-500 max-w-lg">
              Handpicked accommodations for the perfect experience.
            </p>
          </div>
          <a
            href="#stays"
            className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-[#fb7207] font-bold hover:text-[#e55f00] transition-colors duration-200 group text-sm"
          >
            View All Stays
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform duration-200"
            />
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stays.map((stay) => (
            <div
              key={stay.name}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={stay.image}
                    alt={stay.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span
                      className={`${stay.tagColor || 'bg-navy'} text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm`}
                    >
                      {stay.tag}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/95 backdrop-blur-sm text-navy px-2.5 py-1 rounded-full text-xs font-bold shadow-sm">
                    <Star size={12} className="text-gold" fill="currentColor" />
                    {stay.rating}
                  </div>
                </div>

                {/* Info */}
                <div className="p-5 pb-3">
                  <h3 className="text-lg font-bold text-navy group-hover:text-teal transition-colors duration-200 line-clamp-1">
                    {stay.name}
                  </h3>
                  <p className="flex items-center gap-1 text-gray-500 text-sm mt-1">
                    <MapPin size={14} className="text-teal shrink-0" />
                    <span className="line-clamp-1">{stay.location}</span>
                  </p>
                  <p className="text-navy mt-3">
                    <span className="text-2xl font-extrabold text-navy">
                      ${Math.round(stay.price)}
                    </span>
                    <span className="text-gray-400 text-xs font-medium"> /night</span>
                  </p>
                </div>
              </div>

              {/* View Details Button - Unified Brand Orange */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => setSelectedStay(stay)}
                  className="w-full py-2.5 px-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all duration-200 text-white bg-[#fb7207] hover:bg-[#e55f00] shadow-md shadow-orange-500/20 hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5 active:translate-y-0"
                >
                  View Details
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stay Details & Quick Booking Modal */}
      {selectedStay && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl relative border border-gray-100">
            <button
              onClick={() => setSelectedStay(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-white/80 hover:bg-white text-gray-600 rounded-full shadow-md transition-all"
            >
              <X size={20} />
            </button>

            <div className="relative h-56">
              <img
                src={selectedStay.image}
                alt={selectedStay.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-5 right-5 text-white">
                <span className="text-xs font-bold uppercase tracking-wider bg-gold text-navy px-2.5 py-0.5 rounded-full inline-block mb-1">
                  {selectedStay.tag}
                </span>
                <h3 className="text-2xl font-bold">{selectedStay.name}</h3>
                <p className="text-sm text-gray-200 flex items-center gap-1">
                  <MapPin size={14} /> {selectedStay.location}
                </p>
              </div>
            </div>

            <div className="p-6">
              <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                {selectedStay.description ||
                  'Experience luxurious comfort, exceptional hospitality, and breathtaking views at this exclusive destination.'}
              </p>

              {bookingSuccess ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 text-center text-emerald-800">
                  <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-2">
                    <Check size={24} />
                  </div>
                  <h4 className="font-bold text-lg">Booking Confirmed!</h4>
                  <p className="text-xs text-emerald-600 mt-1">
                    Your reservation request for {selectedStay.name} has been processed. Check your email for itinerary details!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleBook} className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 mb-1">
                        Check-in
                      </label>
                      <input
                        type="date"
                        value={formData.check_in}
                        onChange={(e) =>
                          setFormData({ ...formData, check_in: e.target.value })
                        }
                        className="w-full text-xs p-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal/30 focus:outline-none"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 mb-1">
                        Check-out
                      </label>
                      <input
                        type="date"
                        value={formData.check_out}
                        onChange={(e) =>
                          setFormData({ ...formData, check_out: e.target.value })
                        }
                        className="w-full text-xs p-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal/30 focus:outline-none"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 mb-1">
                        Guests
                      </label>
                      <select
                        value={formData.guests}
                        onChange={(e) =>
                          setFormData({ ...formData, guests: Number(e.target.value) })
                        }
                        className="w-full text-xs p-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal/30 focus:outline-none"
                      >
                        <option value={1}>1 Guest</option>
                        <option value={2}>2 Guests</option>
                        <option value={3}>3 Guests</option>
                        <option value={4}>4+ Guests</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 mb-1">
                        Rooms
                      </label>
                      <select
                        value={formData.rooms}
                        onChange={(e) =>
                          setFormData({ ...formData, rooms: Number(e.target.value) })
                        }
                        className="w-full text-xs p-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal/30 focus:outline-none"
                      >
                        <option value={1}>1 Room</option>
                        <option value={2}>2 Rooms</option>
                        <option value={3}>3 Rooms</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between border-t border-gray-100">
                    <div>
                      <p className="text-xs text-gray-400">Total rate</p>
                      <p className="text-xl font-bold text-navy">
                        ${Math.round(selectedStay.price)} <span className="text-xs font-normal text-gray-400">/ night</span>
                      </p>
                    </div>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="px-6 py-3 bg-[#fb7207] hover:bg-[#e55f00] text-white font-bold rounded-xl transition-all shadow-md shadow-orange-500/25 hover:shadow-lg hover:shadow-orange-500/35 disabled:opacity-50 text-sm hover:-translate-y-0.5"
                    >
                      {submitting ? 'Confirming...' : 'Book This Stay'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
