import React from 'react'
import Button from '@/componenet/Button'
import { Menu, X } from "lucide-react";
import { useState } from 'react';

const navlinks=[
  {href:"#about", label:"About"},
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
]

const Navbar = () => {
 const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  return (
<header className='fixed inset-x-0 top-0 z-50 bg-transparent py-5'>
  <nav className='container mx-auto px-6 flex items-center justify-between'>
    <a href="#" className='text-xl font-bold tracking-tight hover:text-primary'> 
      PM <span className='text-primary'>.</span>
    </a>
    {/* For Desktop veiew */}
    <div className="hidden md:flex items-center gap-1">
      <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
        {navlinks.map((link,idx)=>(
          <a href={link.href} key={idx} className='px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface transition-colors duration-200'>
            {link.label}
          </a>
        ))}
      </div>
    </div>
    <div className="hidden md:flex">
     <Button size="sm">Contact Me</Button>
    </div>

    <button type='button' aria-expanded={isMobileMenuOpen} className='md:hidden p-2 text-foreground cursor-pointer transition-colors duration-200 hover:text-primary' onClick={() => setIsMobileMenuOpen(prev => !prev)}>
      {isMobileMenuOpen ? <X size={24}/> : <Menu size={24}/>}    
    </button>
  </nav>
  {/* mobile menu */}
  {isMobileMenuOpen && (
    <div className="md:hidden glass-strong animate-fade-in absolute top-full left-0 right-0 w-full z-50 bg-background/95 border-b border-border shadow-2xl shadow-black/30">
      <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
        {navlinks.map((link,idx)=>(
          <a href={link.href} key={idx} className='text-lg text-muted-foreground hover:text-foreground hover:bg-surface rounded-lg px-3 py-2 transition-colors duration-200'>
            {link.label}
          </a>
        ))}
        <Button size="sm">Contact Me</Button>
      </div>
    </div>
  )}
</header>
  )
}

export default Navbar