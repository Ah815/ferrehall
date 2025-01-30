"use client"

import React, { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Playfair_Display, Cormorant_Garamond } from 'next/font/google'

const artworks = [
  {
    src: "/ferrehall-homepage.jpg",
    alt: "Abstract artwork with orange and blue tones",
    description: "A mesmerizing blend of orange and blue that captures emotion and movement.",
  },
  {
    src: "/ferrehall-homepage.jpg",
    alt: "Dark blue seascape abstract",
    description: "A deep, moody seascape that evokes mystery and tranquility.",
  },
  {
    src: "/ferrehall-homepage.jpg",
    alt: "Colorful abstract with red accents",
    description: "Vivid colors with bold red strokes creating a striking composition.",
  },
  {
    src: "/ferrehall-homepage.jpg",
    alt: "Minimalist blue and orange composition",
    description: "Minimalist aesthetics with a modern twist of blue and orange hues.",
  },
  {
    src: "/ferrehall-homepage.jpg",
    alt: "Vibrant pink and purple abstract",
    description: "A lively and vibrant mix of pink and purple, full of energy and passion.",
  },
]
const playfair = Playfair_Display({ subsets: ['latin'] })
export default function AbstractGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show multiple images at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    beforeChange: (_, newIndex) => setCurrentIndex(newIndex),
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen text-white">
        {/* Hero Section */}
        <div className="relative h-[100vh] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(/ferrehall-gallery.jpg)` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-orange-500/30 animate-gradient" />
          </div>
          <div className="relative h-full flex flex-col items-center justify-center space-y-4">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold text-center tracking-wider"
            >
              FERRE HALL
            </motion.h1>
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl md:text-4xl font-light tracking-[0.3em]"
            >
              GALLERY
            </motion.h2>
          </div>
        </div>

        {/* Gallery Description */}
        <section className="text-black py-16 bg-sepia-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className={`${playfair.className}  text-4xl font-bold mb-8 text-sepia-800 decorative-underline`}>About Ferre Hall Gallery</h2>
          <div className="vintage-frame p-8 max-w-3xl mx-auto bg-sepia-100">
            <p className="text-lg text-sepia-900 leading-relaxed">
            Ferre Hall Gallery is a celebration of artistic expression, showcasing a diverse collection of contemporary and 
            abstract artworks. Located in the heart of the city, this space is dedicated to fostering creativity and providing 
            a platform for both emerging and renowned artists. Visitors can explore captivating pieces that evoke emotion, 
            tell stories, and inspire imagination.
            </p>
          </div>
        </div>
      </section>

        {/* Carousel Section */}
        <div className="container mx-auto px-4 py-16">
          <Slider {...settings}>
            {artworks.map((artwork, index) => (
              <div key={index} className="flex flex-col items-center px-2">
                <div className="rounded-lg p-4 max-w-lg">
                  <div className="relative w-full h-64">
                    <Image
                      src={artwork.src || "/placeholder.svg"}
                      alt={artwork.alt}
                      fill
                      className="object-cover rounded-lg"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <p className="text-center text-lg mt-4 text-black">{artwork.description}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <Footer />
    </>
  )
}

function NextArrow(props) {
  const { onClick } = props
  return (
    <div
      
      onClick={onClick}
    >
      {/* <ChevronRight className="text-white w-6 h-6" /> */}
    </div>
  )
}

function PrevArrow(props) {
  const { onClick } = props
  return (
    <div
      
      onClick={onClick}
    >
      {/* <ChevronLeft className="text-white w-6 h-6" /> */}
    </div>
  )
}
