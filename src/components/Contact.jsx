import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

export const Contact = () => {
  return (
    <div className="flex items-center justify-center px-4 py-8 h-screen ">
      <div
        id="contact"
        className="backdrop-blur-md bg-white/5 border border-blue-400 rounded-2xl p-6 w-full max-w-lg shadow-lg text-white relative"
      >
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-4 text-center text-blue-400 tracking-wide">
          Contact Me
        </h2>

        {/* Contact Info */}
        <div className="text-sm text-center text-gray-300 mb-6 space-y-2">
          <div className="flex items-center justify-center gap-2">
            <FaEnvelope className="text-blue-300" aria-label="Email" />
            <a
              href="mailto:payaspatel1001@gmail.com"
              className="text-gray-400 hover:text-white transition"
              aria-label="Email Payas"
            >
              payaspatel108@gmail.com
            </a>
          </div>
          <div className="flex items-center justify-center gap-2">
            <FaPhone className="text-blue-300" aria-label="Phone" />
            <span
              className="cursor-pointer text-gray-400"
              aria-label="Call Payas"
            >
              +91 8446270135
            </span>
          </div>
        </div>

        {/* Form */}
        <form
          action="https://formspree.io/f/xrbprbyw"
          method="POST"
          className="space-y-3"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full bg-white/10 border border-blue-300 placeholder-gray-400 text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
            aria-label="Your Name"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full bg-white/10 border border-blue-300 placeholder-gray-400 text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
            aria-label="Your Email"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows={4}
            className="w-full bg-white/10 border border-blue-300 placeholder-gray-400 text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
            aria-label="Your Message"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-gray-700 hover:bg-blue-600 transition duration-300 text-white font-semibold py-2 px-4 rounded-lg text-sm"
          >
            Send Message
          </button>
        </form>

        {/* Social Links */}
        <div className="mt-5 flex justify-center gap-6 text-lg text-blue-400">
          <a
            href="https://github.com/Payas04"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="GitHub Profile"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/payas-patel"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};
