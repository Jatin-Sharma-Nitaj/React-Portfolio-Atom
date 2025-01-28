import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Expirince from '../components/Expirince'
import Portfolio from '../components/Portfolio'
import Blog from '../components/Blog'
import WorkXP from '../components/WorkXP'
import ContactForm from '../components/ContactForm'
import Location from '../components/Location'
function App() {
  return (
    <div>
      <Hero />
      <About />
      <Expirince />
      <Portfolio />
      <WorkXP />
      <Blog />
      <ContactForm />
      <Location/>

    </div>
  )
}

export default App