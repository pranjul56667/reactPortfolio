import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Skill from './pages/Skill'
import Navigation from './pages/Navigation'
import Myname from './pages/Logo'
import Project from './pages/Project'
import Contact from './pages/Contact'


function App() {
  return (
    <>
        <BrowserRouter basename='/' >
          <Navigation/>
          <Routes>
              <Route path='/' element={ <Myname/> } />
              <Route path='/home' element={ <Home/> } />
              <Route path='/skill' element={ <Skill/> } />
              <Route path='/project' element={ <Project/> } />
              <Route path='/contact' element={ <Contact/> } />
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
