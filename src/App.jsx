import React from 'react'
import Header from './components/header.jsx'
import Hero from './components/Hero.jsx'
import AboutSection from './components/About.jsx'
import VisionSection from './components/Vision.jsx'
import MisionSection from './components/Mission.jsx'
import SocialMedhandles from './components/SocialMedhandles.jsx'
import Footer from './components/Footer.jsx'
import Services from './components/Services.jsx'
import ContactForm from './components/Contactform.jsx'

function App() {
  return (
    <>
      <Header />
      <SocialMedhandles />
      <Hero />
      <AboutSection />
      <VisionSection />
      <MisionSection />
      <Services/>
      <ContactForm />
      <Footer />
    </>
  )
}

export default App
