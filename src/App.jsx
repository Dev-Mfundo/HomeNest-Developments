import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/landing/Hero'
import Contact from './components/landing/Contact'
import Gallery from './components/landing/Gallery'
import About from './components/landing/About'

function App() {
  return (
    <>
    <Header/>
    <main>
      <Hero/>
      <About/>
      <Gallery/>
      <Contact/>
    </main>
    <Footer/>
    </>
  )
}

export default App
