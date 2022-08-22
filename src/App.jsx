import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Bricks from './components/bricks/Bricks'
import Testimonials from './components/testimotials/Testimotials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'


/* Testovaci ulozeni na git hub a pak se to musím pokusit dostat zpet */

const App = () => {
  return (
    <>
      <Header/>
      <Bricks/>
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
      <Testimonials/>
      <Contact/>
      <Footer/>

    </>
  )
}

export default App