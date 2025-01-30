'use client'

import React, { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { BookOpen, Clock, MapPin, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'

const VintageLibraryPage = () => {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const collectionItems = [
    {
      title: "Rare Manuscripts",
      description: "A collection of handwritten documents dating back to the 16th century, meticulously preserved."
    },
    {
      title: "Architectural Heritage",
      description: "Our building, constructed in 1872, features original Victorian-era architectural elements."
    },
    {
      title: "Research Resources",
      description: "Specialized research sections for historians, scholars, and literature enthusiasts."
    },
    {
      title: "First Editions",
      description: "An extensive collection of first edition books from renowned authors throughout history."
    },
    {
      title: "Historical Maps",
      description: "Cartographic treasures showcasing the evolution of our region and beyond."
    },
    {
      title: "Periodical Archives",
      description: "Preserved newspapers and magazines offering glimpses into past eras."
    },
    {
      title: "Classic Literature",
      description: "A selection of timeless literary works from various periods and cultures."
    },
    {
      title: "Scholarly Journals",
      description: "A vast archive of academic papers and journals across different disciplines."
    },
    // ... (other items remain the same)
  ];

  const totalPages = Math.ceil(collectionItems.length / itemsPerPage);
  const paginatedItems = collectionItems.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="min-h-screen bg-[#f4f1e8] font-serif">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-12 items-center bg-[#f9f6ed] bg-opacity-90 p-8 rounded-lg border border-[#d4c8a8] shadow-lg"
        >
          <div>
            <h1 className="text-5xl font-bold text-[#3c3024] mb-6 border-b-2 border-[#d4c8a8] pb-4">
              The Ashborne Memorial Library
            </h1>
            <p className="text-[#5c4d3c] text-xl mb-6 leading-relaxed">
              Established in 1872, our historic library stands as a testament to literary preservation and architectural elegance. Nestled in a century-old building, we house over 150,000 rare volumes and manuscripts.
            </p>

            <div className="space-y-6">
              {[
                { Icon: MapPin, text: "Victorian Quarter, Old Town District" },
                { Icon: Clock, text: "Operating Hours: 10:00 AM - 6:00 PM, Monday to Saturday" },
                { Icon: BookOpen, text: "Special Collections: Rare Manuscripts, Local History Archives" }
              ].map(({ Icon, text }, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-center space-x-4"
                >
                  <Icon className="text-[#8b7d6b] w-8 h-8" />
                  <span className="text-[#3c3024] text-lg">{text}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-[#f9f6ed] shadow-xl rounded-lg overflow-hidden border border-[#d4c8a8]"
          >
            <img
              src="/ferrehall-homepage.jpg"
              alt="Vintage Library Interior"
              className="w-full h-[500px] object-cover transition-transform duration-300 hover:scale-105"
            />
          </motion.div>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-16 bg-[#f9f6ed] bg-opacity-90 shadow-lg rounded-lg border border-[#d4c8a8] p-8"
        >
          <h2 className="text-4xl text-[#3c3024] mb-8 border-b-2 border-[#d4c8a8] pb-4">
            Our Historic Collection
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {paginatedItems.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#f4f1e8] p-6 border border-[#d4c8a8] rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-semibold text-[#3c3024] mb-4">{item.title}</h3>
                <p className="text-[#5c4d3c] text-lg">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <button 
              disabled={currentPage === 1} 
              onClick={() => setCurrentPage(currentPage - 1)} 
              className="px-6 py-3 bg-[#d4c8a8] text-[#3c3024] rounded-lg shadow-md mx-2 disabled:opacity-50 hover:bg-[#c2b796] transition-colors duration-300 flex items-center"
            >
              <ChevronLeft className="mr-2" /> Previous
            </button>
            <button 
              disabled={currentPage === totalPages} 
              onClick={() => setCurrentPage(currentPage + 1)} 
              className="px-6 py-3 bg-[#d4c8a8] text-[#3c3024] rounded-lg shadow-md mx-2 disabled:opacity-50 hover:bg-[#c2b796] transition-colors duration-300 flex items-center"
            >
              Next <ChevronRight className="ml-2" />
            </button>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  )
}

export default VintageLibraryPage
