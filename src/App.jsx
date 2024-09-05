import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/landing/Hero'
import Contact from './components/landing/Contact'
import Gallery from './components/landing/Gallery'
import About from './components/landing/About'
import AuthUser from './components/landing/forms/AuthUser'

function App() {
  return (
    <>
    <Header/>
    <main>
    <AuthUser/>
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
