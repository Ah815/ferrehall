"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className=" bg-[#2c3e50] text-[#FFD700]   p-4 shadow-lg  top-0 z-50 border-b-2 border-[#8b4513]">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-serif font-bold tracking-widest hover:text-[#a67c52] transition-colors duration-300"
        >
          FERRE HALL
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
        <NavLink href="/">Home</NavLink>
          <NavLink href="/library">Library</NavLink>
          <NavLink href="/gallery">Gallery</NavLink>
          <NavLink href="/about">About</NavLink>
          {/* <NavLink href="/contact">Contact</NavLink> */}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-[#FFD700]  hover:text-[#a67c52] focus:outline-none transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 border-t border-[#8b4513] pt-4">
          <div className="flex flex-col space-y-4">
          <NavLink href="/" mobile>
              Home
            </NavLink>
            <NavLink href="/library" mobile>
              Library
            </NavLink>
            <NavLink href="/gallery" mobile>
              Gallery
            </NavLink>
            <NavLink href="/about" mobile>
              About
            </NavLink>
            {/* <NavLink href="/contact" mobile>
              Contact
            </NavLink> */}
          </div>
        </div>
      )}
    </nav>
  )
}

const NavLink = ({ href, children, mobile = false }) => (
  <Link
    href={href}
    className={`
      font-serif text-lg hover:text-[#a67c52] transition-colors duration-300
      ${mobile ? "" : "relative overflow-hidden group"}
    `}
  >
    {children}
    {!mobile && (
      <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#8b4513] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
    )}
  </Link>
)

export default Navbar

