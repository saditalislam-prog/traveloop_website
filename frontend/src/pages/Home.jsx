import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import SearchBar from '../components/SearchBar'
import PopularDestinations from '../components/PopularDestinations'
import FeaturedStays from '../components/FeaturedStays'
import WhyChooseUs from '../components/WhyChooseUs'
import LuxuryStays from '../components/LuxuryStays'
import Reviews from '../components/Reviews'
import TravelGuides from '../components/TravelGuides'
import SpecialOffer from '../components/SpecialOffer'
import BookDreamTrip from '../components/BookDreamTrip'
import Stats from '../components/Stats'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <div id="search">
        <SearchBar />
      </div>
      <div id="destinations">
        <PopularDestinations />
      </div>
      <div id="stays">
        <FeaturedStays />
      </div>
      <div id="why-us">
        <WhyChooseUs />
      </div>
      <div id="luxury">
        <LuxuryStays />
      </div>
      <div id="reviews">
        <Reviews />
      </div>
      <div id="guides">
        <TravelGuides />
      </div>
      <SpecialOffer />
      <BookDreamTrip />
      <Stats />
      <div id="contact">
        <Footer />
      </div>
    </div>
  )
}
