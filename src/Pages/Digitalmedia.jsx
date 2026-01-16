import React from 'react'
import { Route } from 'react-router-dom'
import Hero from '../DMcomponents/hero.jsx'
import AboutSection from '../DMcomponents/About.jsx'
import ContactForm from '../DMcomponents/Contactform.jsx'
import VisionSection from '../DMcomponents/Vision.jsx'
import Services from '../DMcomponents/Services.jsx'
import MisionSection from '../DMcomponents/Mission.jsx'
function Digitalmedia() {
  return (
    <>
      <Hero />
      <AboutSection />
      <VisionSection />
      <MisionSection />
      <Services/>
      <ContactForm />
    </>
  )
}

export default Digitalmedia
