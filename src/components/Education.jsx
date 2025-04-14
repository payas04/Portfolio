import { motion } from "framer-motion";

export const Education = () => {
  return (
    <div
      id="education"
      className="flex flex-col md:flex-row items-center justify-center h-auto min-h-screen px-4 py-10"
    >
      <motion.h1
        initial={{ opacity: 0.5, x: -150 }}
        whileInView={{ opacity: 1, x: 10 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
        className="pr-0 md:pr-15 mb-8 md:mb-0 bg-gradient-to-br from-blue-200 to-blue-400 bg-clip-text text-center text-2xl font-medium tracking-tight text-transparent md:text-4xl"
      >
        Education
      </motion.h1>

      <ol className="relative border-s border-gray-400 dark:border-gray-600 text-xs sm:text-sm md:text-base">
        <li className="mb-8 ms-4">
          <div className="absolute w-3.5 h-3.5 bg-blue-500 rounded-full mt-1 -start-2 border border-white dark:border-gray-800"></div>
          <time className="block text-gray-400 dark:text-gray-500">2023</time>
          <h3 className="font-semibold text-gray-900 dark:text-white">
            B.E. in Computer Engineering
          </h3>
          <p className="text-gray-500 dark:text-gray-400">
            Vidyalankar Institute of Technology, Mumbai
          </p>
          <span className="text-blue-400 font-medium">9.6 CGPA</span>
        </li>

        <li className="mb-8 ms-4">
          <div className="absolute w-3.5 h-3.5 bg-blue-500 rounded-full mt-1 -start-2 border border-white dark:border-gray-800"></div>
          <time className="block text-gray-400 dark:text-gray-500">2020</time>
          <h3 className="font-semibold text-gray-900 dark:text-white">
            Diploma in Computer Technology
          </h3>
          <p className="text-gray-500 dark:text-gray-400">
            K.K. Wagh Polytechnic, Nashik
          </p>
          <span className="text-blue-400 font-medium">90.11%</span>
        </li>

        <li className="mb-8 ms-4">
          <div className="absolute w-3.5 h-3.5 bg-blue-500 rounded-full mt-1 -start-2 border border-white dark:border-gray-800"></div>
          <time className="block text-gray-400 dark:text-gray-500">2017</time>
          <h3 className="font-semibold text-gray-900 dark:text-white">SSC</h3>
          <p className="text-gray-500 dark:text-gray-400">
            PVG's Dr. Kakasaheb Deodhar English School
          </p>
          <span className="text-blue-400 font-medium">83.00%</span>
        </li>
      </ol>
    </div>
  );
};
