import { useState } from 'react'
import { Link } from 'react-router-dom'
import './fonts.css'
import './App.css'
import Header from "./components/Header.jsx"
import Body from "./components/Main.jsx"
import Footer from "./components/Footer.jsx"




function App() {
  

  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

export default App
