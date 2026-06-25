import React, { useEffect } from 'react'
import Button from '@/componenet/Button'
import { Menu, X } from "lucide-react";
import { useState } from 'react';

const navlinks=[
  {href:"#about", label:"About"},
  { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#certifications", label: "Certifications" },
   { href: "#testimonials", label: "Testimonials" },
   { href: "#contact", label: "Contact" },
]
const Navbar = () => {
 const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
 const [isScrolled, setisScrolled] = useState(false)



 useEffect(()=>{
  const handleScroll=()=>{
   setisScrolled(window.scrollY>50);

  }
  window.addEventListener("scroll",handleScroll);
  return()=> window.removeEventListener("scroll",handleScroll);
 },[]);
  return (
<header className={`fixed inset-x-0 transition-all duration-500 ${isScrolled? "glass-strong py-3":"bg-transparent py-5"} top-0 z-50 `}>
  <nav className='container mx-auto px-6 flex items-center justify-between'>
    <a href="#" className='text-xl font-bold tracking-tight hover:text-primary'> 
      ME <span className='text-primary'>.</span>
    </a>
    {/* For Desktop veiew */}
    <div className="hidden lg:flex items-center gap-1">
      <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
        {navlinks.map((link,idx)=>(
          <a href={link.href} key={idx} className='px-3 xl:px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface transition-colors duration-200 whitespace-nowrap'>
            {link.label}
          </a>
        ))}
      </div>
    </div>
    <div className="hidden lg:flex">
     <a href="#contact">
      <Button size="sm">Contact Me</Button>
     </a>
    </div>
    <button type='button' aria-expanded={isMobileMenuOpen} className='lg:hidden p-2 text-foreground cursor-pointer transition-colors duration-200 hover:text-primary' onClick={() => setIsMobileMenuOpen(prev => !prev)}>
      {isMobileMenuOpen ? <X size={24}/> : <Menu size={24}/>}    
    </button>
  </nav>
  {/* mobile menu */}
  {isMobileMenuOpen && (
    <div className="lg:hidden glass-strong animate-fade-in absolute top-full left-0 right-0 w-full z-50 bg-background/95 border-b border-border shadow-2xl shadow-black/30 max-h-[calc(100vh-76px)] overflow-y-auto">
      <div className="container mx-auto px-6 py-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {navlinks.map((link,idx)=>(
          <a href={link.href}
           key={idx} 
           onClick={()=>setIsMobileMenuOpen(false)}
           className='text-base text-muted-foreground hover:text-foreground hover:bg-surface rounded-lg px-3 py-3 transition-colors duration-200'>
            {link.label}
          </a>
        ))}
      </div>
    </div>
  )}
</header>
  )
}
export default Navbar
