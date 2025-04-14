import { motion } from "framer-motion";
import { Button } from "./UI/moving-border";

export const Home = () => {
  return (
    <div
      id="home"
      className="flex flex-col-reverse lg:flex-row items-center justify-center min-h-screen px-6 lg:px-20 cursor-default gap-10 py-24 lg:py-0"
    >
      {/* Left Section: Text Content */}
      <div className="max-w-xl text-center lg:text-left">
        <h1 className="text-5xl md:text-4xl font-extrabold text-white leading-tight tracking-tight">
          Hi, I'm <span className="text-blue-400">Payas Patel</span>
        </h1>

        <p className="mt-6 text-base md:text-lg text-white/80 leading-relaxed">
          <span className="text-blue-300 font-semibold">
            {" "}
            Full-Stack Developer{" "}
          </span>{" "}
          with a computer engineering background and a passion for crafting
          high-performance web applications. Proficient in{" "}
          <span className="text-blue-300 font-semibold">
            React.js, Node.js, Express, MongoDB
          </span>
          , and experienced with{" "}
          <span className="text-blue-300 font-semibold">
            AWS, Tailwind CSS, and RESTful APIs
          </span>
          .
        </p>

        {/* Call-to-Action Button */}
        <div className="mt-8">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <Button className="cursor-pointer ">Check Resume</Button>
          </a>
        </div>
      </div>

      {/* Right Section: Animated Image */}
      <div className="relative">
        <motion.div
          className="absolute inset-0 m-auto rounded-full border-2 border-blue-400 w-36 h-36 md:w-40 md:h-40"
          animate={{ scale: [1.0, 1.2, 1.0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>
        <img
          src="/me.png"
          alt="Profile"
          className="relative w-36 h-36 md:w-40 md:h-40 rounded-full object-cover shadow-xl"
        />
      </div>
    </div>
  );
};
