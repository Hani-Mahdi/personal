"use client";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import TimelineCard from "./TimelineCard";

export default function ScrollTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [isTimelineActive, setIsTimelineActive] = useState(false);
  const scrollProgress = useMotionValue(0);

  const timelineEvents = [
    {
      year: "2020",
      title: "High School Achievement",
      description: "Graduated with honors in advanced mathematics and computer science",
      details: "AP Calculus, Computer Science Principles, Physics Excellence Award",
      type: "education"
    },
    {
      year: "2020",
      title: "First Coding Bootcamp",
      description: "Completed intensive summer program in web development",
      details: "HTML/CSS, JavaScript basics, React fundamentals, Git workflow",
      type: "project"
    },
    {
      year: "2021",
      title: "Started at McMaster",
      description: "Began Computer Science journey with focus on data science fundamentals",
      details: "Core programming courses, mathematics foundations, introduction to algorithms",
      type: "education"
    },
    {
      year: "2021", 
      title: "First Programming Competition",
      description: "Participated in ACM ICPC regional programming contest",
      details: "Algorithm optimization, team collaboration, competitive programming",
      type: "achievement"
    },
    {
      year: "2021",
      title: "Open Source Contribution",
      description: "First contribution to a popular Python data science library",
      details: "Bug fixes, documentation improvements, code review process",
      type: "project"
    },
    {
      year: "2022", 
      title: "First ML Project",
      description: "Developed predictive model for academic research on student performance",
      details: "Python, Scikit-learn, data preprocessing, model evaluation",
      type: "project"
    },
    {
      year: "2022",
      title: "Data Science Internship",
      description: "Applied machine learning techniques to real-world business problems",
      details: "Industry experience, collaborative development, production deployment",
      type: "experience"
    },
    {
      year: "2022",
      title: "Teaching Assistant Role",
      description: "Led tutorials for first-year computer science students",
      details: "Peer mentoring, concept explanation, grading assistance",
      type: "experience"
    },
    {
      year: "2022",
      title: "Kaggle Competition",
      description: "Achieved top 10% in global machine learning competition",
      details: "Feature engineering, ensemble methods, hyperparameter tuning",
      type: "achievement"
    },
    {
      year: "2023",
      title: "Advanced Algorithms",
      description: "Mastered complex data structures and optimization techniques",
      details: "Algorithm design, complexity analysis, competitive programming",
      type: "education"
    },
    {
      year: "2023",
      title: "Research Publication",
      description: "Co-authored paper on neural network applications in healthcare analytics",
      details: "Academic research, paper writing, peer review process, conference presentation",
      type: "achievement"
    },
    {
      year: "2023",
      title: "Hackathon Victory",
      description: "Won first place in university data science hackathon",
      details: "24-hour challenge, team leadership, innovative solution development",
      type: "achievement"
    },
    {
      year: "2023",
      title: "Cloud Certification",
      description: "Achieved AWS Certified Machine Learning Specialist certification",
      details: "Cloud architecture, ML services, scalable deployment strategies",
      type: "achievement"
    },
    {
      year: "2024",
      title: "Thesis Research",
      description: "Began undergraduate thesis on deep learning for medical imaging",
      details: "Literature review, experimental design, neural network architecture",
      type: "project"
    },
    {
      year: "2024",
      title: "Portfolio Development",
      description: "Curated comprehensive data science portfolio showcasing technical expertise",
      details: "Full-stack development, UI/UX design, project documentation, deployment",
      type: "current"
    }
  ];

  useEffect(() => {
    let isLocked = false;
    
    const handleWheel = (e: WheelEvent) => {
      if (!timelineRef.current) return;
      
      const rect = timelineRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const timelineTop = rect.top;
      const timelineBottom = rect.bottom;
      
      // Check if mouse is over the timeline container
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const isMouseOverTimeline = mouseX >= rect.left && mouseX <= rect.right && 
                                mouseY >= timelineTop && mouseY <= timelineBottom;
      
      // Only lock scroll if mouse is over timeline
      if (isMouseOverTimeline && timelineTop < viewportHeight && timelineBottom > 0) {
        const currentProgress = scrollProgress.get();
        const isScrollingDown = e.deltaY > 0;
        
        // Allow regular scrolling if at 100% and scrolling down
        if (currentProgress >= 1 && isScrollingDown) {
          setIsTimelineActive(false);
          isLocked = false;
          return; // Don't prevent default, allow normal scroll
        }
        
        // Allow regular scrolling if at 0% and scrolling up
        if (currentProgress <= 0 && !isScrollingDown) {
          setIsTimelineActive(false);
          isLocked = false;
          return; // Don't prevent default, allow normal scroll
        }
        
        // Lock scroll for all other cases (scrolling through timeline)
        e.preventDefault();
        setIsTimelineActive(true);
        isLocked = true;
        
        // Update progress based on wheel direction
        const delta = isScrollingDown ? 0.01 : -0.01;
        const newProgress = Math.max(0, Math.min(1, currentProgress + delta));
        scrollProgress.set(newProgress);
        
        // Only unlock if scrolling backwards from the end
        if (newProgress <= 0) {
          setIsTimelineActive(false);
          isLocked = false;
        }
      } else {
        setIsTimelineActive(false);
        isLocked = false;
      }
    };

    window.addEventListener('wheel', handleWheel as any, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  const smoothProgress = useSpring(scrollProgress, { stiffness: 300, damping: 30 });
  // Calculate exact range needed: (cards - visible) * (card width + gap)
  const cardWidth = 320; // w-80 = 20rem = 320px
  const gap = 32; // gap-8 = 2rem = 32px
  const visibleCards = 3; // Approximate visible cards at once
  const totalWidth = (timelineEvents.length - visibleCards) * (cardWidth + gap);
  const adjustedWidth = totalWidth * 0.9; // 75% + 15% = 90% of the full range
  const x = useTransform(smoothProgress, [0, 1], [0, -adjustedWidth]);
  const progressPercent = useTransform(scrollProgress, [0, 1], [0, 100]);
  const roundedProgress = useTransform(progressPercent, (latest) => Math.round(latest));
  
  // Color transitions: Gold (0-33%) -> Red (33-66%) -> Black (66-100%)
  const progressColor = useTransform(smoothProgress, [0, 0.33, 0.66, 1], [
    '#d97706', // amber-600 (gold) at 0%
    '#d97706', // amber-600 (gold) at 33%
    '#b91c1c', // red-700 at 66%  
    '#000000'  // black at 100%
  ]);

  return (
    <section ref={containerRef} className="relative py-24 bg-white">
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
            Scroll to progress through my data science timeline
          </p>
        </motion.div>
      </div>

      {/* Progress Indicator */}
      <div className="bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-light tracking-widest text-gray-600 uppercase">
              {isTimelineActive ? 'Timeline Progress' : 'Scroll to Timeline'}
            </span>
            <motion.div 
              className="absolute left-1/2 transform -translate-x-1/2 w-64 h-1 bg-gray-200 rounded-full overflow-hidden"
            >
              <motion.div 
                className="h-full origin-left"
                style={{ 
                  scaleX: smoothProgress,
                  backgroundColor: progressColor
                }}
              />
            </motion.div>
            <span className="text-sm font-light tracking-widest text-gray-600 uppercase">
              <motion.span>{roundedProgress}</motion.span>%
            </span>
          </div>
        </div>
      </div>

      {/* Horizontal Timeline Container */}
      <div ref={timelineRef} className="relative h-96 flex items-center overflow-hidden">
        {/* Timeline Line */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-300 -translate-y-1/2"></div>
        
        {/* Moving Timeline Cards */}
        <motion.div 
          className="flex gap-8 px-6"
          style={{ x }}
        >
          {timelineEvents.map((event, index) => (
            <TimelineCard
              key={index}
              event={event}
              index={index}
              totalEvents={timelineEvents.length}
              scrollProgress={scrollProgress}
            />
          ))}
        </motion.div>
      </div>

      {/* Scroll Instructions */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <div className="flex items-center justify-center gap-2 text-gray-400">
          <span className="text-sm font-light">
            {isTimelineActive ? 'Continue scrolling through timeline' : 'Scroll down to begin timeline'}
          </span>
          <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-4 h-4 border border-gray-400 rounded-full flex items-center justify-center"
          >
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
