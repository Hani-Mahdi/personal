export default function AboutHero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-8 text-center">
          About Me
        </h1>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-64 h-64 bg-black rounded-full mx-auto mb-8 flex items-center justify-center shadow-xl">
              <span className="text-white text-2xl font-semibold">Hani Mahdi</span>
            </div>
          </div>
          
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm a computer science student passionate about extracting insights from data 
              and building machine learning models. Through my studies and personal projects, 
              I'm developing skills in statistical analysis, data visualization, and predictive modeling.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              When I'm not studying or working on projects, you can find me exploring data science research, 
              contributing to open-source ML projects, or experimenting with new algorithms.
              I'm eager to apply my computer science background to solve real-world data problems.
            </p>
            
            <div>
              <h2 className="text-2xl font-semibold text-black mb-4">
                Skills & Technologies
              </h2>
              <div className="flex flex-wrap gap-2">
                {['Python', 'Machine Learning', 'SQL', 'Pandas', 'NumPy', 'Scikit-learn', 'Data Visualization', 'Statistics', 'TensorFlow', 'PyTorch', 'Deep Learning', 'NLP'].map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium border border-gray-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
