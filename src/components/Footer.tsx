"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          {/* Main Content */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-16">
            {/* Left Side - Brand */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-4xl font-extralight tracking-wide">Hani Mahdi</h3>
              <p className="text-white/60 font-light max-w-xs leading-relaxed">
                Data scientist crafting elegant solutions through meticulous analysis.
              </p>
              <div className="w-16 h-px bg-white/30"></div>
            </motion.div>

            {/* Middle - Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h4 className="text-sm font-light tracking-[0.3em] uppercase text-white/40">Contact</h4>
              <div className="space-y-3">
                <a 
                  href="mailto:hani.mahdi623@gmail.com" 
                  className="block text-white/80 hover:text-white transition-colors duration-300 font-light"
                >
                  hani.mahdi623@gmail.com
                </a>
                <div className="text-white/60 font-light">
                  Toronto, Ontario
                </div>
              </div>
            </motion.div>

            {/* Right Side - Social Media */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h4 className="text-sm font-light tracking-[0.3em] uppercase text-white/40">Follow</h4>
              <div className="flex gap-4">
                {['GitHub', 'LinkedIn', 'Instagram'].map((social, index) => (
                  <motion.a
                    key={social}
                    href="#"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="w-12 h-12 border border-white/20 flex items-center justify-center hover:border-white hover:bg-white transition-all duration-300">
                      <span className="text-white/60 group-hover:text-black transition-colors duration-300 text-xs font-light tracking-wider">
                        {social.slice(0, 2).toUpperCase()}
                      </span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/10"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="text-white/40 font-light text-sm tracking-wide"
            >
              © 2025 Hani Mahdi. All rights reserved.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
              className="flex gap-12"
            >
              <a href="#" className="text-white/40 hover:text-white transition-colors duration-300 font-light text-sm tracking-wide">
                Privacy
              </a>
              <a href="#" className="text-white/40 hover:text-white transition-colors duration-300 font-light text-sm tracking-wide">
                Terms
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
