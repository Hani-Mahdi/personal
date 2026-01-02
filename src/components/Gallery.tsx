"use client";
import { motion } from "framer-motion";
import Image from "next/image";
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
    <section className="relative py-24 bg-white">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-extralight tracking-wide text-black mb-4">
            Featured Work
          </h2>
          <div className="w-24 h-px bg-black mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
            A curated selection of data science projects and analytical explorations
          </p>
        </motion.div>
      </div>

      {/* Featured Projects Row */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1, 
                ease: "easeOut" 
              }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden bg-gray-100 aspect-[4/3] mb-4">
                <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Placeholder for actual images */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 border-2 border-white/30 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <span className="text-white text-xs font-light tracking-widest">{item.category}</span>
                    </div>
                  </div>
                </div>

                {/* Overlay Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-white text-xl font-light mb-2">{item.title}</h3>
                  <p className="text-white/80 text-sm font-light">{item.description}</p>
                </div>
              </div>

              {/* Project Info */}
              <div className="px-2">
                <h3 className="text-lg font-light text-black mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 font-light tracking-wide uppercase">{item.category}</p>
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
        className="text-center mt-16"
      >
        <Link 
          href="/projects"
          className="inline-block px-12 py-4 border border-black text-black font-light tracking-widest text-sm uppercase transition-all duration-500 hover:bg-black hover:text-white"
        >
          View All Projects
        </Link>
      </motion.div>
    </section>
  );
}
