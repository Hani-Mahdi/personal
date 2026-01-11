"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Endeavors() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const endeavors = [
    {
      title: "Data Science Consulting",
      description: "Strategic analytics solutions for startups and enterprises looking to leverage data-driven decision making. Specializing in predictive modeling, business intelligence, and custom analytics platforms.",
      status: "Active",
      metrics: "12+ clients, 95% retention",
      color: "bg-black",
      position: "left"
    },
    {
      title: "ML Research Initiative",
      description: "Pioneering research in machine learning applications for healthcare diagnostics. Developing cutting-edge algorithms that improve patient outcomes through early detection and personalized treatment recommendations.",
      status: "Research",
      metrics: "3 research papers, 2 pilot studies",
      color: "bg-gray-800",
      position: "right"
    },
    {
      title: "Tech Education Platform",
      description: "Democratizing data science education through personalized mentorship programs and hands-on project-based learning. Building the next generation of data professionals.",
      status: "Development", 
      metrics: "50+ mentees, 85% success rate",
      color: "bg-gray-900",
      position: "left"
    }
  ];

  return (
    <section ref={containerRef} className="py-24 bg-white min-h-screen relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extralight tracking-wide text-black mb-4">
            Entrepreneurial Endeavors
          </h2>
          <div className="w-24 h-px bg-black mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
            Building ventures at the intersection of data science and innovation
          </p>
        </motion.div>

        <div className="space-y-2">
          {endeavors.map((endeavor, index) => {
            const endeavorRef = useRef<HTMLDivElement>(null);
            const sectionProgress = useScroll({
              target: endeavorRef,
              offset: ["start end", "end start"]
            });

            const blobScale = useTransform(sectionProgress.scrollYProgress, [0, 0.3, 0.5, 0.7, 1], [0.5, 1.5, 1.5, 1.5, 0.5]);
            const blobOpacity = useTransform(sectionProgress.scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
            const contentOpacity = useTransform(sectionProgress.scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
            const contentX = useTransform(sectionProgress.scrollYProgress, [0, 0.5, 1], 
              endeavor.position === "left" ? [-20, 0, 20] : [20, 0, -20]
            );
            const blobMorph = useTransform(sectionProgress.scrollYProgress, [0.3, 0.5, 0.7], 
              ["45% 55% 45% 55% / 55% 45% 55% 45%",
               "40% 60% 40% 60% / 60% 40% 60% 40%",
               "45% 55% 45% 55% / 55% 45% 55% 45%"]
            );

            const imageScale = useTransform(sectionProgress.scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);
            const imageOpacity = useTransform(sectionProgress.scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
            const imageRotate = useTransform(sectionProgress.scrollYProgress, [0, 1], [-5, 5]);

            return (
              <div key={index} className="relative h-96 flex items-center">
                {/* Single Blob */}
                <motion.div
                  ref={endeavorRef}
                  className={`absolute top-0 ${
                    endeavor.position === "left" ? "left-10" : "left-auto right-0"
                  } w-[600px] h-[300px] ${endeavor.color} rounded-full opacity-80`}
                  style={{
                    scale: blobScale,
                    opacity: blobOpacity,
                    borderRadius: blobMorph,
                    transform: `translateY(${-150}px) ${
                      endeavor.position === "left" && index === 2 ? "translateX(-150px)" : endeavor.position === "left" ? "translateX(-200px)" : "translateX(-300px)"
                    }`,
                    right: endeavor.position === "right" ? "100px" : "auto",
                    top: endeavor.position === "left" ? "50px" : "45px"
                  }}
                />

                {/* White Content */}
                <motion.div
                  className={`relative z-10 text-white px-12 max-w-3xl text-left ${
                    endeavor.position === "left" ? "mr-auto ml-0" : "ml-auto mr-0"
                  }`}
                  style={{
                    opacity: contentOpacity,
                    x: contentX
                  }}
                >
                  <motion.div
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="space-y-6"
                  >
                    <div className="space-y-4">
                      <h3 className="text-3xl md:text-4xl font-extralight text-white">
                        {endeavor.title}
                      </h3>
                      <span className="text-sm text-white/80 uppercase tracking-widest">
                        {endeavor.status}
                      </span>
                    </div>

                    <p className="text-lg text-white/90 font-light leading-relaxed">
                      {endeavor.description}
                    </p>

                    <div className="pt-6 border-t border-white/30">
                      <span className="text-sm text-white/80">
                        {endeavor.metrics}
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-32"
        >
          <motion.p 
          className="font-light mb-8 text-gray-600"
        >
            Ready to collaborate on innovative ventures?
          </motion.p>
          <motion.a
            href="mailto:hani.mahdi623@gmail.com"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-12 py-4 border border-black text-black font-light tracking-widest text-sm uppercase transition-all duration-300 hover:bg-black hover:text-white"
          >
            Start a Conversation
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
