'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Cormorant_Garamond } from 'next/font/google'

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'], 
  weight: ['400', '600'] 
})

const HeroSection = () => {
  return (
    <div className={`${cormorant.className} bg-sepia-100 text-sepia-900`}>
      <header className="relative h-screen">
        <Image
          src="/ferrehall-homepage.jpg"
          alt="Majestic FerreHall facade"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-sepia-900 bg-opacity-40 flex items-center justify-center">
          <motion.div 
            className="text-center text-sepia-100 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-shadow-lg">Welcome to FerreHall</h1>
            <p className="font-extrabold text-lg md:text-2xl mb-8 italic">
              Where history whispers through every corridor and elegance adorns every arch.
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Link href="#explore">
                <button className="text-white bg-sepia-800 text-sepia-100 py-3 px-6 text-lg hover:bg-sepia-700 transition duration-300 border-2 border-sepia-200 rounded-sm shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Embark on a Journey Through Time
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </header>

      <section className="py-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-left">
            <h2 className="text-3xl font-semibold mb-8">
              THE ARCHITECTURE OF FRERE HALL
            </h2>
            <p className="text-lg mb-8">
              The architecture of Frere Hall is a beautiful blend of Venetian Gothic styles. 
              The building features a central tower and four smaller towers at the corners. 
              The façade is adorned with intricate carvings, and the interior is decorated with 
              stained glass windows, intricate woodwork, and ornate plasterwork.
            </p>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0 md:ml-8">
            <img
              src="/ferrehall-homepage.jpg" 
              alt="Frere Hall"
              className="shadow-lg"
            />
          </div>
        </div>
      </section>

      <section id="explore" className="py-10 bg-sepia-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold text-center mb-12 text-sepia-800 decorative-underline">
            Explore Our Timeless Spaces
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="vintage-card">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/ferrehall-homepage.jpg"
                  alt="The Grand Library"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 transform hover:scale-110"
                />
              </div>
              <div className="p-6 bg-sepia-200 border-t-4 border-sepia-800">
                <h3 className="text-2xl font-semibold mb-4 text-sepia-900">The Grand Library</h3>
                <p className="text-sepia-800 mb-6">
                  Step into a sanctuary of knowledge, where leather-bound tomes line mahogany shelves and the scent of aged paper fills the air.
                </p>
                <Link href="/library">
                  <button className="vintage-button border border-amber-900 p-3 hover:bg-black hover:text-white">
                    Discover Literary Treasures
                  </button>
                </Link>
              </div>
            </div>
            <div className="vintage-card">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/ferrehall-homepage.jpg"
                  alt="The Gilded Gallery"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 transform hover:scale-110"
                />
              </div>
              <div className="p-6 bg-sepia-200 border-t-4 border-sepia-800">
                <h3 className="text-2xl font-semibold mb-4 text-sepia-900">The Gilded Gallery</h3>
                <p className="text-sepia-800 mb-6">
                  Immerse yourself in a world of artistic splendor, where masterpieces from bygone eras adorn walls of timeless elegance.
                </p>
                <Link href="/gallery">
                  <button className="vintage-button border border-amber-900 p-3 hover:bg-black hover:text-white">
                    Unveil Artistic Wonders
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HeroSection