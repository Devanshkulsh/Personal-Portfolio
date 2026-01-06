// Contact.jsx
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  Instagram,
  Facebook,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { useRef, useState } from "react";

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      .then(
        () => {
          alert("Message sent successfully! 🚀");
          form.current.reset();
          setIsSubmitting(false);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("Failed to send message ❌");
          setIsSubmitting(false);
        }
      );
  };

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Devanshkulsh",
      label: "GitHub",
      color: "hover:text-gray-300",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/devansh1308",
      label: "LinkedIn",
      color: "hover:text-blue-400",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/devansh1308",
      label: "Instagram",
      color: "hover:text-pink-400",
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com/devansh.kulshreshtha.7",
      label: "Facebook",
      color: "hover:text-blue-500",
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      text: "devkulsh1308@gmail.com",
      href: "mailto:devkulsh1308@gmail.com",
    },
    {
      icon: MapPin,
      text: "Ghaziabad, India",
      href: "https://maps.app.goo.gl/E47tB1PyQRnGHXx16",
    },
  ];

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

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen bg-[#020202] py-20 px-6 md:px-16 font-[Inter] overflow-hidden flex items-center"
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-linear-to-br from-[#000000] via-[#001a0d] to-[#003320]" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Glow Effects */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00FF88] rounded-full blur-[160px] opacity-15"
          animate={{
            y: [0, 50, 0],
            x: [0, 25, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#00CC6A] rounded-full blur-[140px] opacity-10"
          animate={{
            y: [0, -40, 0],
            x: [0, -20, 0],
            opacity: [0.08, 0.18, 0.08],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-[#00FF88] rounded-full"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + i * 10}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.sin(i) * 70, 0],
              opacity: [0, 0.8, 0],
              scale: [0, 1.2, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8 + i * 1.5,
              repeat: Infinity,
              delay: i * 0.6,
            }}
          />
        ))}

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-linear(#00FF88 1px, transparent 1px),
                               linear-linear(90deg, #00FF88 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Enhanced Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-5xl md:text-7xl font-bold bg-linear-to-r from-[#00FF88] via-[#00CC6A] to-[#00FF88] bg-clip-text text-transparent mb-6"
            whileHover={{ scale: 1.02 }}
          >
            Let's Connect
            <motion.div
              className="h-1.5 bg-linear-to-r from-[#00FF88] to-[#00CC6A] rounded-full mt-4 mx-auto max-w-64"
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
            Ready to bring your ideas to life? Let's create something{" "}
            <span className="text-[#00FF88] font-semibold">extraordinary</span>{" "}
            together!
          </motion.p>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Left Side - Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Contact Card */}
            <motion.div
              className="bg-linear-to-br from-black/60 to-[#001a0d]/80 border border-[#00FF88]/30 rounded-3xl p-8 backdrop-blur-xl shadow-2xl"
              whileHover={{
                y: -5,
                boxShadow: "0 25px 50px rgba(0,255,136,0.15)",
                borderColor: "rgba(0,255,136,0.5)",
              }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-2xl md:text-3xl font-semibold text-[#00FF88] mb-6 flex items-center gap-3">
                <div className="w-3 h-3 bg-[#00FF88] rounded-full animate-pulse" />
                Get In Touch 📞
              </h3>

              <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                I'm always excited to discuss new projects, creative ideas, or
                opportunities to be part of your vision. Let's make something
                amazing happen!
              </p>

              {/* Contact Details */}
              <div className="space-y-4 mb-8">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-[#00FF88]/5 transition-all duration-300 group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="p-2 bg-[#00FF88]/10 rounded-lg group-hover:bg-[#00FF88]/20 transition-colors">
                      <item.icon className="text-[#00FF88] w-5 h-5" />
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors">
                      {item.text}
                    </span>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold text-[#00FF88] mb-4">
                  Follow Me
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className={`p-3 bg-[#00FF88]/10 rounded-xl backdrop-blur-sm border border-[#00FF88]/20 ${social.color} transition-all duration-300 group`}
                      whileHover={{
                        scale: 1.1,
                        y: -3,
                        backgroundColor: "rgba(0,255,136,0.15)",
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="w-6 h-6 text-[#00FF88]" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Corner Accents */}
              <div className="absolute top-4 right-4 w-3 h-3 border-t border-r border-[#00FF88] opacity-60 rounded-tr-lg" />
              <div className="absolute bottom-4 left-4 w-3 h-3 border-b border-l border-[#00FF88] opacity-60 rounded-bl-lg" />
            </motion.div>

            {/* Availability Status */}
            <motion.div
              className="bg-linear-to-br from-black/50 to-[#001a0d]/60 border border-[#00FF88]/20 rounded-2xl p-6 backdrop-blur-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 bg-[#00FF88] rounded-full animate-pulse" />
                <span className="text-[#00FF88] font-semibold">
                  Currently Available
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                Open for new projects and collaborations
              </p>
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div variants={itemVariants} className="relative">
            <motion.div
              className="bg-linear-to-br from-black/60 to-[#001a0d]/80 border border-[#00FF88]/30 rounded-3xl p-8 md:p-10 backdrop-blur-xl shadow-2xl"
              whileHover={{
                boxShadow: "0 30px 60px rgba(0,255,136,0.2)",
                borderColor: "rgba(0,255,136,0.4)",
              }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-2xl md:text-3xl font-semibold text-[#00FF88] mb-2 flex items-center gap-3">
                <Send className="w-7 h-7" />
                Send Message
              </h3>
              <p className="text-gray-400 mb-8">Let's start a conversation!</p>

              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Your Full Name"
                    required
                    className="w-full bg-black/30 border border-[#00FF88]/30 rounded-xl px-5 py-4 text-white placeholder-gray-400 focus:border-[#00FF88] focus:bg-black/50 outline-none transition-all duration-300 backdrop-blur-sm"
                  />
                </motion.div>

                {/* Email Field */}
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <input
                    type="email"
                    name="user_email"
                    placeholder="your.email@example.com"
                    required
                    className="w-full bg-black/30 border border-[#00FF88]/30 rounded-xl px-5 py-4 text-white placeholder-gray-400 focus:border-[#00FF88] focus:bg-black/50 outline-none transition-all duration-300 backdrop-blur-sm"
                  />
                </motion.div>

                {/* Message Field */}
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <textarea
                    name="message"
                    placeholder="Tell me about your project, ideas, or just say hello! 🌟"
                    rows="6"
                    required
                    className="w-full bg-black/30 border border-[#00FF88]/30 rounded-xl px-5 py-4 text-white placeholder-gray-400 focus:border-[#00FF88] focus:bg-black/50 outline-none transition-all duration-300 resize-none backdrop-blur-sm"
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(0,255,136,0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-linear-to-r from-[#00FF88] to-[#00CC6A] text-black font-bold py-4 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 group"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-5 h-5 border-2 border-black border-t-transparent rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </motion.button>
              </form>

              {/* Form Corner Accents */}
              <div className="absolute top-4 left-4 w-3 h-3 border-t border-l border-[#00FF88] opacity-60 rounded-tl-lg" />
              <div className="absolute bottom-4 right-4 w-3 h-3 border-b border-r border-[#00FF88] opacity-60 rounded-br-lg" />
            </motion.div>

            {/* Floating Decorative Element */}
            <motion.div
              className="absolute -top-4 -right-4 w-8 h-8 bg-[#00FF88] rounded-full blur-sm opacity-20"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>

        {/* Bottom Decorative Element */}
        <motion.div
          className="flex justify-center gap-3 mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1.5 h-1.5 bg-[#00FF88] rounded-full"
              animate={{
                scale: [1, 1.8, 1],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
