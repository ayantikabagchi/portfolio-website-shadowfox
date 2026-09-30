
function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 px-6 py-16">
      
      <div className="max-w-4xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-amber-500 font-semibold tracking-widest uppercase mb-3">
            About Me
          </p>

          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Hello, I'm <span className="text-amber-500">Ayantika</span> 👋
          </h1>

          <p className="text-gray-500 text-lg">
            Welcome to my little corner of the web.
          </p>
        </div>

        {/* About Card */}
        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
          
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Who am I?
          </h2>

          <p className="text-gray-600 leading-7 mb-6">
            I'm currently learning web development and enjoy building
            interactive and creative websites. I love turning ideas into
            real projects and learning new technologies along the way.
          </p>

          <p className="text-gray-600 leading-7">
            This website is a small project where I'm practicing React,
            Tailwind CSS, and modern web development.
          </p>

          {/* Skills */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-5">
              What I Work With
            </h2>

            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-full bg-orange-100 text-orange-700 font-medium">
                HTML
              </span>

              <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium">
                CSS
              </span>

              <span className="px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 font-medium">
                JavaScript
              </span>

              <span className="px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 font-medium">
                React
              </span>

              <span className="px-4 py-2 rounded-full bg-purple-100 text-purple-700 font-medium">
                Tailwind CSS
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default About;

