import React from 'react'
import Navbar from './layout/Navbar'
import Hero from '@/section/Hero'
import About from "@/section/About"
import Testimonials from "@/section/Testimonials"
import Project from './section/Project'
import Experince from "@/section/Experince"
import Certification from "@/section/Certification"
import Skills from "@/section/Skills"
import Education from "@/section/Education"
import { Footer } from './layout/Footer'

import Contact from "@/section/Contact"

const App = () => {
  return (
    <div className='min-h-screen overflow-x-hidden'>
      <Navbar/>
      <main>
        <Hero/>
        <About/>
        <Project/>
        <Skills/>
        <Experince/>
        <Education/>
        <Certification/>
        <Testimonials/>
        <Contact/>
      </main>
      
        <Footer/>
    </div>
  )
}

export default App
