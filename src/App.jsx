import React from 'react'
import Navbar from './layout/Navbar'
import Hero from '@/section/Hero'
import About from "@/section/About"
import Testimonials from "@/section/Testimonials"

import Experince from "@/section/Experince"

import Contact from "@/section/Contact"

const App = () => {
  return (
    <div className='min-h-screen overflow-x-hidden'>
      <Navbar/>
      <main>
        <Hero/>
        <About/>
        <Experince/>
        <Testimonials/>
        <Contact/>
      </main>
    </div>
  )
}

export default App