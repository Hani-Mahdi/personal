"use client";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Large Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-extralight text-black/5 whitespace-nowrap select-none pointer-events-none">
        EXCELLENCE
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-20"
        >
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex-shrink-0"
          >
            <div className="relative">
              {/* Photo placeholder - replace with actual photo */}
              <div className="w-64 h-64 md:w-72 md:h-72 bg-black flex items-center justify-center">
                <span className="text-white/60 font-extralight tracking-wider text-lg">Your Photo</span>
              </div>
              {/* Decorative frame */}
              <div className="absolute -inset-4 border border-black/20"></div>
              <div className="absolute -inset-8 border border-black/10"></div>
            </div>
          </motion.div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left space-y-8">
            {/* Minimal accent line */}
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
              className="h-px bg-black hidden md:block"
            ></motion.div>
            
            {/* Main statement */}
            <h2 className="text-4xl md:text-5xl font-extralight tracking-wide text-black leading-relaxed">
              Where data science meets 
              <span className="font-light"> elegant</span> solutions
            </h2>
            
            {/* Subtle description */}
            <p className="text-xl text-black/60 font-light leading-relaxed max-w-2xl">
              Transforming complex problems into sophisticated insights through 
              meticulous analysis and refined execution.
            </p>
            
            {/* Name with decorative elements */}
            <div className="pt-6 flex items-center gap-6">
              <div className="w-12 h-px bg-black"></div>
              <p className="text-sm font-light tracking-[0.3em] text-black uppercase">
                Hani Mahdi
              </p>
              <div className="w-12 h-px bg-black"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
