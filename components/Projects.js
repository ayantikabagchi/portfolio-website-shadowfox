function Projects() {
  const projectsList = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A personal portfolio built with React, Tailwind CSS, and Parcel to showcase my work and skills.",
      tags: ["React", "Tailwind CSS", "Parcel","React Router"],
    },
    
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive web application that fetches real-time weather data and forecasts.",
      tags: ["JavaScript", "API", "Tailwind CSS"],
    },
    {
      id: 4,
      title: "Github Profile Finder",
      description: "A responsive web application that finds any profile on github platform.",
      tags: ["JavaScript", "API", "Tailwind CSS","React","React Router"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 px-6 py-16">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-amber-500 font-semibold tracking-widest uppercase mb-3">
            My Work
          </p>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Featured <span className="text-amber-500">Projects</span> 🚀
          </h1>
          <p className="text-gray-500 text-lg">
            Here are some of the projects I've been working on.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsList.map((project) => (
            <div
              key={project.id}
              className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border border-gray-100 p-6 flex flex-col justify-between hover:shadow-2xl transition duration-300 transform hover:-translate-y-1"
            >
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-3">
                  {project.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;

