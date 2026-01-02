"use client";
import { motion } from "framer-motion";

export default function Timeline() {
  const timelineEvents = [
    {
      year: "2021",
      title: "Started at McMaster",
      description: "Began Computer Science journey with focus on data science fundamentals",
      type: "education"
    },
    {
      year: "2022", 
      title: "First ML Project",
      description: "Developed predictive model for academic research on student performance",
      type: "project"
    },
    {
      year: "2022",
      title: "Data Science Internship",
      description: "Applied machine learning techniques to real-world business problems",
      type: "experience"
    },
    {
      year: "2023",
      title: "Advanced Algorithms Course",
      description: "Mastered complex data structures and optimization techniques",
      type: "education"
    },
    {
      year: "2023",
      title: "Research Publication",
      description: "Co-authored paper on neural network applications in healthcare analytics",
      type: "achievement"
    },
    {
      year: "2024",
      title: "Portfolio Development",
      description: "Curated comprehensive data science portfolio showcasing technical expertise",
      type: "current"
    }
  ];

  const getTypeColor = (type: string) => {
    switch(type) {
      case 'education': return 'border-blue-500';
      case 'project': return 'border-purple-500';
      case 'experience': return 'border-emerald-500';
      case 'achievement': return 'border-amber-500';
      case 'current': return 'border-red-500';
      default: return 'border-gray-500';
    }
  };

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
            Academic Journey
          </h2>
          <div className="w-24 h-px bg-black mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
            Key milestones in my data science education and professional development
          </p>
        </motion.div>
      </div>

      {/* Timeline Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1, 
                ease: "easeOut" 
              }}
              viewport={{ once: true }}
              className="relative group cursor-pointer"
            >
              {/* Timeline Card */}
              <div className="relative bg-white border border-gray-200 p-6 h-full transition-all duration-300 hover:border-black hover:shadow-lg">
                {/* Year Badge */}
                <div className="absolute -top-3 left-6">
                  <div className={`px-3 py-1 bg-white border-2 ${getTypeColor(event.type)} rounded-full`}>
                    <span className="text-xs font-light tracking-widest uppercase">{event.year}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="pt-2">
                  <h3 className="text-xl font-light text-black mb-3">{event.title}</h3>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">{event.description}</p>
                </div>

                {/* Decorative Element */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 border border-gray-300 rounded-sm flex items-center justify-center">
                    <span className="text-xs font-light">→</span>
                  </div>
                </div>
              </div>

              {/* Connecting Line (visual only) */}
              {index < timelineEvents.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gray-300"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Continue Learning Button */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <button className="px-12 py-4 border border-black text-black font-light tracking-widest text-sm uppercase transition-all duration-500 hover:bg-black hover:text-white">
          Continue Learning
        </button>
      </motion.div>
    </section>
  );
}
