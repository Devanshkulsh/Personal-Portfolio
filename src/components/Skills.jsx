import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillsRow1 = [
  { name: "React.js", icon: "⚛️", level: 90 },
  { name: "Node.js", icon: "🟢", level: 70 },
  { name: "Next.js", icon: "▲", level: 70 },
  { name: "Express.js", icon: "🚂", level: 70 },
  { name: "MongoDB", icon: "🍃", level: 70 },
  { name: "JavaScript", icon: "📜", level: 90 },
  { name: "Tailwind CSS", icon: "💨", level: 95 },
  { name: "Framer Motion", icon: "🎬", level: 80 },
  { name: "TypeScript", icon: "🔷", level: 85 },
  { name: "Java", icon: "☕", level: 80 },
];

const skillsRow2 = [
  { name: "Python", icon: "🐍", level: 80 },
  { name: "Machine Learning", icon: "🤖", level: 78 },
  { name: "HTML", icon: "🌐", level: 98 },
  { name: "CSS", icon: "🎨", level: 95 },
  { name: "WordPress", icon: "💻", level: 90 },
  { name: "Knorish", icon: "📚", level: 90 },
  { name: "TensorFlow", icon: "🔢", level: 70 },
  { name: "Git / GitHub", icon: "📊", level: 90 },
  { name: "REST APIs", icon: "🔗", level: 80 },
  { name: "UI/UX Design", icon: "🎯", level: 85 },
];

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.1 });

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={ref}
      id="skills"
      className="relative w-full overflow-hidden bg-[#020202] py-24 md:py-22 flex flex-col gap-20 font-[Inter]"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-br from-black via-[#001a0d] to-[#003320]" />

      {/* Glow Effects */}
      <motion.div
        className="absolute top-1/4 left-1/5 w-96 h-96 bg-[#00FF88] rounded-full blur-[160px] opacity-15"
        animate={{ y: [0, 40, 0], x: [0, 20, 0], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#00CC6A] rounded-full blur-[140px] opacity-10"
        animate={{
          y: [0, -30, 0],
          x: [0, -15, 0],
          opacity: [0.08, 0.18, 0.08],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-[#00FF88] rounded-full"
          style={{ left: `${15 + i * 16}%`, top: `${20 + i * 12}%` }}
          animate={{
            y: [0, -80, 0],
            x: [0, Math.sin(i) * 60, 0],
            opacity: [0, 0.8, 0],
            scale: [0, 1.2, 0],
          }}
          transition={{
            duration: 6 + i * 1.5,
            repeat: Infinity,
            delay: i * 0.8,
          }}
        />
      ))}

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-linear(#00FF88 1px, transparent 1px),
                             linear-linear(90deg, #00FF88 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Heading */}
      <motion.div
        className="relative z-10 text-center px-4"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-4xl md:text-6xl font-bold bg-linear-to-r from-[#00FF88] via-[#00CC6A] to-[#00FF88] bg-clip-text text-transparent mb-6"
          whileHover={{ scale: 1.02 }}
        >
          My Skills
          <motion.div
            className="h-1.5 bg-linear-to-r from-[#00FF88] to-[#00CC6A] rounded-full mt-4 mx-auto max-w-48"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1.2, delay: 0.5 }}
          />
        </motion.h2>

        <motion.p
          className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Technologies and tools I{" "}
          <span className="text-[#00FF88] font-semibold">
            love working with
          </span>{" "}
          to create amazing digital experiences
        </motion.p>
      </motion.div>

      {/* Marquee Rows (Desktop) */}
      <div className="hidden lg:flex flex-col gap-16 relative z-10 px-6">
        {[skillsRow1, skillsRow2].map((row, rowIndex) => (
          <div key={rowIndex} className="relative overflow-visible">
            <motion.div
              className="flex gap-8 whitespace-nowrap overflow-visible"
              animate={{
                x: rowIndex === 0 ? ["0%", "-100%"] : ["-100%", "0%"],
              }}
              transition={{
                duration: rowIndex === 0 ? 40 : 45,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...row, ...row].map((skill, i) => (
                <motion.div
                  key={`${rowIndex}-${i}`}
                  whileHover={{
                    scale: 1.08,
                    y: -8,
                    boxShadow: "0 20px 40px rgba(0,255,136,0.3)",
                  }}
                  className="relative z-20 group min-w-[220px] bg-linear-to-br from-black/60 to-[#001a0d]/80 
                       border border-[#00FF88]/30 rounded-2xl p-6 backdrop-blur-xl 
                       hover:border-[#00FF88]/60 transition-all duration-500"
                >
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{skill.icon}</span>
                    <h3 className="text-white font-semibold text-lg">
                      {skill.name}
                    </h3>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-gray-800 rounded-full h-2 mb-2">
                    <motion.div
                      className="bg-linear-to-r from-[#00FF88] to-[#00CC6A] h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: 0.2 }}
                    />
                  </div>

                  <div className="flex justify-between text-sm text-gray-400">
                    <span>Proficiency</span>
                    <span className="text-[#00FF88] font-bold">
                      {skill.level}%
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>

      {/* Mobile & Tablet Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:hidden gap-5 px-6 relative z-10">
        {[...skillsRow1, ...skillsRow2].map((skill, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            whileHover={{
              scale: 1.05,
              y: -4,
              boxShadow: "0 15px 30px rgba(0,255,136,0.25)",
            }}
            className="relative group bg-linear-to-br from-black/50 to-[#001a0d]/70 
                       border border-[#00FF88]/25 rounded-xl p-4 backdrop-blur-lg 
                       hover:border-[#00FF88]/50 transition-all duration-300"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">{skill.icon}</span>
              <h3 className="text-white font-semibold text-sm flex-1">
                {skill.name}
              </h3>
            </div>

            <div className="w-full bg-gray-800 rounded-full h-1.5 mb-2">
              <motion.div
                className="bg-linear-to-r from-[#00FF88] to-[#00CC6A] h-1.5 rounded-full"
                initial={{ width: 0 }}
                animate={inView ? { width: `${skill.level}%` } : {}}
                transition={{ duration: 1.2, delay: i * 0.05 + 0.3 }}
              />
            </div>

            <div className="flex justify-between text-xs text-gray-400">
              <span>Level</span>
              <span className="text-[#00FF88] font-bold">{skill.level}%</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
