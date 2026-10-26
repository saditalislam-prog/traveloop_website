import { useState } from 'react'
import { Search, MapPin, Calendar, Users, Building2, Plane, Compass } from 'lucide-react'

const tabs = [
  { id: 'stays', label: 'Stays', icon: Building2 },
  { id: 'flights', label: 'Flights', icon: Plane },
  { id: 'experiences', label: 'Experiences', icon: Compass },
]

export default function SearchBar() {
  const [activeTab, setActiveTab] = useState('stays')
  const [destination, setDestination] = useState('')
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState('2 Guests, 1 Room')
  const [searching, setSearching] = useState(false)
  const [searchedNotice, setSearchedNotice] = useState(null)

  const handleSearch = (e) => {
    e.preventDefault()
    setSearching(true)
    const target = destination.trim() || 'Worldwide Destinations'
    setSearchedNotice(`Found 12 available ${activeTab} in ${target}!`)

    setTimeout(() => {
      setSearching(false)
      const staysEl = document.getElementById('stays')
      if (staysEl) {
        staysEl.scrollIntoView({ behavior: 'smooth' })
      }
    }, 600)
  }

  return (
    <section className="relative z-20 -mt-10 sm:-mt-12 mb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
          {/* Tabs */}
          <div className="flex border-b border-slate-100">
            {tabs.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center gap-2 px-6 py-4 text-sm font-bold transition-all duration-200 border-b-2 ${
                  activeTab === id
                    ? 'text-[#fb7207] border-[#fb7207] bg-orange-50/50'
                    : 'text-slate-500 border-transparent hover:text-slate-800 hover:bg-slate-50'
                }`}
              >
                <Icon size={18} />
                {label}
              </button>
            ))}
          </div>

          {/* Search Fields */}
          <form onSubmit={handleSearch} className="p-5 md:p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-4">
              {/* Destination */}
              <div className="md:col-span-1">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 px-1">
                  Destination
                </label>
                <div className="relative">
                  <MapPin
                    size={18}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    type="text"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="Where are you going?"
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#fb7207] focus:ring-2 focus:ring-[#fb7207]/20 transition-all duration-200"
                  />
                </div>
              </div>

              {/* Check In */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 px-1">
                  Check In
                </label>
                <div className="relative">
                  <Calendar
                    size={18}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-800 focus:outline-none focus:border-[#fb7207] focus:ring-2 focus:ring-[#fb7207]/20 transition-all duration-200"
                  />
                </div>
              </div>

              {/* Check Out */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 px-1">
                  Check Out
                </label>
                <div className="relative">
                  <Calendar
                    size={18}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-800 focus:outline-none focus:border-[#fb7207] focus:ring-2 focus:ring-[#fb7207]/20 transition-all duration-200"
                  />
                </div>
              </div>

              {/* Guests & Search */}
              <div className="flex gap-3">
                <div className="flex-1">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 px-1">
                    Guests & Rooms
                  </label>
                  <div className="relative">
                    <Users
                      size={18}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <select
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-800 focus:outline-none focus:border-[#fb7207] focus:ring-2 focus:ring-[#fb7207]/20 transition-all duration-200 appearance-none"
                    >
                      <option>1 Guest, 1 Room</option>
                      <option>2 Guests, 1 Room</option>
                      <option>3 Guests, 2 Rooms</option>
                      <option>4 Guests, 2 Rooms</option>
                    </select>
                  </div>
                </div>
                <div className="flex items-end">
                  <button
                    type="submit"
                    disabled={searching}
                    className="p-3 bg-[#fb7207] hover:bg-[#e55f00] text-white rounded-xl transition-all duration-200 shadow-md shadow-orange-500/25 hover:shadow-lg hover:shadow-orange-500/35 hover:-translate-y-0.5 disabled:opacity-50 flex items-center justify-center min-w-[48px]"
                    title="Search"
                  >
                    <Search size={22} strokeWidth={2.5} className={searching ? 'animate-spin' : ''} />
                  </button>
                </div>
              </div>
            </div>

            {searchedNotice && (
              <div className="mt-3 p-3 bg-orange-50 border border-orange-200/80 rounded-xl text-xs font-semibold text-[#fb7207] flex items-center justify-between">
                <span>✨ {searchedNotice}</span>
                <button
                  type="button"
                  onClick={() => setSearchedNotice(null)}
                  className="text-gray-400 hover:text-gray-600 font-bold ml-2 text-base"
                >
                  ×
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
