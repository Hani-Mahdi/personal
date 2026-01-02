"use client";
import { motion, useTransform } from "framer-motion";

interface TimelineCardProps {
  event: {
    year: string;
    title: string;
    description: string;
    details: string;
    type: string;
  };
  index: number;
  totalEvents: number;
  scrollProgress: any;
}

export default function TimelineCard({ event, index, totalEvents, scrollProgress }: TimelineCardProps) {
  const cardProgress = useTransform(scrollProgress, [index / totalEvents, (index + 1) / totalEvents], [0, 1]);
  const isCardActive = useTransform(scrollProgress, 
    [index / totalEvents - 0.1, index / totalEvents, (index + 1) / totalEvents, (index + 1) / totalEvents + 0.1],
    [0, 1, 1, 0]
  );

  return (
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
      className="flex-shrink-0 w-80"
    >
      {/* Timeline Card */}
      <motion.div 
        className="relative bg-white border-2 p-8 h-full transition-all duration-300"
        style={{
          borderColor: isCardActive.get() > 0.5 ? '#000000' : '#e5e7eb',
          boxShadow: isCardActive.get() > 0.5 ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' : 'none',
          scale: 1 + (isCardActive.get() * 0.05)
        }}
      >
        {/* Year Badge */}
        <div className="absolute -top-4 left-6">
          <div className={`px-4 py-2 bg-white border-2 ${
            event.type === 'education' ? 'border-amber-600' :
            event.type === 'project' ? 'border-red-700' :
            event.type === 'experience' ? 'border-black' :
            event.type === 'achievement' ? 'border-amber-500' :
            'border-gray-900'
          } rounded-full`}>
            <span className="text-xs font-light tracking-widest uppercase">{event.year}</span>
          </div>
        </div>

        {/* Content */}
        <div className="pt-4">
          <h3 className="text-xl font-light text-black mb-3">{event.title}</h3>
          <p className="text-sm text-gray-600 font-light leading-relaxed mb-4">{event.description}</p>
          <p className="text-xs text-gray-500 font-light leading-relaxed italic">{event.details}</p>
        </div>

        {/* Event Type Indicator */}
        <div className="absolute bottom-4 right-4">
          <div className={`w-3 h-3 rounded-full ${
            event.type === 'education' ? 'bg-amber-600' :
            event.type === 'project' ? 'bg-red-700' :
            event.type === 'experience' ? 'bg-black' :
            event.type === 'achievement' ? 'bg-amber-500' :
            'bg-gray-900'
          }`}></div>
        </div>
      </motion.div>

      {/* Timeline Dot */}
      <div className="absolute top-1/2 -right-4 w-2 h-2 bg-black rounded-full"></div>
    </motion.div>
  );
}
