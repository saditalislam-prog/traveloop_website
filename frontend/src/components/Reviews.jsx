import { useState, useEffect } from 'react'
import { Star, ArrowRight, Quote } from 'lucide-react'
import { getReviews } from '../services/api'

const fallbackReviews = [
  {
    name: 'Sarah Johnson',
    country: 'United States',
    rating: 5,
    text: 'Absolutely incredible experience! The hotel was beautiful, the booking process was seamless, and the customer support was outstanding. Will definitely use Traveloop again for future trips.',
    avatar: 'https://ui-avatars.com/api/?name=Sarah+Johnson&background=0EA5E9&color=fff&size=80',
  },
  {
    name: 'David Miller',
    country: 'Canada',
    rating: 5,
    text: 'Found an amazing deal on a beachfront resort through Traveloop. The price was unbeatable and the quality exceeded our expectations. Our family had the best vacation ever!',
    avatar: 'https://ui-avatars.com/api/?name=David+Miller&background=D4A853&color=fff&size=80',
  },
  {
    name: 'Emma Wilson',
    country: 'Australia',
    rating: 5,
    text: "I've tried many travel booking platforms but Traveloop stands out with its curated selection and excellent service. The flexible cancellation policy gave me peace of mind.",
    avatar: 'https://ui-avatars.com/api/?name=Emma+Wilson&background=1B2D4F&color=fff&size=80',
  },
]

export default function Reviews() {
  const [reviews, setReviews] = useState(fallbackReviews)

  useEffect(() => {
    getReviews()
      .then((res) => {
        const data = res.data?.results || res.data
        if (Array.isArray(data) && data.length > 0) {
          setReviews(data)
        }
      })
      .catch((err) => {
        console.info('Using fallback reviews:', err.message)
      })
  }, [])
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <p className="text-teal font-semibold tracking-[0.2em] uppercase text-sm mb-2">
              Traveler Reviews
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-3">
              Real Experiences, Real Stories
            </h2>
            <p className="text-gray-500 max-w-lg">
              Hear from travelers who've explored the world with Traveloop.
            </p>
          </div>
          <a
            href="#reviews"
            className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-[#fb7207] font-bold hover:text-[#e55f00] transition-colors duration-200 group text-sm"
          >
            View All Reviews
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform duration-200"
            />
          </a>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-bg-light rounded-2xl p-6 lg:p-8 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative"
            >
              <Quote
                size={32}
                className="text-teal/15 absolute top-6 right-6"
              />
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-[#fb7207]"
                    fill="currentColor"
                  />
                ))}
              </div>
              {/* Text */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                "{review.text}"
              </p>
              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-semibold text-navy text-sm">
                    {review.name}
                  </p>
                  <p className="text-gray-400 text-xs">{review.country}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
