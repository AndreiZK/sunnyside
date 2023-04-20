import { useEffect, useState } from 'react'
import './App.scss'


import Hero from './components/Hero'
import Main from './components/Main'
import Testimonials from './components/Testimonials'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

function App() {

  const [scrollPisition, setScrollPosition] = useState(0)

  // useEffect(() => {
  //   window.addEventListener('scroll', () => {
  //     console.log('scroll event triggered')
  //     if(window.pageYOffset < 150 && window.pageYOffset > scrollPisition) {
  //       console.log('if ran')
  //       window.scroll({
  //         top: 100,
  //         left: 0,
  //         behavior: 'smooth'
  //       })
  //     }
  //     setScrollPosition(window.pageYOffset)
  //   })
  // }, [])

  return (
    <div>
      <Hero />
      <Main />
      <Testimonials />
      <Gallery />
      <Footer />
    </div>
  )
}

export default App
