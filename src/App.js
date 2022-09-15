// import React, {useState, useEffect} from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import "./App.css"
import Home from './Home'
import Project from './Project'

const App = () => {
  return (
    <div className='mainAppDiv'>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Project" element={<Project />}/>

        </Routes>
      
      </BrowserRouter>
    </div>
  )
}

export default App