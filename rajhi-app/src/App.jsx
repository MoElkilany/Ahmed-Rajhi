import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Companies from './components/Companies'
import Philosophy from './components/Philosophy'
import AppSection from './components/AppSection'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="font-cairo">
      <Header />
      <main>
        <About />
        <Hero />
        <Companies />
        <Philosophy />
        <AppSection />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App