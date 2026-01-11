"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Gallery() {
  const featuredItems = [
    {
      id: 1,
      title: "Data Visualization",
      category: "Analytics",
      description: "Interactive dashboard design"
    },
    {
      id: 2,
      title: "Machine Learning",
      category: "AI/ML",
      description: "Predictive modeling project"
    },
    {
      id: 3,
      title: "Statistical Analysis",
      category: "Research",
      description: "Deep dive into data patterns"
    }
  ];

  return (
    <section className="relative py-32 bg-white">
      {/* Large Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw] font-extralight text-black/5 whitespace-nowrap select-none pointer-events-none">
        PORTFOLIO
      </div>

      {/* Section Header */}
      <div className="max-w-6xl mx-auto px-6 mb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl md:text-6xl font-extralight tracking-wide text-black mb-6">
            Featured Work
          </h2>
          <div className="w-24 h-px bg-black mx-auto mb-8"></div>
          <p className="text-xl text-black/60 font-light max-w-2xl mx-auto">
            A curated selection of data science projects and analytical explorations
          </p>
        </motion.div>
      </div>

      {/* Featured Projects Row */}
      <div className="max-w-6xl mx-auto px-6 mb-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15, 
                ease: "easeOut" 
              }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden bg-black aspect-[4/3] mb-6">
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-500"></div>
                
                {/* Placeholder for actual images */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 border border-white/30 flex items-center justify-center mb-4 mx-auto group-hover:border-white/60 transition-all duration-500">
                      <span className="text-white/60 text-xs font-light tracking-[0.2em] uppercase group-hover:text-white transition-colors duration-500">{item.category}</span>
                    </div>
                  </div>
                </div>

                {/* Overlay Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-white text-xl font-light mb-2">{item.title}</h3>
                  <p className="text-white/80 text-sm font-light">{item.description}</p>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Project Info */}
              <div className="px-2">
                <h3 className="text-xl font-light text-black mb-2 tracking-wide">{item.title}</h3>
                <p className="text-sm text-black/50 font-light tracking-[0.2em] uppercase">{item.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* View All Button */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        viewport={{ once: true }}
        className="text-center relative z-10"
      >
        <Link 
          href="/projects"
          className="inline-block px-16 py-5 border border-black text-black font-light tracking-[0.2em] text-sm uppercase transition-all duration-500 hover:bg-black hover:text-white"
        >
          View All Projects
        </Link>
      </motion.div>
    </section>
  );
}
