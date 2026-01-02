export default function Welcome() {
  return (
    <section className="px-6 py-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-black mb-6 text-center">
          Welcome to My Portfolio
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-12 text-center max-w-3xl mx-auto">
          I'm passionate about data science and machine learning, dedicated to turning complex data into meaningful insights. 
          Explore my work and discover how I'm building the future of data-driven solutions.
        </p>
        
        {/* Fibonacci Grid Layout */}
        <div className="grid grid-cols-12 gap-4 h-[600px]">
          {/* Large left rectangle - takes 8 columns */}
          <div className="col-span-8 row-span-2 bg-gray-100 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl font-bold text-black mb-2">10+</div>
              <div className="text-sm text-gray-600">Projects Completed</div>
            </div>
          </div>
          
          {/* Top right rectangle - takes 4 columns */}
          <div className="col-span-4 bg-gray-100 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-3xl font-bold text-black mb-2">5+</div>
              <div className="text-sm text-gray-600">Technologies</div>
            </div>
          </div>
          
          {/* Bottom right rectangles - each takes 2 columns */}
          <div className="col-span-2 bg-gray-100 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-2xl font-bold text-black mb-2">2+</div>
              <div className="text-sm text-gray-600">Years</div>
            </div>
          </div>
          
          <div className="col-span-2 bg-gray-100 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-2xl font-bold text-black mb-2">100%</div>
              <div className="text-sm text-gray-600">Passion</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
