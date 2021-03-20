import React, { useState, useEffect } from 'react'
import './App.css'
import Home from './components/home/home'
import NavigationBar from './components/nav-bar/navbar'

const App = () => {

  return (
    <div className="App">
      <NavigationBar />
      <Home />
    </div>
  )
}

export default App