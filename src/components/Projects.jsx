import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, ExternalLink } from "lucide-react";

const Projects = () => {
  const tabs = ["Web Apps", "UI/UX Designs", "3D Work"];
  const [activeTab, setActiveTab] = useState("Web Apps");

  const projects = {
    "Web Apps": [
      {
        title: "Portfolio Website",
        desc: "A futuristic personal portfolio built with React, Framer Motion, and TailwindCSS.",
        stack: ["React", "TailwindCSS", "Framer Motion"],
        link: "#",
      },
      {
        title: "SaaS Dashboard",
        desc: "A powerful analytics dashboard with user auth, charts, and real-time updates.",
        stack: ["Next.js", "Node.js", "MongoDB"],
        link: "#",
      },
    ],
    "UI/UX Designs": [
      {
        title: "Crypto App UI",
        desc: "High-fidelity Figma prototype for a crypto trading platform with neon linears.",
        stack: ["Figma", "Framer"],
        link: "#",
      },
      {
        title: "Landing Page Concepts",
        desc: "Conversion-focused landing pages for startups and digital products.",
        stack: ["Figma", "Illustrator"],
        link: "#",
      },
    ],
    "3D Work": [
      {
        title: "Iron Dev Animation",
        desc: "3D animation inspired by Iron Man coding futuristic interfaces.",
        stack: ["Blender", "After Effects"],
        link: "#",
      },
      {
        title: "Cyber Room Environment",
        desc: "3D render of a neon-lit workstation setup in cyberpunk style.",
        stack: ["Blender", "Unreal Engine"],
        link: "#",
      },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="projects"
      className="relative w-full bg-[#020202] text-white py-20 md:py-28 px-6 md:px-16 font-[Inter] overflow-hidden"
    >
      <div className="flex flex-col md:flex-row items-center md:items-stretch w-full gap-12 md:gap-0">
        {/* LEFT SIDE — Background Image */}
        <div className="relative md:w-1/2 w-full h-80 md:h-auto overflow-hidden rounded-2xl md:rounded-none">
          <motion.img
            src="/assets/projects/ironman.png"
            alt="Developer Iron Man"
            className="w-full h-full object-cover object-center opacity-90"
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
          {/* <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-transparent" /> */}
        </div>

        {/* RIGHT SIDE — Content */}
        <div className="relative z-10 md:w-1/2 w-full py-8 md:py-0 md:pl-12 flex flex-col justify-center">
          {/* Heading */}
          <div className="text-center md:text-left mb-10">
            <motion.h2
              className="text-4xl md:text-6xl font-bold bg-linear-to-r from-[#00FF88] via-[#00CC6A] to-[#00FF88] bg-clip-text text-transparent mb-6"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
            >
              Projects
              <motion.div
                className="h-1.5 bg-linear-to-r from-[#00FF88] to-[#00CC6A] rounded-full mt-4 mx-auto md:mx-0 max-w-48"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1.2, delay: 0.5 }}
              />
            </motion.h2>
          </div>

          {/* Subtitle */}
          <motion.p
            className="text-gray-300 text-base md:text-lg max-w-xl leading-relaxed text-center md:text-left mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Explore some of the projects I’ve designed and developed — blending
            creativity with technology.
          </motion.p>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4 mb-10">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full border text-sm md:text-base transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-[#00FF88] text-black font-semibold border-[#00FF88]"
                    : "border-[#00FF88]/40 text-gray-400 hover:border-[#00FF88] hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Project Cards */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: 50, transition: { duration: 0.4 } }}
              className="grid sm:grid-cols-2 gap-6"
            >
              {projects[activeTab].map((project, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="bg-black/50 border border-[#00FF88]/30 rounded-2xl p-6 hover:border-[#00FF88]/60 transition-all duration-500 hover:-translate-y-2 shadow-lg hover:shadow-[0_0_25px_rgba(0,255,136,0.2)] backdrop-blur-md"
                >
                  <h3 className="text-lg md:text-xl font-semibold text-[#00FF88] mb-2 flex items-center gap-2">
                    <Code className="w-5 h-5" /> {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs bg-[#00FF88]/10 text-[#00FF88] px-3 py-1 rounded-full border border-[#00FF88]/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-[#00FF88] hover:underline"
                  >
                    View Project <ExternalLink size={14} />
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* FLOATING GLOW */}
      <motion.div
        className="absolute -bottom-10 -left-10 w-80 h-80 bg-[#00FF88] rounded-full blur-[120px] opacity-10"
        animate={{
          y: [0, -30, 0],
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
};

export default Projects;
