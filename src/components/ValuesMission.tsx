"use client";
import { motion } from "framer-motion";

export default function ValuesMission() {
  const values = [
    {
      title: "Data-Driven Impact",
      description: "Transforming raw data into decisions that matter",
    },
    {
      title: "Ethical AI",
      description: "Building responsible and transparent solutions",
    },
    {
      title: "Continuous Learning",
      description: "Evolving with the ever-changing tech landscape",
    },
    {
      title: "Collaboration",
      description: "Diverse perspectives create better outcomes",
    },
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Large Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-extralight text-black/5 whitespace-nowrap select-none pointer-events-none">
        VALUES
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-24 items-center">
          {/* Left Side - Mission Statement */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-extralight tracking-wide text-black mb-6">
              Values & Mission
            </h2>
            <p className="text-xl text-black/60 font-light relative inline-block pb-4 mb-12">
              What drives my work and defines my approach
              <span className="absolute bottom-0 left-0 w-3/4 h-px bg-black"></span>
            </p>

            {/* Mission Quote */}
            <div className="relative pl-8 border-l-2 border-black">
              <p className="text-2xl text-black font-light leading-relaxed italic">
                "To bridge the gap between complex data and actionable insights, 
                making advanced analytics accessible to everyone."
              </p>
            </div>

            {/* Philosophy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-12 text-lg text-black/70 font-light leading-relaxed"
            >
              I believe technology should serve humanity, not the other way around. 
              Every model I build, every analysis I conduct, is guided by the question: 
              "How does this create real value for real people?"
            </motion.p>
          </motion.div>

          {/* Right Side - Values Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white border border-black/10 p-6 h-full shadow-sm hover:shadow-xl transition-all duration-500 hover:border-black/30 relative overflow-hidden">
                  {/* Number */}
                  <span className="absolute top-4 right-4 text-6xl font-extralight text-black/5 group-hover:text-black/10 transition-colors duration-500">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-lg font-medium text-black mb-2 tracking-wide">
                      {value.title}
                    </h3>
                    <p className="text-sm text-black/60 font-light leading-relaxed">
                      {value.description}
                    </p>
                  </div>

                  {/* Bottom Line */}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-500"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-24 pt-16 border-t border-black/10"
        >
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-extralight text-black mb-2">100%</div>
              <div className="text-sm text-black/60 font-light tracking-wide uppercase">Commitment</div>
            </div>
            <div>
              <div className="text-5xl font-extralight text-black mb-2">∞</div>
              <div className="text-sm text-black/60 font-light tracking-wide uppercase">Curiosity</div>
            </div>
            <div>
              <div className="text-5xl font-extralight text-black mb-2">24/7</div>
              <div className="text-sm text-black/60 font-light tracking-wide uppercase">Dedication</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
