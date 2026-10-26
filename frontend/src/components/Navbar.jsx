import { useState, useEffect } from 'react'
import { Search, Menu, X, Mail, Lock, User, CheckCircle2, Globe, ChevronDown } from 'lucide-react'

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'Stays', href: '#stays' },
  { name: 'Flights', href: '#search' },
  { name: 'Experiences', href: '#luxury' },
  { name: 'About', href: '#why-us' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [authModal, setAuthModal] = useState(null) // 'signin' | 'signup' | null
  const [authSubmitted, setAuthSubmitted] = useState(false)
  const [activeNav, setActiveNav] = useState('Home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (e, link) => {
    if (link.href.startsWith('#')) {
      e.preventDefault()
      setActiveNav(link.name)
      if (link.href === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        const el = document.querySelector(link.href)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }
      setMobileOpen(false)
    }
  }

  const handleAuthSubmit = (e) => {
    e.preventDefault()
    setAuthSubmitted(true)
    setTimeout(() => {
      setAuthSubmitted(false)
      setAuthModal(null)
    }, 1800)
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-1'
            : 'bg-white/90 backdrop-blur-md border-b border-gray-100/50 py-2'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Professional Brand Logo */}
            <a
              href="#"
              onClick={(e) => handleNavClick(e, { name: 'Home', href: '#' })}
              className="flex items-center gap-2 shrink-0 group py-1"
            >
              <img
                src="/logo-transparent.png"
                alt="Traveloop"
                className="h-9 sm:h-10 lg:h-11 w-auto object-contain transition-transform group-hover:scale-102"
              />
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1.5 bg-slate-50/80 px-3 py-1.5 rounded-full border border-slate-200/60 shadow-xs">
              {navLinks.map((link) => {
                const isActive = activeNav === link.name
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link)}
                    className={`relative px-4 py-1.5 text-sm font-semibold rounded-full transition-all duration-200 ${
                      isActive
                        ? 'text-[#fb7207] bg-white shadow-xs'
                        : 'text-slate-600 hover:text-navy hover:bg-white/60'
                    }`}
                  >
                    {link.name}
                  </a>
                )
              })}
            </div>

            {/* Desktop Right Actions */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Currency & Language Indicator */}
              <div className="flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-navy px-3 py-2 rounded-full hover:bg-slate-100 cursor-pointer transition-colors">
                <Globe size={15} className="text-slate-500" />
                <span>USD</span>
                <ChevronDown size={12} className="text-slate-400" />
              </div>

              {/* Quick Search */}
              <button
                onClick={(e) => handleNavClick(e, { name: 'Flights', href: '#search' })}
                className="p-2 text-slate-600 hover:text-navy rounded-full hover:bg-slate-100 transition-colors"
                title="Search destinations & stays"
              >
                <Search size={18} />
              </button>

              <div className="h-5 w-px bg-slate-200 mx-1" />

              {/* Sign In */}
              <button
                onClick={() => setAuthModal('signin')}
                className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-navy rounded-full hover:bg-slate-100 transition-colors"
              >
                Sign In
              </button>

              {/* Primary Create Account Button in Brand Orange */}
              <button
                onClick={() => setAuthModal('signup')}
                className="px-5 py-2.5 text-sm font-bold text-white bg-[#fb7207] hover:bg-[#e55f00] rounded-full transition-all duration-200 shadow-md shadow-orange-500/25 hover:shadow-lg hover:shadow-orange-500/35 hover:-translate-y-0.5 active:translate-y-0"
              >
                Create Account
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-navy rounded-xl hover:bg-slate-100 transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-white border-t border-gray-100 px-5 py-4 space-y-1.5 shadow-xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link)}
                className={`block px-4 py-2.5 text-sm font-semibold rounded-xl transition-colors ${
                  activeNav === link.name
                    ? 'text-[#fb7207] bg-orange-50/70 font-bold'
                    : 'text-slate-700 hover:text-navy hover:bg-slate-50'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-gray-100 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileOpen(false)
                  setAuthModal('signin')
                }}
                className="w-full py-2.5 text-sm font-bold text-slate-700 border border-slate-200 rounded-full hover:bg-slate-50 transition-colors"
              >
                Sign In
              </button>
              <button
                onClick={() => {
                  setMobileOpen(false)
                  setAuthModal('signup')
                }}
                className="w-full py-2.5 text-sm font-bold text-white bg-[#fb7207] hover:bg-[#e55f00] rounded-full transition-all shadow-md shadow-orange-500/25"
              >
                Create Account
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Auth Modal */}
      {authModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative border border-gray-100">
            <button
              onClick={() => {
                setAuthModal(null)
                setAuthSubmitted(false)
              }}
              className="absolute top-5 right-5 p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-all"
            >
              <X size={20} />
            </button>

            <div className="text-center mb-6">
              <img
                src="/logo-transparent.png"
                alt="Traveloop"
                className="h-10 w-auto mx-auto mb-2 object-contain"
              />
              <h3 className="text-2xl font-bold text-navy">
                {authModal === 'signin' ? 'Welcome Back!' : 'Join Traveloop'}
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                {authModal === 'signin'
                  ? 'Sign in to access your booked trips & saved stays'
                  : 'Create an account to unlock member-only rates & perks'}
              </p>
            </div>

            {authSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center text-emerald-800">
                <CheckCircle2 size={36} className="text-emerald-500 mx-auto mb-2" />
                <h4 className="font-bold text-base">
                  {authModal === 'signin' ? 'Signed In Successfully!' : 'Account Created!'}
                </h4>
                <p className="text-xs text-emerald-600 mt-1">Redirecting you to dashboard...</p>
              </div>
            ) : (
              <form onSubmit={handleAuthSubmit} className="space-y-3.5">
                {authModal === 'signup' && (
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">
                      Full Name
                    </label>
                    <div className="relative">
                      <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        className="w-full pl-10 pr-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#fb7207]/30 focus:outline-none"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="w-full pl-10 pr-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#fb7207]/30 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="password"
                      required
                      placeholder="••••••••"
                      className="w-full pl-10 pr-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#fb7207]/30 focus:outline-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#fb7207] hover:bg-[#e55f00] text-white font-bold rounded-xl transition-all shadow-md shadow-orange-500/20 hover:shadow-lg hover:shadow-orange-500/30 text-sm mt-2"
                >
                  {authModal === 'signin' ? 'Sign In' : 'Create My Account'}
                </button>

                <div className="text-center pt-2">
                  <p className="text-xs text-gray-500">
                    {authModal === 'signin' ? (
                      <>
                        Don't have an account?{' '}
                        <button
                          type="button"
                          onClick={() => setAuthModal('signup')}
                          className="text-[#fb7207] font-semibold hover:underline"
                        >
                          Sign Up
                        </button>
                      </>
                    ) : (
                      <>
                        Already have an account?{' '}
                        <button
                          type="button"
                          onClick={() => setAuthModal('signin')}
                          className="text-[#fb7207] font-semibold hover:underline"
                        >
                          Sign In
                        </button>
                      </>
                    )}
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  )
}
