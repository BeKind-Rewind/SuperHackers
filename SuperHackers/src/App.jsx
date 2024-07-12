// import { useState } from 'react'
import Home from "./Pages/Home.jsx"
import Footer from "./Components/Footer.jsx"
import Nav from "./Components/Nav.jsx"
import Reservations from "./Pages/Reservations.jsx"
import Contact from "./Pages/ContactUs.jsx"
import Games from "./Pages/Games.jsx"
import Events from "./Pages/Events.jsx"
import About from "./Pages/About.jsx"
import Giftcards from "./Pages/Giftcards.jsx"
import Press from "./Pages/Press.jsx"
import Menu from "./Pages/Menu.jsx"
import './App.css'

function App() {


  return (
    <>
      <Nav />
      <Home />
      <Reservations />
      <About />
      <Press />
      <Events />
      <Games />
      <Menu />
      <Contact />
      <Giftcards />
      <Footer />
    </>
  )
}

export default App
