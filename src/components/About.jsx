import { motion } from "framer-motion";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <section
      id="about"
      className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-12 py-20 font-[Inter] overflow-x-hidden overflow-y-visible"
      style={{
        background:
          "linear-gradient(to bottom, #000000 0%, #001a12 60%, #004d33 100%)",
      }}
    >
      {/* === BACKGROUND EFFECTS === */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Glowing Circles */}
        <motion.div
          className="absolute top-1/4 left-[10%] w-72 md:w-80 h-72 md:h-80 bg-[#00FF88] rounded-full blur-[140px] opacity-15"
          animate={{
            y: [0, 40, 0],
            x: [0, 10, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-[10%] w-80 md:w-96 h-80 md:h-96 bg-[#00CC6A] rounded-full blur-[140px] opacity-10"
          animate={{
            y: [0, -30, 0],
            x: [0, -10, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-56 md:w-64 h-56 md:h-64 bg-[#008844] rounded-full blur-[100px] opacity-10"
          animate={floatingAnimation}
        />

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(#00FF88 1px, transparent 1px),
                               linear-gradient(90deg, #00FF88 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#00FF88] rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              top: `${10 + i * 15}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, 40, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 6 + i * 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* === MAIN CONTENT === */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative w-full max-w-6xl flex flex-col md:flex-row items-center justify-center gap-12 z-10"
      >
        {/* LEFT SIDE — IMAGE */}
        <motion.div
          variants={itemVariants}
          className="relative flex justify-center items-center md:w-1/2"
        >
          <div className="relative w-72 md:w-80 h-[440px] md:h-[500px] rounded-2xl overflow-hidden border-2 border-[#00FF88]/40 bg-black shadow-lg shadow-[#00FF8840]">
            <img
              src="/assets/about/devansh.jpeg"
              alt="Devansh"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </motion.div>

        {/* RIGHT SIDE — TEXT & ANIMATIONS */}
        <motion.div
          variants={containerVariants}
          className="relative flex flex-col md:w-1/2 text-white gap-8 text-center md:text-left"
        >
          {/* Heading */}
          <motion.div variants={itemVariants} className="relative">
            <motion.h2 className="text-4xl md:text-5xl font-bold text-[#00FF88] relative w-fit mx-auto md:mx-0 mb-4">
              About Me
              <motion.div
                className="absolute left-0 -bottom-3 h-1 bg-[#00FF88] rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.2, ease: "easeInOut", delay: 0.5 }}
              />
            </motion.h2>
            <div className="flex gap-1 justify-center md:justify-start mt-2">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-[#00FF88] rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 1 + i * 0.1 }}
                />
              ))}
            </div>
          </motion.div>

          {/* Name */}
          <motion.h3
            variants={itemVariants}
            className="text-3xl md:text-4xl font-semibold"
          >
            I'm{" "}
            <span className="text-[#00FF88] relative">
              Devansh Kulshreshtha
              <motion.span
                className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#00FF88]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              />
            </span>
          </motion.h3>

          {/* About Paragraph */}
          <motion.div variants={itemVariants}>
            <motion.p
              className="text-gray-300 leading-relaxed text-lg max-w-2xl mx-auto md:mx-0 backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10"
              whileHover={{
                boxShadow: "0 0 30px rgba(0,255,136,0.1)",
                borderColor: "rgba(0,255,136,0.3)",
              }}
              transition={{ duration: 0.3 }}
            >
              A passionate{" "}
              <span className="text-[#00FF88] font-semibold">
                Full Stack Developer
              </span>{" "}
              and{" "}
              <span className="text-[#00FF88] font-semibold">
                Machine Learning enthusiast
              </span>{" "}
              with a love for crafting clean, efficient, and scalable digital
              solutions. I specialize in React, Node.js, and Python — building
              experiences that blend aesthetics and performance.
            </motion.p>
          </motion.div>

          {/* Pills */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center md:justify-start gap-4 mt-2 flex-wrap"
          >
            {[
              "Full Stack Dev",
              "ML Enthusiast",
              "Software Engineer",
              "UI/UX Lover",
            ].map((pill, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 0 20px rgba(0,255,136,0.4)",
                  y: -5,
                }}
                transition={{
                  duration: 0.3,
                  delay: i * 0.1,
                }}
                className="px-5 py-3 bg-[#00FF88] bg-opacity-10 border border-[#00FF88] border-opacity-30 rounded-2xl text-sm text-black font-medium backdrop-blur-md hover:bg-opacity-20 transition-all duration-300 cursor-pointer relative overflow-hidden group"
              >
                <span className="relative z-10">{pill}</span>
                <motion.div
                  className="absolute inset-0 bg-[#00FF88] opacity-0 group-hover:opacity-10"
                  whileHover={{ opacity: 0.1 }}
                />
              </motion.span>
            ))}
          </motion.div>

          {/* Connect Button */}
          <motion.div variants={itemVariants} className="mt-8">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 40px rgba(0,255,136,0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="relative overflow-hidden bg-[#00FF88] text-black font-bold px-10 py-4 rounded-2xl w-fit mx-auto md:mx-0 group"
            >
              <span className="relative z-10 flex items-center gap-2">
                Connect with Me
                <motion.svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </motion.svg>
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
