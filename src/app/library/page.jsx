'use client'
import React, { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { BookOpen, Clock, MapPin } from 'lucide-react'

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
  ];

  const totalPages = Math.ceil(collectionItems.length / itemsPerPage);
  const paginatedItems = collectionItems.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="min-h-screen bg-[#f4f1e8]">
      <Navbar />
        <section className="grid md:grid-cols-2 gap-12 items-center bg-[#f9f6ed] bg-opacity-90 p-8 rounded-none border border-[#d4c8a8] shadow-md">
          <div>
            <h1 className="text-4xl font-serif font-bold text-[#3c3024] mb-6 border-b-2 border-[#d4c8a8] pb-4">
              The Ashborne Memorial Library
            </h1>
            <p className="text-[#5c4d3c] text-lg mb-6 font-serif leading-relaxed">
              Established in 1872, our historic library stands as a testament to literary preservation and architectural elegance. Nestled in a century-old building, we house over 150,000 rare volumes and manuscripts.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <MapPin className="text-[#8b7d6b] w-8 h-8" />
                <span className="text-[#3c3024] font-serif">
                  Victorian Quarter, Old Town District
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <Clock className="text-[#8b7d6b] w-8 h-8" />
                <span className="text-[#3c3024] font-serif">
                  Operating Hours: 10:00 AM - 6:00 PM, Monday to Saturday
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <BookOpen className="text-[#8b7d6b] w-8 h-8" />
                <span className="text-[#3c3024] font-serif">
                  Special Collections: Rare Manuscripts, Local History Archives
                </span>
              </div>
            </div>
          </div>

          <div className="bg-[#f9f6ed] shadow-xl rounded-none overflow-hidden border border-[#d4c8a8]">
            <img
              src="/ferrehall-homepage.jpg"
              alt="Vintage Library Interior"
              className="w-full h-96 object-cover"
            />
          </div>
        </section>

        <section className="mt-16 bg-[#f9f6ed] bg-opacity-90 shadow-lg rounded-none border border-[#d4c8a8] p-8">
          <h2 className="text-3xl font-serif text-[#3c3024] mb-6 border-b-2 border-[#d4c8a8] pb-4">
            Our Historic Collection
          </h2>
          <div className="grid md:grid-cols-3 gap-6 ">
            {paginatedItems.map((item, index) => (
              <div key={index} className="bg-[#f4f1e8] p-6 border border-[#d4c8a8] rounded-none shadow-md">
                <h3 className="text-xl font-semibold text-[#3c3024] mb-4 font-serif">{item.title}</h3>
                <p className="text-[#5c4d3c] font-serif">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-6">
            <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)} className="px-4 py-2 bg-[#d4c8a8] text-[#3c3024] font-serif rounded-md shadow-md mx-2 disabled:opacity-50">Previous</button>
            <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)} className="px-4 py-2 bg-[#d4c8a8] text-[#3c3024] font-serif rounded-md shadow-md mx-2 disabled:opacity-50">Next</button>
          </div>
        </section>
      <Footer />
    </div>
  )
}

export default VintageLibraryPage