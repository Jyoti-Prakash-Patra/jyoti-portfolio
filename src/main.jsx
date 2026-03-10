import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Skills from './pages/Skills/skills.jsx'
import Projects from './pages/Projects/Projects.jsx'
import Experience from './pages/Experience/Experience.jsx'
import Contact from './pages/Contact/Contact.jsx'

import Layout from './Layout.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='skill' element={<Skills/>}/>
      <Route path='project' element={<Projects/>}/>
      <Route path='experience' element={<Experience/>}/>
      <Route path='contact' element={<Contact/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
