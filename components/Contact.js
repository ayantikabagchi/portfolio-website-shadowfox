
function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-yellow-50 px-5 py-12">

      <div className="max-w-2xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-8">

          <p className="text-amber-500 text-sm font-semibold tracking-[0.2em] uppercase mb-2">
            Get In Touch
          </p>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Let's Connect ✨
          </h1>

          <p className="text-gray-500 text-sm md:text-base">
            Have a question or want to work together?
            I'd love to hear from you.
          </p>

        </div>


        {/* Contact Card */}
        <div className="bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-amber-100 p-7 md:p-9">

          <form className="space-y-5">

            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Name
              </label>

              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 text-sm rounded-xl bg-gray-50 border border-gray-200 outline-none focus:bg-white focus:border-amber-400 focus:ring-4 focus:ring-amber-100 transition duration-200"
              />
            </div>


            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email
              </label>

              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-3 text-sm rounded-xl bg-gray-50 border border-gray-200 outline-none focus:bg-white focus:border-amber-400 focus:ring-4 focus:ring-amber-100 transition duration-200"
              />
            </div>


            {/* Subject */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Subject
              </label>

              <input
                type="text"
                placeholder="What would you like to talk about?"
                className="w-full px-4 py-3 text-sm rounded-xl bg-gray-50 border border-gray-200 outline-none focus:bg-white focus:border-amber-400 focus:ring-4 focus:ring-amber-100 transition duration-200"
              />
            </div>


            {/* Message */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Message
              </label>

              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full px-4 py-3 text-sm rounded-xl bg-gray-50 border border-gray-200 outline-none resize-none focus:bg-white focus:border-amber-400 focus:ring-4 focus:ring-amber-100 transition duration-200"
              ></textarea>
            </div>


            {/* Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-400 to-orange-400 text-white text-sm font-semibold shadow-md hover:shadow-lg hover:scale-[1.01] transition duration-200"
            >
              Send Message →
            </button>

          </form>


          {/* Social Section */}
          <div className="mt-8 pt-7 border-t border-gray-100">

            <p className="text-center text-sm font-semibold text-gray-700 mb-5">
              Or connect with me
            </p>

            <div className="flex justify-center gap-4">

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/ayantika-bagchi-a087043b9/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-50 text-blue-600 text-sm font-semibold hover:bg-blue-600 hover:text-white transition duration-300"
              >
                <span className="font-bold text-base">in</span>
                LinkedIn
              </a>


              {/* Instagram */}
              <a
                href="https://www.instagram.com/say-it-ayantika/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-5 py-2.5 rounded-xl bg-pink-50 text-pink-600 text-sm font-semibold hover:bg-pink-500 hover:text-white transition duration-300"
              >
                <span className="text-base">◎</span>
                Instagram
              </a>

            </div>

          </div>

        </div>

        {/* Footer */}
        <p className="text-center text-xs text-gray-400 mt-6">
          © 2026 • Made with ❤️ and React
        </p>

      </div>

    </div>
  );
}

export default Contact;

