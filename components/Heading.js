import { Link } from "react-router";
import profilePic from "url:../public/profile.png";

function Heading() {
  return (
    <div className="min-h-[85vh] bg-gradient-to-br from-amber-50 via-white to-orange-50 px-6 py-12 md:py-20 flex items-center justify-center">
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
        
        {/* Left Column - Text Content */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100/80 border border-amber-200 text-amber-800 text-sm md:text-base font-semibold shadow-sm">
            <span>👋</span> Welcome to my portfolio
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
              Ayantika Bagchi
            </span>
          </h1>

          <h2 className="text-2xl sm:text-3xl font-bold text-gray-700">
            Frontend Developer
          </h2>

          <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
            I am a passionate frontend developer with a strong focus on creating
            visually appealing, responsive, and user-friendly web applications.
            I love learning modern web technologies and turning creative ideas into reality.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
            <Link
              to="/contact"
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition duration-300"
            >
              Get In Touch →
            </Link>
            <Link
              to="/projects"
              className="px-8 py-4 rounded-2xl bg-white text-gray-800 font-bold text-lg border border-gray-200 shadow-md hover:bg-gray-50 hover:scale-105 transition duration-300"
            >
              View Projects
            </Link>
          </div>
        </div>

        {/* Right Column - Profile Image */}
        <div className="flex-shrink-0 relative group">
          <div className="absolute -inset-1 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition duration-500"></div>
          <img
            src={profilePic}
            alt="Ayantika Bagchi Profile"
            className="relative w-100 h-200 sm:w-88 sm:h-88 lg:w-[420px] lg:h-[420px] rounded-full object-cover shadow-2xl "
          />
        </div>

      </div>
    </div>
  );
}

export default Heading;