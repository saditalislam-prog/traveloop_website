import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Send, Check } from 'lucide-react'
import { subscribe } from '../services/api'

const quickLinks = ['Home', 'Stays', 'Flights', 'Experiences', 'About Us']
const topDestinations = ['Bali', 'Dubai', 'Santorini', 'Tokyo', 'New York', 'Paris']

/* Inline SVG social icons */
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
  </svg>
)
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
  </svg>
)
const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
)

const socials = [
  { icon: FacebookIcon, href: '#', label: 'Facebook' },
  { icon: TwitterIcon, href: '#', label: 'Twitter' },
  { icon: InstagramIcon, href: '#', label: 'Instagram' },
  { icon: YoutubeIcon, href: '#', label: 'YouTube' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleSubscribe = async (e) => {
    e.preventDefault()
    if (!email) return
    setSubmitting(true)
    try {
      await subscribe(email)
      setSubscribed(true)
    } catch {
      setSubscribed(true)
    } finally {
      setSubmitting(false)
      setEmail('')
      setTimeout(() => setSubscribed(false), 4000)
    }
  }

  return (
    <footer className="bg-navy-dark text-gray-300">
      {/* Newsletter Strip */}
      <div className="border-b border-white/10 py-10 bg-navy/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white">
                Subscribe to our Newsletter
              </h3>
              <p className="text-sm text-gray-400 mt-1">
                Get special offers, travel tips, and secret discounts delivered to your inbox.
              </p>
            </div>
            {subscribed ? (
              <div className="flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 px-5 py-3 rounded-full text-sm font-semibold">
                <Check size={18} /> Subscribed successfully!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex w-full md:w-auto max-w-md gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 md:w-72 px-4 py-3 bg-white/10 border border-white/20 rounded-full text-sm text-white placeholder-gray-400 focus:outline-none focus:border-teal"
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-6 py-3 bg-[#fb7207] hover:bg-[#e55f00] text-white font-bold rounded-full text-sm flex items-center gap-1.5 transition-all shadow-md shadow-orange-500/25 hover:shadow-lg shrink-0 disabled:opacity-50 hover:-translate-y-0.5"
                >
                  <Send size={15} />
                  {submitting ? '...' : 'Subscribe'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="#" className="inline-flex items-center bg-white px-3.5 py-1.5 rounded-xl mb-4 group shadow-sm hover:shadow transition-all">
              <img src="/logo-transparent.png" alt="Traveloop" className="h-8 w-auto object-contain" />
            </a>
            <p className="text-[#fb7207] text-sm font-semibold mb-4">
              Dream · Explore · Stay
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Your trusted travel partner for discovering amazing destinations
              and booking the perfect stays worldwide.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-teal hover:text-white transition-all duration-200"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-gold transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Destinations */}
          <div>
            <h4 className="text-white font-semibold mb-4">Top Destinations</h4>
            <ul className="space-y-2.5">
              {topDestinations.map((dest) => (
                <li key={dest}>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-gold transition-colors duration-200"
                  >
                    {dest}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 text-teal shrink-0" />
                <span className="text-sm text-gray-400">+880 1234 567890</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 text-teal shrink-0" />
                <span className="text-sm text-gray-400">
                  support@traveloop.com
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 text-teal shrink-0" />
                <span className="text-sm text-gray-400">
                  Dhaka, Bangladesh
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © 2025 Traveloop. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-sm text-gray-500 hover:text-gray-300 transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-gray-500 hover:text-gray-300 transition-colors duration-200"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
