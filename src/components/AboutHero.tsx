"use client";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-24 items-start min-h-[150%]">
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-2 h-full flex flex-col justify-start"
          >
            {/* Header */}
            <div className="mb-18">
              <h1 className="text-5xl md:text-6xl font-extralight tracking-wide text-black mb-3">
                About Me
              </h1>
              <p className="text-gray-700 font-light relative inline-block pb-4" style={{ fontSize: '22px' }}>
                Data scientist turning complex data into meaningful insights
                <span className="absolute bottom-0 left-0 w-3/4 h-px bg-black"></span>
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed font-light">
                I'm a computer science student passionate about extracting insights from data 
                and building machine learning models. Through my studies and personal projects, 
                I'm developing skills in statistical analysis, data visualization, and predictive modeling.
                When I'm not studying or working on projects, you can find me exploring data science research, 
                contributing to open-source ML projects, or experimenting with new algorithms.
                I'm eager to apply my computer science background to solve real-world data problems.
              </p>
            </div>
          </motion.div>
          
          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center h-full flex flex-col justify-start mt-12"
          >
            <div className="relative inline-block">
              {/* Profile Square */}
              <div className="w-80 h-80 bg-gradient-to-br from-black to-gray-800 mx-auto mb-8 flex items-center justify-center shadow-2xl relative overflow-hidden">
                <span className="text-white text-3xl font-light tracking-wider">
                  Hani Mahdi
                </span>
              </div>
              
              {/* Decorative Ring */}
              <div className="absolute -inset-4 border-2 border-black/10 rounded-lg animate-pulse"></div>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center">
                <div className="text-2xl font-light text-black">3+</div>
                <div className="text-sm text-gray-600 font-light">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-light text-black">50+</div>
                <div className="text-sm text-gray-600 font-light">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-light text-black">12+</div>
                <div className="text-sm text-gray-600 font-light">Clients</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Section - Full Width Below */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h2 className="text-3xl font-extralight text-black mb-6 tracking-wide">
            Skills & Technologies
          </h2>
          <div className="flex flex-wrap gap-2">
            {['Python', 'Machine Learning', 'SQL', 'Pandas', 'NumPy', 'Scikit-learn', 'Data Visualization', 'Statistics', 'TensorFlow', 'PyTorch', 'Deep Learning', 'NLP'].map((skill, index) => (
              <motion.span 
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.05 * index }}
                viewport={{ once: true }}
                className="px-3 py-2 bg-white text-gray-800 rounded-full text-xs font-light border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:border-gray-300"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Call to Action - Full Width Below */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <motion.a
            href="mailto:hani.mahdi623@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-12 py-4 border border-black text-black font-light tracking-widest text-sm uppercase transition-all duration-300 hover:bg-black hover:text-white"
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
