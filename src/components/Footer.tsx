"use client";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Main Content */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            {/* Left Side - Contact Info */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-extralight tracking-wide mb-4">Connect</h3>
                <div className="space-y-3">
                  <a 
                    href="mailto:hani.mahdi623@gmail.com" 
                    className="block text-gray-300 hover:text-white transition-colors duration-300 font-light"
                  >
                    hani.mahdi623@gmail.com
                  </a>
                  <div className="text-gray-400 font-light">
                    Toronto, Ontario
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Side - Social Media */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-extralight tracking-wide">Follow</h3>
              <div className="flex gap-6">
                {[
                  { name: 'Instagram', icon: <FaInstagram /> },
                  { name: 'LinkedIn', icon: <FaLinkedin /> },
                  { name: 'GitHub', icon: <FaGithub /> },
                  { name: 'Twitter', icon: <FaTwitter /> },
                  { name: 'Email', icon: <FaEnvelope /> }
                ].map((social, index) => (
                  <motion.a
                    key={social.name}
                    href="#"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="w-12 h-12 border border-gray-600 rounded-full flex items-center justify-center hover:border-white transition-all duration-300 group-hover:scale-110">
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-300 text-lg">
                        {social.icon}
                      </span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gray-800"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="text-gray-400 font-light text-sm"
            >
              © 2025 Hani Mahdi. All rights reserved.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
              className="flex gap-8"
            >
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 font-light text-sm">
                Privacy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 font-light text-sm">
                Terms
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
