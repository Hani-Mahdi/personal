"use client";
import { motion } from "framer-motion";

export default function Welcome() {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extralight tracking-wide text-white mb-6">
            Welcome to My Portfolio
          </h2>
          <div className="w-24 h-px bg-white/30 mx-auto mb-8"></div>
          <p className="text-xl text-white/60 font-light leading-relaxed max-w-3xl mx-auto">
            I'm passionate about data science and machine learning, dedicated to turning complex data into meaningful insights. 
            Explore my work and discover how I'm building the future of data-driven solutions.
          </p>
        </motion.div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-12 gap-6 h-[500px]">
          {/* Large left rectangle */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-8 row-span-2 border border-white/10 flex items-center justify-center relative group hover:border-white/30 transition-all duration-500"
          >
            <div className="text-center">
              <div className="text-7xl font-extralight text-white mb-4">10+</div>
              <div className="text-sm text-white/60 font-light tracking-[0.3em] uppercase">Projects Completed</div>
            </div>
            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/20"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/20"></div>
          </motion.div>
          
          {/* Top right rectangle */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="col-span-4 border border-white/10 flex items-center justify-center group hover:border-white/30 transition-all duration-500"
          >
            <div className="text-center">
              <div className="text-5xl font-extralight text-white mb-3">5+</div>
              <div className="text-xs text-white/60 font-light tracking-[0.3em] uppercase">Technologies</div>
            </div>
          </motion.div>
          
          {/* Bottom right rectangles */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="col-span-2 border border-white/10 flex items-center justify-center group hover:border-white/30 transition-all duration-500"
          >
            <div className="text-center">
              <div className="text-4xl font-extralight text-white mb-2">2+</div>
              <div className="text-xs text-white/60 font-light tracking-[0.2em] uppercase">Years</div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="col-span-2 bg-white flex items-center justify-center group hover:bg-white/90 transition-all duration-500"
          >
            <div className="text-center">
              <div className="text-4xl font-extralight text-black mb-2">100%</div>
              <div className="text-xs text-black/60 font-light tracking-[0.2em] uppercase">Passion</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
