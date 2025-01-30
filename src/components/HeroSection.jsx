"use client"

import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from "framer-motion"
import { Cormorant_Garamond, Playfair_Display } from "next/font/google"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600"],
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
})
const events = [
  {
    title: 'Victorian Tea Party',
    image: '/ferrehall-homepage.jpg',
    description: 'Experience the charm of a bygone era with our upcoming events.',
  },
  {
    title: 'Historical Lecture Series',
    image: '/ferrehall-homepage.jpg',
    description: 'Engaging talks by expert historians on captivating historical topics.',
  },
  {
    title: 'Candlelight Concert',
    image: '/ferrehall-homepage.jpg',
    description: 'Enjoy a mesmerizing musical evening by candlelight.',
  },
  {
    title: 'Artisan Market',
    image: '/ferrehall-homepage.jpg',
    description: 'Discover unique handcrafted treasures from local artisans.',
  },
  {
    title: 'Candlelight Concert',
    image: '/ferrehall-homepage.jpg',
    description: 'Enjoy a mesmerizing musical evening by candlelight.',
  },
  {
    title: 'Artisan Market',
    image: '/ferrehall-homepage.jpg',
    description: 'Discover unique handcrafted treasures from local artisans.',
  }
];

const HeroSection = () => {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null // or a loading placeholder
  }

  return (
    <div className={`${cormorant.className} bg-gradient-to-b from-sepia-50 to-sepia-100 text-sepia-900`}>
      <header className="relative h-screen overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <Image
            src="/ferrehall-homepage.jpg"
            alt="Majestic FerreHall facade"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-sepia-900/60 to-sepia-900/30 flex items-center justify-center">
          <motion.div
            className="text-center text-sepia-100 px-4 max-w-4xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <h1 className={`${playfair.className} text-6xl md:text-8xl font-bold mb-6 text-shadow-lg leading-tight`}>
              Welcome to FerreHall
            </h1>
            <p className="font-semibold text-xl md:text-3xl mb-10 italic text-sepia-200">
              Where history whispers through every corridor and elegance adorns every arch.
            </p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.7 }}>
              <Link href="#explore" scroll={true}>
                <button className="text-sepia-100 bg-gradient-to-r from-amber-700 to-amber-900 py-4 px-8 text-lg hover:from-amber-800 hover:to-amber-950 transition duration-300 rounded-md shadow-lg hover:shadow-xl transform hover:-translate-y-1 uppercase tracking-wide">
                  Embark on a Journey Through Time
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
            <Link href="#architecture" scroll={false}>
              <svg
                className="w-10 h-10 text-sepia-200"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </Link>
          </motion.div>
        </div>
      </header>

      <section id="architecture" className="py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className={`${playfair.className} text-4xl font-bold mb-8 text-sepia-800`}>
              THE ARCHITECTURE OF FRERE HALL
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              The architecture of Frere Hall is a beautiful blend of Venetian Gothic styles. The building features a
              central tower and four smaller towers at the corners. The façade is adorned with intricate carvings, and
              the interior is decorated with stained glass windows, intricate woodwork, and ornate plasterwork.
            </p>
          </motion.div>
          <motion.div
            className="md:w-1/2 mt-6 md:mt-0 md:ml-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src="/ferrehall-homepage.jpg"
              alt="Frere Hall"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      <section id="explore" className="py-20 bg-gradient-to-b from-sepia-100 to-sepia-200">
        <div className="container mx-auto px-4">
          <h2 className={`${playfair.className} text-5xl font-bold text-center mb-16 text-sepia-800 relative`}>
            Explore Our Timeless Spaces
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 "></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {["The Grand Library", "The Gilded Gallery"].map((title, index) => (
              <motion.div
                key={title}
                className="vintage-card group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative h-80 overflow-hidden rounded-t-lg">
                  <Image
                    src="/ferrehall-homepage.jpg"
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sepia-900/80 to-transparent transition-opacity duration-300 group-hover:opacity-75"></div>
                </div>
                <div className="p-8 bg-sepia-100 rounded-b-lg shadow-md transition-all duration-300 group-hover:shadow-xl">
                  <h3 className={`${playfair.className} text-3xl font-bold mb-4 text-sepia-800`}>{title}</h3>
                  <p className="text-sepia-700 mb-6 text-lg">
                    {title === "The Grand Library"
                      ? "Step into a sanctuary of knowledge, where leather-bound tomes line mahogany shelves and the scent of aged paper fills the air."
                      : "Immerse yourself in a world of artistic splendor, where masterpieces from bygone eras adorn walls of timeless elegance."}
                  </p>
                  <Link href={title === "The Grand Library" ? "/library" : "/gallery"}>
                    <button className="vintage-button border-2 border-amber-900 py-3 px-6 text-amber-900 hover:bg-amber-900 hover:text-sepia-100 transition duration-300 uppercase tracking-wide">
                      {title === "The Grand Library" ? "Discover Literary Treasures" : "Unveil Artistic Wonders"}
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-sepia-50">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16 text-sepia-800 relative">
          Featured Events
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-amber-700"></span>
        </h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {events.map((event, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="bg-sepia-100 rounded-lg border bottom-1"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative h-48">
                  <Image src={event.image} alt={event.title} layout="fill" objectFit="cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2 text-sepia-800">{event.title}</h3>
                  <p className="text-sepia-700 mb-4">{event.description}</p>
                  <Link href="/events">
                    <button className="text-amber-900 border-b-2 border-amber-900 pb-1 hover:text-amber-700 hover:border-amber-700 transition duration-300">
                      Learn More
                    </button>
                  </Link>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
    </div>
  )
}

export default HeroSection

