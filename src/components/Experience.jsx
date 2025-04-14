import { motion } from "framer-motion";
import { GlowingEffect } from "./UI/glowing-effect";

export const Experience = () => {
  const companyData = [
    {
      name: "Jio Platforms Limited",
      logo: "/assets/jio-logo-icon.png",
      time: "Dec 2023 – Present",
      description: [
        "Developed a MERN stack web platform to track employee performance, project contributions, and product insights.",
        "Led the AI Bot team, managing training and integration across multiple Jio projects.",
        "Optimized chatbot interactions for improved user engagement across internal tools.",
      ],
      skills: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Express.js",
        "Authentication",
        "Tailwind CSS",
        "Team Management",
      ],
    },
    {
      name: "TCR INNOVATIONS",
      logo: "/assets/tcr-logo.png",
      time: "Jun 2022 – Jul 2022",
      description: [
        "Worked on Data Science and Machine Learning projects during the internship.",
        "Built models for real-world datasets and optimized their performance.",
        "Gained experience with Python, scikit-learn, pandas, and data preprocessing techniques.",
      ],
      skills: ["Python", "pandas", "scikit-learn", "Machine Learning"],
    },
    {
      name: "Sumago Infotech",
      logo: "/assets/sumago-logo.png",
      time: "Jul 2021 – Aug 2021",
      description: [
        "Completed a Web Development internship focused on frontend and backend technologies.",
        "Built and deployed responsive web pages using HTML, CSS, JavaScript, and PHP.",
        "Collaborated with the development team to deliver client-based web projects.",
      ],
      skills: ["HTML", "CSS", "JavaScript", "PHP"],
    },
  ];

  return (
    <div
      id="experience"
      className="p-6 py-20 lg:py-0 h-fit lg:h-screen w-screen lg:flex lg:justify-center"
    >
      <div className="mb-6 text-center text-blue-400 text-2xl font-bold tracking-widest lg:h-full lg:flex lg:flex-col lg:justify-center">
        <p className="h-fit lg:transform lg:rotate-270">Experience</p>
      </div>
      <div className="flex flex-col gap-6 w-full justify-center max-w-5xl">
        {companyData.map((company, index) => (
          <motion.div
            className="w-full"
            key={index}
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 100, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Company {...company} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const Company = ({ name, description, logo, time, skills }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-6 items-start bg-white/5 border border-blue-400 backdrop-blur-md rounded-lg p-4 shadow-md w-full">
      <div className="flex-shrink-0 h-12 w-12 bg-white p-1 rounded shadow-sm">
        <GlowingEffect
          blur={8}
          borderWidth={6}
          spread={20}
          glow={true}
          disabled={false}
          proximity={50}
          inactiveZone={0.02}
        />
        <img
          src={logo}
          alt={`${name} logo`}
          className="h-full w-full object-contain"
        />
      </div>
      <div className="text-white text-xs w-full">
        <div className="flex justify-between items-center mb-1">
          <span className="font-semibold text-sm">{name}</span>
          <span className="text-gray-200 text-[11px]">{time}</span>
        </div>
        <ul className="list-disc list-inside text-gray-300 space-y-0.5">
          {description.map((desc, i) => (
            <li key={i}>{desc}</li>
          ))}
        </ul>

        {/* Skills Section */}
        <div className="mt-2 flex flex-wrap gap-1.5">
          {skills?.map((skill, i) => (
            <span
              key={i}
              className="px-2 py-0.5 text-[10px] bg-blue-500/20 text-blue-300 rounded-full border border-blue-500"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
