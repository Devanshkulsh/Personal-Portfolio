import { motion } from "framer-motion";
import Navbar from "./Navbar";
import TextType from "../ui/TextType";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-screen min-h-screen flex items-center justify-center font-[Inter] overflow-hidden"
      style={{
        backgroundImage: "url('/assets/hero/space_bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      <Navbar />

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl px-6 md:px-12 gap-16 md:gap-24 py-20">
        {/* Left Content */}
        <div className="flex flex-col gap-6 text-white md:w-1/2 text-center md:text-left">
          {/* Tag */}
          <div className="inline-block bg-[#00FF88] text-black px-4 py-2 rounded-md text-sm font-medium w-fit mx-auto md:mx-0">
            Welcome to my Portfolio
          </div>

          {/* Heading */}
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Hi! I'm <span className="text-[#00FF88]">Devansh</span> —{" "}
            <TextType
              text={[
                "Web Developer",
                "Full Stack Developer",
                "Software Engineer",
              ]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
            />
          </h1>

          {/* Paragraph */}
          <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-md md:max-w-none mx-auto md:mx-0">
            Hi, I’m Devansh — a Full Stack Developer and Machine Learning
            enthusiast who loves building smart, scalable, and user-friendly
            digital experiences. I enjoy turning ideas into real-world solutions
            using React, Node.js, Python, and TensorFlow.
          </p>

          {/* Button */}
          <button
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="bg-[#00FF88] hover:bg-[#00CC6A] text-black font-semibold px-6 py-3 rounded-lg w-fit shadow-[0_0_20px_rgba(0,255,136,0.4)] transition mx-auto md:mx-0"
          >
            Let's Connect
          </button>
        </div>

        {/* Right Image (hidden on mobile) */}
        <div className="hidden md:flex justify-center md:justify-end md:w-1/2">
          <motion.img
            src="/assets/hero/astronaut_3D.png"
            alt="Devansh"
            className="w-72 sm:w-80 md:w-md lg:w-lg xl:w-xl object-contain drop-shadow-[0_0_25px_rgba(0,255,136,0.25)]"
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeIn" }}
            whileHover={{ scale: 1.03 }}
            whileInView={{
              y: [0, -10, 0],
              transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
