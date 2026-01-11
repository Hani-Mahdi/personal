"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function CareerGoals() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);

  const goals = [
    {
      phase: "Now",
      title: "Building Foundations",
      description: "Deepening expertise in deep learning and NLP while contributing to impactful open-source projects. Focusing on mastering the fundamentals that will support future growth.",
      timeline: "2024 - 2025",
    },
    {
      phase: "Next",
      title: "Industry Impact",
      description: "Joining a forward-thinking company where I can apply my skills to real-world challenges. Seeking opportunities to work on projects that push the boundaries of what's possible with AI.",
      timeline: "2025 - 2027",
    },
    {
      phase: "Future",
      title: "Leadership & Innovation",
      description: "Leading a data science team, developing innovative AI solutions that address real-world challenges. Particularly interested in the intersection of healthcare and AI.",
      timeline: "2027+",
    },
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-black relative overflow-hidden">
      {/* Animated Background Lines */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-white to-transparent"
            style={{
              top: `${20 + i * 15}%`,
              left: 0,
              right: 0,
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-6xl font-extralight tracking-wide text-white mb-6">
            Career Goals
          </h2>
          <p className="text-xl text-white/60 font-light max-w-2xl mx-auto">
            A roadmap of ambition, growth, and meaningful impact
          </p>
          <div className="w-24 h-px bg-white/30 mx-auto mt-8"></div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2">
            <motion.div
              className="w-full bg-gradient-to-b from-white to-white/30 origin-top"
              style={{ height: lineHeight }}
            ></motion.div>
          </div>

          {/* Goals */}
          <div className="space-y-24">
            {goals.map((goal, index) => (
              <motion.div
                key={goal.phase}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
                className={`relative grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 0 ? '' : 'md:direction-rtl'
                }`}
              >
                {/* Content */}
                <div className={`${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:order-2 md:text-left md:pl-16'}`}>
                  <span className="text-sm text-white/40 font-light tracking-widest uppercase mb-2 block">
                    {goal.timeline}
                  </span>
                  <h3 className="text-3xl font-light text-white mb-4 tracking-wide">
                    {goal.title}
                  </h3>
                  <p className="text-white/60 font-light leading-relaxed">
                    {goal.description}
                  </p>
                </div>

                {/* Phase Indicator */}
                <div className={`${index % 2 === 0 ? 'md:order-2 md:pl-16' : 'md:pr-16'} flex items-center ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                  <div className="relative">
                    {/* Circle */}
                    <div className="w-24 h-24 rounded-full border border-white/20 flex items-center justify-center bg-black">
                      <span className="text-2xl font-extralight text-white tracking-wider">
                        {goal.phase}
                      </span>
                    </div>
                    
                    {/* Decorative Ring */}
                    <div className="absolute -inset-3 rounded-full border border-white/10"></div>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white shadow-lg shadow-white/20 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Ultimate Vision */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-32 text-center"
        >
          <div className="inline-block relative">
            <div className="absolute -inset-8 border border-white/10 opacity-50"></div>
            <div className="absolute -inset-4 border border-white/20"></div>
            <div className="bg-black p-12 relative">
              <h3 className="text-2xl font-extralight text-white mb-4 tracking-wide">
                Ultimate Vision
              </h3>
              <p className="text-lg text-white/60 font-light max-w-2xl leading-relaxed">
                To be at the forefront of AI innovation, creating solutions that genuinely improve lives. 
                I envision a future where my work contributes to breakthroughs in healthcare, 
                making advanced diagnostics and personalized medicine accessible to all.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
