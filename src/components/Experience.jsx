// Experience.jsx
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Bike, Car, Circle, Rocket, Calendar, ArrowRight } from "lucide-react";

const Experience = () => {
  const containerRef = useRef(null);
  const timelineRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Timeline vehicle movement - adjust range for proper movement
  const vehicleY = useTransform(scrollYProgress, [0, 1], ["5%", "95%"]);

  // Image opacity ranges - adjusted for smoother transitions
  const cycleOpacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.2, 0.25],
    [0, 1, 1, 0]
  );
  const bikeOpacity = useTransform(
    scrollYProgress,
    [0.25, 0.35, 0.45, 0.5],
    [0, 1, 1, 0]
  );
  const carOpacity = useTransform(
    scrollYProgress,
    [0.5, 0.6, 0.7, 0.75],
    [0, 1, 1, 0]
  );
  const rocketOpacity = useTransform(
    scrollYProgress,
    [0.75, 0.85, 0.9, 1],
    [0, 1, 1, 0]
  );

  const timelineItems = [
    {
      year: "2010-2014",
      title: "Learning to Ride",
      icon: <Circle className="w-5 h-5" />,
      description: "Mastered the art of balance on two wheels",
      color: "#00FF88",
      achievements: ["First cycle", "Neighborhood explorer"],
    },
    {
      year: "2015-2018",
      title: "Speed & Freedom",
      icon: <Bike className="w-5 h-5" />,
      description: "Graduated to motorcycles",
      color: "#00CC6A",
      achievements: ["First bike", "Long rides"],
    },
    {
      year: "2019-2022",
      title: "Professional Journey",
      icon: <Car className="w-5 h-5" />,
      description: "Career & responsibility",
      color: "#00994D",
      achievements: ["First car", "Daily commute"],
    },
    {
      year: "2023-Present",
      title: "Coming Soon...",
      icon: <Rocket className="w-5 h-5" />,
      description: "Next level begins",
      color: "#006633",
      achievements: ["Future loading"],
    },
  ];

  const [activeVehicle, setActiveVehicle] = useState(0);

  useEffect(() => {
    const unsub = scrollYProgress.on("change", (v) => {
      if (v < 0.25) setActiveVehicle(0);
      else if (v < 0.5) setActiveVehicle(1);
      else if (v < 0.75) setActiveVehicle(2);
      else setActiveVehicle(3);
    });
    return () => unsub();
  }, [scrollYProgress]);

  // Vehicle names for display
  const vehicleNames = ["Cycle", "Bike", "Car", "Coming Soon"];

  return (
    <section
      ref={containerRef}
      id="experience"
      className="relative w-full min-h-screen bg-[#020202] py-20 px-6 md:px-16 overflow-hidden"
    >
      {/* Background Glow Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00FF88] rounded-full blur-[160px] opacity-5" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00CC6A] rounded-full blur-[160px] opacity-5" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-bold bg-linear-to-r from-[#00FF88] via-[#00CC6A] to-[#00FF88] bg-clip-text text-transparent mb-6">
            Journey Through Time
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Scroll to travel through different phases of my journey
          </p>
        </motion.div>

        {/* Current Vehicle Display */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h3
            key={activeVehicle}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="text-3xl md:text-4xl font-bold mb-2"
            style={{ color: timelineItems[activeVehicle].color }}
          >
            {vehicleNames[activeVehicle]} Era
          </motion.h3>
          <p className="text-gray-400">
            {timelineItems[activeVehicle].description}
          </p>
        </motion.div>

        {/* Vehicle Indicators */}
        <div className="flex justify-center gap-4 md:gap-8 mb-16">
          {timelineItems.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                const section = containerRef.current;
                const scrollHeight = section.offsetHeight;
                const targetScroll =
                  section.offsetTop + index * 0.25 * scrollHeight;
                window.scrollTo({
                  top: targetScroll,
                  behavior: "smooth",
                });
              }}
              className={`flex flex-col items-center p-4 rounded-xl transition-all duration-300 ${
                activeVehicle === index
                  ? "bg-black/50 border-2 scale-110"
                  : "bg-black/30 border border-transparent hover:bg-black/40"
              }`}
              style={{
                borderColor:
                  activeVehicle === index ? item.color : "transparent",
                boxShadow:
                  activeVehicle === index ? `0 0 20px ${item.color}40` : "none",
              }}
            >
              <div className="w-10 h-10 flex items-center justify-center mb-2">
                {item.icon}
              </div>
              <span className="text-sm font-medium text-white">
                {vehicleNames[index]}
              </span>
            </button>
          ))}
        </div>

        {/* TIMELINE */}
        <div ref={timelineRef} className="relative h-[900px] md:h-[1000px]">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#00FF88] via-[#00CC6A] to-[#006633]" />

          {/* Glow Effect on Line */}
          <div className="absolute left-1/2 -translate-x-1/2 w-3 h-full bg-gradient-to-b from-[#00FF88]/20 via-[#00CC6A]/20 to-[#006633]/20 blur-sm" />

          {/* MOVING VEHICLE IMAGES - Centered on line */}
          <motion.div
            className="absolute left-1/2 z-30"
            style={{
              y: vehicleY,
              top: "0%",
            }}
          >
            {/* Container for all images - Increased size */}
            <div className="relative -translate-x-1/2 -translate-y-1/2">
              {/* Cycle Image */}
              <motion.div
                className="absolute"
                style={{ opacity: cycleOpacity }}
              >
                <div className="w-40 h-40 md:w-56 md:h-56 bg-[#00FF88]/10 rounded-full border-4 border-[#00FF88]/30 flex items-center justify-center p-4 backdrop-blur-sm">
                  {/* Replace with your image */}
                  <div className="text-center">
                    <img
                      src="/assets/experience/cycle.webp"
                      alt="Cycle"
                      className="w-full h-full object-contain"
                    />
                    <p className="text-[#00FF88] text-sm mt-2">Cycle</p>
                  </div>
                </div>
              </motion.div>

              {/* Bike Image */}
              <motion.div className="absolute" style={{ opacity: bikeOpacity }}>
                <div className="w-40 h-40 md:w-56 md:h-56 bg-[#00CC6A]/10 rounded-full border-4 border-[#00CC6A]/30 flex items-center justify-center p-4 backdrop-blur-sm">
                  <div className="text-center">
                    <img
                      src="/assets/experience/bike.webp"
                      alt="Cycle"
                      className="w-full h-full object-contain"
                    />
                    <p className="text-[#00CC6A] text-sm mt-2">Bike</p>
                  </div>
                </div>
              </motion.div>

              {/* Car Image */}
              <motion.div className="absolute" style={{ opacity: carOpacity }}>
                <div className="w-40 h-40 md:w-56 md:h-56 bg-[#00994D]/10 rounded-full border-4 border-[#00994D]/30 flex items-center justify-center p-4 backdrop-blur-sm">
                  <div className="text-center">
                    <img
                      src="/assets/experience/car.webp"
                      alt="Cycle"
                      className="w-full h-full object-contain"
                    />
                    <p className="text-[#00994D] text-sm mt-2">Car</p>
                  </div>
                </div>
              </motion.div>

              {/* Rocket/Coming Soon Image */}
              <motion.div
                className="absolute"
                style={{ opacity: rocketOpacity }}
              >
                <div className="w-40 h-40 md:w-56 md:h-56 bg-[#006633]/10 rounded-full border-4 border-[#006633]/30 flex items-center justify-center p-4 backdrop-blur-sm">
                  <div className="text-center">
                    <Rocket className="w-32 h-32 text-[#006633]" />
                    <p className="text-[#006633] text-sm mt-2">Coming Soon</p>
                  </div>
                </div>
              </motion.div>

              {/* Connection dot to timeline */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[#00FF88] rounded-full border-4 border-black z-10" />
            </div>
          </motion.div>

          {/* TIMELINE ITEMS */}
          {timelineItems.map((item, index) => (
            <div
              key={index}
              className="absolute left-1/2 -translate-x-1/2"
              style={{ top: `${index * 25 + 12.5}%` }}
            >
              {/* Timeline Node */}
              <div
                className="w-12 h-12 rounded-full border-4 border-black flex items-center justify-center z-20 relative"
                style={{ backgroundColor: item.color }}
              >
                {item.icon}

                {/* Node Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2"
                  style={{ borderColor: item.color }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>

              {/* Content Card */}
              <div
                className={`absolute top-1/2 -translate-y-1/2 ${
                  index % 2 === 0 ? "right-24" : "left-24"
                } w-80 md:w-96`}
              >
                <motion.div
                  className="bg-linear-to-br from-black/60 to-[#001a0d]/80 backdrop-blur-xl border rounded-2xl p-6"
                  style={{ borderColor: `${item.color}40` }}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -5,
                    boxShadow: `0 20px 40px ${item.color}20`,
                    borderColor: `${item.color}60`,
                  }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar
                      className="w-4 h-4"
                      style={{ color: item.color }}
                    />
                    <span
                      className="text-sm font-semibold"
                      style={{ color: item.color }}
                    >
                      {item.year}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{item.description}</p>

                  <div className="space-y-2">
                    {item.achievements.map((achievement, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-gray-400"
                      >
                        <div
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: item.color }}
                        />
                        <span className="text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="text-center mt-20"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="inline-flex items-center gap-3 text-[#00FF88]">
            <span className="text-sm font-medium">
              Keep scrolling to continue the journey
            </span>
            <ArrowRight className="w-5 h-5" />
          </div>
        </motion.div>

        {/* Floating Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#00FF88] rounded-full"
            style={{
              left: `${10 + i * 10}%`,
              top: `${20 + i * 8}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.sin(i) * 20, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;
