"use client";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-26"
        >
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex-shrink-0"
          >
            <div className="relative w-48 h-48 md:w-56 md:h-56">
              {/* Photo placeholder - replace with actual photo */}
              <div className="w-full h-full bg-gray-100 rounded-full border-2 border-black flex items-center justify-center">
                <span className="text-gray-400 font-light">Your Photo</span>
              </div>
              {/* Subtle accent ring */}
              <div className="absolute -inset-2 border border-amber-600/20 rounded-full"></div>
            </div>
          </motion.div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left space-y-6">
            {/* Minimal accent line */}
            <div className="w-16 h-px bg-black hidden md:block"></div>
            
            {/* Main statement */}
            <h2 className="text-3xl md:text-4xl font-extralight tracking-wide text-black leading-relaxed">
              Where data science meets 
              <span className="text-amber-600"> elegant</span> solutions
            </h2>
            
            {/* Subtle description */}
            <p className="text-lg text-gray-600 font-light leading-relaxed max-w-2xl">
              Transforming complex problems into sophisticated insights through 
              meticulous analysis and refined execution.
            </p>
            
            {/* Name */}
            <div className="pt-4">
              <p className="text-sm font-light tracking-widest text-black uppercase">
                Hani Mahdi
              </p>
            </div>
            
            {/* Second accent line */}
            <div className="w-16 h-px bg-black hidden md:block"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
