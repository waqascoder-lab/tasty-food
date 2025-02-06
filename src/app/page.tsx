import React from 'react'
import Navbar from'./components/Navbar'
import Hero from'./components/Hero'
import About from'./components/About'
import Services from'./components/Services'
import Menu from'./components/Menu'
import Mobile from './components/Mobile'
import Footer from './components/Footer'
const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Menu/>
      <Mobile/>
      <Footer/>
    </div>
  )
}

export default page