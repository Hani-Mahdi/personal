"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-start">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/90 to-black/85"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-left px-6 max-w-4xl pt-32 ml-36">
        {/* Exquisite monogram or symbol */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-12"
        >
          <div className="inline-block px-4 py-2 border-2 border-white rounded-sm">
            <span className="text-3xl font-light tracking-widest text-white">Data Scientist</span>
          </div>
        </motion.div>

        {/* Prestigious headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl font-extralight tracking-wide leading-none">
            <span className="block text-white mb-1">The Art of</span>
            <span className="block text-white font-light">Data Science</span>
          </h1>
        </motion.div>

        {/* Refined positioning statement */}
        <motion.p
          className="text-lg md:text-xl text-gray-300 font-light leading-relaxed max-w-2xl mb-16 tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
        >
          Where precision engineering meets analytical excellence. 
          Crafting bespoke machine learning solutions with uncompromising attention to detail.
        </motion.p>

        {/* Distinctive divider */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "80px" }}
          transition={{ duration: 1.5, delay: 0.9, ease: "easeOut" }}
          className="h-px bg-white mb-16"
        />

        {/* Elegant call-to-action */}
        <motion.div
          className="flex flex-col sm:flex-row gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
        >
          <Link 
            href="/projects" 
            className="px-12 py-4 bg-white text-black font-light tracking-widest text-sm uppercase transition-all duration-500 hover:bg-gray-200"
          >
            View Portfolio
          </Link>
          
          <Link 
            href="/contact" 
            className="px-12 py-4 border border-white text-white font-light tracking-widest text-sm uppercase transition-all duration-500 hover:bg-white hover:text-black"
          >
            Schedule Consultation
          </Link>
        </motion.div>
      </div>

      {/* Corner accents */}
      <div className="absolute top-12 left-12 w-8 h-8 border-l-2 border-t-2 border-white opacity-40"></div>
      <div className="absolute top-12 right-12 w-8 h-8 border-r-2 border-t-2 border-white opacity-40"></div>
      <div className="absolute bottom-12 left-12 w-8 h-8 border-l-2 border-b-2 border-white opacity-40"></div>
      <div className="absolute bottom-12 right-12 w-8 h-8 border-r-2 border-b-2 border-white opacity-40"></div>
    </section>
  );
}
