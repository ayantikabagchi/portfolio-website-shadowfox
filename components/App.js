import { Link, Routes, Route } from "react-router";
import Heading from "./Heading";
import Contact from "./Contact";
import About from "./About";
import Projects from "./Projects";

function App() {
  return (
    <>
    <nav className="flex items-center justify-between px-8 py-4 m-3 rounded-2xl bg-white/80 backdrop-blur-md shadow-lg border border-gray-200">
  
  {/* Logo */}
  <Link to="/" className="text-2xl font-bold text-gray-800">
    MyWebsite
  </Link>

  {/* Navigation Links */}
  <div className="flex items-center gap-8">
    <Link
      to="/"
      className="text-gray-600 font-medium hover:text-amber-600 transition duration-300"
    >
      Home
    </Link>

    <Link
      to="/about"
      className="text-gray-600 font-medium hover:text-amber-600 transition duration-300"
    >
      About
    </Link>

    <Link
      to="/projects"
      className="text-gray-600 font-medium hover:text-amber-600 transition duration-300"
    >
      Projects
    </Link>

    <Link
      to="/contact"
      className="text-gray-600 font-medium hover:text-amber-600 transition duration-300"
    >
      Contact
    </Link>
  </div>
</nav>

      <Routes>
        <Route path="/" element={<Heading />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;