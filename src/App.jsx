import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Ticker from './components/Ticker.jsx'
import Services from './components/Services.jsx'
import Method from './components/Method.jsx'
import Course from './components/Course.jsx'
import About from './components/About.jsx'
import CtaBand from './components/CtaBand.jsx'
import Footer from './components/Footer.jsx'
import PromoBanner from './components/PromoBanner.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Ticker />
        <Services />
        <Method />
        <Course />
        <About />
        <CtaBand />
      </main>
      <Footer />
      <PromoBanner />
    </>
  )
}
