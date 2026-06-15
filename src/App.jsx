import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Risk from './components/Risk'
import Solutions from './components/Solutions'
import About from './components/About'
import Stats from './components/Stats'
import HowItWorks from './components/HowItWorks'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <div className="bg-fx" aria-hidden="true">
        <div className="bg-fx__glow"><span className="b3" /></div>
        <div className="bg-fx__grid" />
        <div className="bg-fx__grain" />
        <div className="bg-fx__vignette" />
      </div>
      <Navbar />
      <Hero />
      <Risk />
      <Solutions />
      <About />
      <Stats />
      <HowItWorks />
      <FinalCTA />
      <Footer />
    </>
  )
}
