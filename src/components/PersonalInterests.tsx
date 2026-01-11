"use client";
import { motion } from "framer-motion";

export default function PersonalInterests() {
  const interests = [
    {
      title: "Chess",
      description: "Strategic thinking and problem-solving through competitive play",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 22H5v-2h14v2M17.16 8.26A8.94 8.94 0 0 0 19 3H5a8.94 8.94 0 0 0 1.84 5.26L12 14l5.16-5.74M12 14l-5.16 5.74A8.94 8.94 0 0 1 5 25h14a8.94 8.94 0 0 1-1.84-5.26L12 14z"/>
        </svg>
      ),
    },
    {
      title: "Photography",
      description: "Capturing moments and developing an eye for composition",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 15.2A3.2 3.2 0 1 0 12 8.8a3.2 3.2 0 0 0 0 6.4z"/>
          <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
        </svg>
      ),
    },
    {
      title: "Reading",
      description: "Exploring technical papers and staying current with AI research",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z"/>
        </svg>
      ),
    },
    {
      title: "Music",
      description: "Finding rhythm and patterns that inspire creative thinking",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-extralight tracking-wide text-white mb-4">
            Personal Interests
          </h2>
          <p className="text-xl text-white/60 font-light relative inline-block pb-4">
            Hobbies that sharpen my professional edge
            <span className="absolute bottom-0 left-0 w-1/2 h-px bg-white/50"></span>
          </p>
        </motion.div>

        {/* Interests Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 h-full transition-all duration-500 hover:border-white/30 hover:bg-white/10">
                {/* Icon */}
                <div className="text-white/60 mb-6 group-hover:text-white transition-colors duration-300">
                  {interest.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-light text-white mb-3 tracking-wide">
                  {interest.title}
                </h3>
                <p className="text-white/60 font-light leading-relaxed">
                  {interest.description}
                </p>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Decorative Element */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
        ></motion.div>
      </div>
    </section>
  );
}
