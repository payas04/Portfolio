import { motion } from "framer-motion";
import React from "react";
import { GlowingEffect } from "./UI/glowing-effect"; // Assuming this component is part of your UI

export const Projects = () => {
  // Define the projects with necessary details
  const projects = [
    {
      id: "1",
      title: "EZ Pay - Peer to Peer Money Transfer App",
      description:
        "EZpay is a secure, real-time peer-to-peer (P2P) money transfer application built with the MERN stack. It enables users to send and receive money effortlessly while ensuring robust authentication and transaction security.",
      tags: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "Tailwind CSS",
        "JWT Authentication",
        "Bcrypt",
      ],
      imageUrl: "/assets/ez-demo.gif",
      demoUrl: "https://ez-payy.vercel.app/",
      sourceUrl: "https://github.com/payas04/EZpay",
    },
    {
      id: "2",
      title: "Employee Performance Tracker Platform",
      description:
        "A performance tracking system that provides analytics and insights into employee productivity, goal achievements, and performance trends over time.",
      tags: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Express.js",
        "Chart.js",
        "Authentication",
        "Tailwind CSS",
        "Admin Dashboard",
      ],
      imageUrl: "/assets/epms.gif",
      demoUrl: "https://teamjcpc.vercel.app/",
      sourceUrl: "https://github.com/payas04/JCPC",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center py-10 bg-transparent">
      {/* Project Cards Container */}
      <div
        id="projects"
        className="mt-10 flex flex-col md:flex-row gap-10 px-6 relative"
      >
        {/* Loop through projects and display cards */}
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} delay={index * 0.2} />
        ))}

        {/* Thin Separator Line Between Cards */}
        <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-gray-500/30 hidden md:block"></div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: "easeInOut" }}
      className="group border border-blue-400 backdrop-blur-lg bg-white/5 
        rounded-2xl shadow-xl hover:scale-[1.02] transition-transform duration-300 
        w-full md:w-[26rem] h-auto flex flex-col overflow-hidden z-0"
    >
      {/* Glowing effect */}
      <GlowingEffect
        blur={10}
        borderWidth={70}
        spread={60}
        glow={true}
        disabled={false}
        proximity={100}
        inactiveZone={0.02}
      />

      {/* Project Image */}
      <div className="h-[200px] w-full overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="object-cover brightness-60 w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Project Details */}
      <div className="p-5 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-lg font-semibold text-white">{project.title}</h3>
          <p className="text-gray-300 text-sm mt-2 line-clamp-4">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="bg-white/10 text-xs text-gray-300 px-2 py-1 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="mt-5 flex justify-between items-center">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-100 transition duration-300 text-sm"
            >
              Live Demo →
            </a>
          )}
          {project.sourceUrl && (
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-100 transition duration-300 text-sm"
            >
              Source Code →
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};
