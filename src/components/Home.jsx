import { motion } from "framer-motion";
import { Button } from "./UI/moving-border";

export const Home = () => {
  return (
    <div
      id="home"
      className="flex flex-col-reverse lg:flex-row items-center justify-center min-h-screen px-6 lg:px-20 cursor-default gap-10"
    >
      {/* Left Section: Text Content */}
      <div className="max-w-xl text-center lg:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-400 leading-snug">
          Hi, I'm <span className="text-blue-100">Payas Patel</span>
        </h1>
        <p className="mt-4 text-sm md:text-base text-blue-400 pb-4">
          Full-Stack Developer with a strong foundation in computer engineering
          and hands-on experience building scalable web applications. Skilled in{" "}
          <span className="text-blue-100">
            React.js, Node.js, Express.js, and MongoDB
          </span>
          , with a solid grasp of
          <span className="text-blue-100">
            {" "}
            AWS, Tailwind CSS, and REST APIs.
          </span>
        </p>

        {/* Call-to-Action Button */}
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          <Button className="cursor-pointer">Check Resume</Button>
        </a>
      </div>

      {/* Right Section: Animated Image */}
      <div className="relative">
        <motion.div
          className="absolute inset-0 m-auto rounded-full border-2 border-[#00a3d9] w-36 h-36 md:w-40 md:h-40"
          animate={{ scale: [1.2, 1.4, 1.2] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>
        <img
          src="/me.png"
          alt="Profile"
          className="relative w-36 h-36 md:w-40 md:h-40 rounded-full object-cover shadow-lg"
        />
      </div>
    </div>
  );
};
