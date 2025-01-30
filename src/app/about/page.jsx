'use client'
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f4f1e8]">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <div className="about-container  mx-auto">
          <section className="about-header text-center p-12 bg-[#f4f1e8] border-4 border-double border-[#d4c8a8]">
            <h1 className="text-5xl font-serif text-emerald-900 mb-4">Our Esteemed Heritage</h1>
            <div className="w-32 h-1 bg-[#f4f1e8] mx-auto mb-6"></div>
            <p className="mt-6 text-xl text-emerald-800 leading-relaxed font-serif">
              Immerse yourself in the timeless elegance and rich history of our distinguished establishment, a beacon of refinement for generations.
            </p>
          </section>

          <section className="about-content p-12 bg-[#f4f1e8] mt-12 border-4 border-double border-[#d4c8a8]">
            <div className="heritage-description mb-12">
              <h2 className="text-4xl font-serif text-emerald-900 mb-6">A Legacy of Distinction</h2>
              <p className="mt-6 text-lg text-emerald-800 leading-relaxed font-serif">
                Our revered institution, a paragon of architectural splendor, was erected in the late 19th century. Initially conceived as a nucleus of cultural refinement and social discourse, it swiftly garnered renown for its exquisite architectural elements, seamlessly melding Victorian grandeur with early Renaissance grace.
              </p>
              <p className="mt-6 text-lg text-emerald-800 leading-relaxed font-serif">
                Throughout its illustrious history, these hallowed halls have borne witness to a myriad of pivotal moments, from opulent soirées to consequential political assemblies and cultural expositions of the highest caliber.
              </p>
              <p className="mt-6 text-lg text-emerald-800 leading-relaxed font-serif">
                As the epochs progressed, our establishment evolved in tandem with the burgeoning metropolis. The dawn of the 20th century heralded significant enhancements, including the installation of a majestic grand staircase and intricate woodwork—enduring testaments to the unparalleled craftsmanship of that golden age.
              </p>
            </div>

            <div className="heritage-images grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
              <div className="image-container">
                <div className="border-8 border-[#d4c8a8] p-2">
                  <Image 
                    src="/ferrehall-homepage.jpg" 
                    alt="Historic Building 1" 
                    width={600} 
                    height={400} 
                    className="w-full h-auto"
                  />
                </div>
                <p className="mt-4 text-center text-sm text-emerald-800 font-serif italic">Our esteemed edifice in its nascent years, circa 1890.</p>
              </div>
              <div className="image-container">
                <div className="border-8 border-[#d4c8a8] p-2">
                  <Image 
                    src="/ferrehall-homepage.jpg" 
                    alt="Historic Building 2" 
                    width={600} 
                    height={400} 
                    className="w-full h-auto"
                  />
                </div>
                <p className="mt-4 text-center text-sm text-emerald-800 font-serif italic">A glimpse of the grand staircase following the 1905 renovation.</p>
              </div>
              <div className="image-container">
                <div className="border-8 border-[#d4c8a8]  p-2">
                  <Image 
                    src="/ferrehall-homepage.jpg" 
                    alt="Historic Building 3" 
                    width={600} 
                    height={400} 
                    className="w-full h-auto"
                  />
                </div>
                <p className="mt-4 text-center text-sm text-emerald-800 font-serif italic">Our institution as it stands today, a bastion of cultural refinement.</p>
              </div>
            </div>

            <div className="architectural-details mb-12">
              <h2 className="text-3xl font-serif text-emerald-900 mb-6">Architectural Magnificence</h2>
              <p className="mt-6 text-lg text-emerald-800 leading-relaxed font-serif">
                Among the most remarkable features of our establishment is its harmonious fusion of architectural styles. The original design incorporates elements from the Victorian era, characterized by ornate detailing, steep roofs, and arched windows. These features are exquisitely complemented by Renaissance-inspired arches and columns that imbue the structure with an air of unparalleled grandeur and elegance.
              </p>
              <p className="mt-6 text-lg text-emerald-800 leading-relaxed font-serif">
                The interior boasts intricate woodwork and plaster moldings that have been meticulously preserved through the ages. The grand staircase, with its sweeping curves and wrought iron balustrades, remains one of the most photographed features of the building, drawing admirers from far and wide.
              </p>
            </div>

            <div className="about-legacy mt-12 text-center">
              <h2 className="text-4xl font-serif text-emerald-900 mb-6">Preserving Our Noble Legacy</h2>
              <div className="w-32 h-1 bg-gold-500 mx-auto mb-6"></div>
              <p className="mt-6 text-lg text-emerald-800 leading-relaxed font-serif">
                As custodians of this venerable institution, our solemn duty is to preserve its legacy for posterity. We invite you to partake in the splendor of this historical landmark and join us in safeguarding its heritage for generations yet to come.
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
