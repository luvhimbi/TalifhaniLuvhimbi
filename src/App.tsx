import Navigation from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WelcomeModal from './components/WelcomeModal';

function App() {
  return (
    <div className="app-container">
      <WelcomeModal />
      <div className="smoke-container">
        <div className="smoke-cloud smoke-1"></div>
        <div className="smoke-cloud smoke-2"></div>
        <div className="smoke-cloud smoke-3"></div>
        <div className="smoke-cloud smoke-1" style={{ animationDelay: '-30s', opacity: 0.5 }}></div>
      </div>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
