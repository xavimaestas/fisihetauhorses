import { useState } from 'react'
import { Link } from 'react-router-dom'
import './fonts.css'
import Header from "./components/Header.jsx"
import './App.css'
import Body from "./components/Main.jsx"




function App() {
  

  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  )
}

export default App
