import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Header from './components/header.jsx'
import ScrollHandler from './components/Scrollhandler.jsx'
import Software from './Pages/Software.jsx'
import Digitalmedia from './Pages/Digitalmedia.jsx'
import SocialMedhandles from './components/SocialMedhandles.jsx'
import Footer from './components/Footer.jsx'
function App() {
  return (
    <>
      <Header />
      <SocialMedhandles />
      <ScrollHandler />
      <Routes>
      
        <Route path='/' element={<Software />} />
        <Route path='/digitalmedia' element={<Digitalmedia />} />

        </Routes>
      <Footer />
    </>
  )
}

export default App
