import Navbar from "@/components/Navbar";
import ProjectsHero from "@/components/ProjectsHero";

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: "Student Performance Predictor",
      description: "Machine learning project predicting student grades based on study patterns and attendance. Used regression models and achieved 87% accuracy.",
      tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Jupyter"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      name: "Customer Segmentation Analysis",
      description: "Course project applying clustering algorithms to segment customer data and identify purchasing patterns. Created interactive dashboards for insights.",
      tech: ["Python", "K-Means", "Seaborn", "Plotly", "SQL"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      name: "Sentiment Analysis of Reviews",
      description: "Natural language processing project analyzing product reviews to extract sentiment and identify key themes. Used NLP techniques and visualization.",
      tech: ["Python", "NLTK", "TextBlob", "WordCloud", "Streamlit"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        <ProjectsHero />
        
        <section className="px-6 pb-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div 
                  key={project.id}
                  className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="h-48 bg-black flex items-center justify-center">
                    <span className="text-white text-xl font-semibold">Project {project.id}</span>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-black mb-3">
                      {project.name}
                    </h3>
                    
                    <p className="text-gray-600 mb-4">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium border border-gray-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-4">
                      <a 
                        href={project.liveUrl}
                        className="text-black hover:text-gray-700 font-medium transition-colors"
                      >
                        View Live
                      </a>
                      <a 
                        href={project.githubUrl}
                        className="text-black hover:text-gray-700 font-medium transition-colors"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
