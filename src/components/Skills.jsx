import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaAws,
  FaJsSquare,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiPostman,
  SiMysql,
  SiHtml5,
  SiCss3,
  SiJsonwebtokens,
  SiPrisma,
  SiSupabase,
  SiCloudflare,
  SiGoogle,
} from "react-icons/si";
import { GiAtom, GiFlame } from "react-icons/gi"; // Jotai (atom), Hono (flame)

const categories = [
  {
    title: "Frontend",
    skills: [
      {
        icon: FaReact,
        label: "React.js",
        color: "text-blue-400 animate-spin-slow",
      },
      { icon: SiTailwindcss, label: "Tailwind CSS", color: "text-sky-400" },
      { icon: GiAtom, label: "Jotai", color: "text-green-400" },
      { icon: FaJsSquare, label: "JavaScript", color: "text-yellow-300" },
      { icon: SiHtml5, label: "HTML", color: "text-orange-500" },
      { icon: SiCss3, label: "CSS", color: "text-blue-600" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { icon: FaNodeJs, label: "Node.js", color: "text-green-500" },
      { icon: SiExpress, label: "Express.js", color: "text-gray-300" },
      { icon: GiFlame, label: "Hono", color: "text-orange-400" },
      { icon: SiPrisma, label: "Prisma ORM", color: "text-indigo-400" },
      { icon: SiSupabase, label: "Supabase", color: "text-emerald-400" },
      {
        icon: SiCloudflare,
        label: "Cloudflare Workers",
        color: "text-orange-400",
      },
      { icon: SiMongodb, label: "MongoDB", color: "text-green-400" },
      { icon: SiMysql, label: "MySQL", color: "text-blue-600" },
      { icon: SiJsonwebtokens, label: "JWT", color: "text-yellow-600" },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { icon: FaGithub, label: "GitHub", color: "text-gray-600" },
      { icon: FaGitAlt, label: "Git", color: "text-orange-500" },
      { icon: SiPostman, label: "Postman", color: "text-red-500" },
      { icon: FaAws, label: "AWS", color: "text-yellow-500" },
      { icon: SiGoogle, label: "Gemini API", color: "text-blue-400" }, // fallback for Gemini
    ],
  },
];

export const Skills = () => {
  return (
    <section
      id="skills"
      className="pt-20 pb-10 px-4 h-fit lg:h-screen bg-transparent"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-4xl md:text-4xl font-bold text-center bg-gradient-to-br from-blue-300 to-blue-500 bg-clip-text text-transparent mb-14"
      >
        My Skills
      </motion.h2>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full mx-auto">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="group bg-white/5 border border-white/10 hover:border-blue-400 hover:shadow-blue-400/30 transition-all duration-300 p-6 rounded-2xl shadow-md backdrop-blur-md hover:scale-110"
          >
            <h3 className="text-xl font-semibold text-white mb-4 text-center border-b border-white/20 pb-2">
              {category.title}
            </h3>
            <div className="grid grid-cols-3 gap-4 justify-items-center">
              {category.skills.map(({ icon: Icon, label, color }, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center transition-all duration-300 hover:scale-110"
                >
                  <Icon
                    className={`${color} text-3xl sm:text-3xl md:text-4xl lg:text-4xl`}
                  />
                  <span className="mt-1 text-xs sm:text-sm text-white text-center">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
