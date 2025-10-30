import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuVariants = {
    hidden: { x: "-100%" },
    visible: {
      x: 0,
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
    exit: {
      x: "-100%",
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  const menuItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "Contact", id: "contact" },
  ];

  // Smooth scroll handler
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-6 py-4 md:px-12 font-[Inter] transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      {/* When NOT scrolled (top of page) */}
      {!scrolled && (
        <div className="flex items-center justify-between">
          <button
            onClick={() => setIsOpen(true)}
            className="text-[#00FF88] hover:text-[#00CC6A] transition"
          >
            <Menu size={30} />
          </button>
        </div>
      )}

      {/* When scrolled down (show horizontal nav) */}
      {scrolled && (
        <div className="flex items-center justify-between">
          {/* Hide DK logo on mobile */}
          <h2 className="hidden sm:block text-[#00FF88] font-bold text-xl">
            DK
          </h2>

          <ul className="flex gap-4 sm:gap-6 mx-auto sm:mx-0">
            {menuItems.map((item, index) => (
              <motion.li
                key={index}
                className="text-white text-sm sm:text-base font-medium cursor-pointer relative"
                whileHover={{ scale: 1.1 }}
                onClick={() => handleScroll(item.id)}
              >
                <span className="hover:text-[#00FF88] transition-colors duration-300">
                  {item.name}
                </span>
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-[#00FF88]"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.li>
            ))}
          </ul>
        </div>
      )}

      {/* Slide-in mobile menu (only when at top) */}
      <AnimatePresence>
        {isOpen && !scrolled && (
          <motion.div
            className="fixed top-0 left-0 w-3/4 sm:w-2/5 md:w-1/3 h-full bg-black/90 backdrop-blur-md shadow-xl flex flex-col justify-between p-8 z-50"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Close Button */}
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-[#00FF88] text-xl font-bold tracking-wide">
                DK
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-[#00FF88] transition"
              >
                <X size={28} />
              </button>
            </div>

            {/* Menu Links */}
            <ul className="flex flex-col gap-6">
              {menuItems.map((item, index) => (
                <motion.li
                  key={index}
                  className="relative text-white text-lg font-medium cursor-pointer w-fit"
                  whileHover={{
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                  onClick={() => handleScroll(item.id)}
                >
                  <span className="hover:text-[#00FF88] transition-colors duration-300">
                    {item.name}
                  </span>
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-[#00FF88]"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.li>
              ))}
            </ul>

            {/* Footer */}
            <div className="text-gray-400 text-sm mt-10">
              <p>© 2025 Devansh Kulshreshtha — All Rights Reserved</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
