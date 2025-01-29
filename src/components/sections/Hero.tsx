import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import profile from '../../assets/profile.png'

interface HeroProps {
  name?: string;
  title?: string;
  description?: string;
}

const Hero: React.FC<HeroProps> = ({
  name = "Rishikesh Pawar",
  title = "FullStack Developer",
  description = "Building modern web apps with React and Next.js, while exploring React Native to bring seamless experiences to mobile platforms.",
}) => {
  const words = title.split(" ");
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.12
      }
    }
  };
  
  const wordVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      rotateX: 90
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <AnimatePresence>
      <div id="home" className="relative bg-white pt-16 overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex min-h-[calc(100vh-4rem)] items-center justify-between gap-20">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="flex-1 flex flex-col items-center text-center lg:items-start lg:text-left"
            >
              <div className="w-full max-w-xl">
                {/* Name Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-4 relative"
                >
                  <h1 className="text-5xl font-bold text-gray-900 sm:text-6xl tracking-tight">
                    Hi, I'm
                  </h1>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative mt-2 text-5xl font-bold text-blue-600 sm:text-6xl tracking-tight"
                  >
                    {name}
                    <motion.span
                      className="absolute -bottom-1 left-0 w-full h-2 bg-blue-50 -z-10"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                    />
                  </motion.div>
                </motion.div>
  
                {/* Title Animation */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="mt-4 text-2xl font-bold text-gray-700 [perspective:1000px]"
                >
                  <div className="flex gap-x-3 justify-center lg:justify-start">
                    {words.map((word, index) => (
                      <motion.span
                        key={index}
                        variants={wordVariants}
                        className="inline-block"
                        style={{ backfaceVisibility: "hidden" }}
                      >
                        {word}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
  
                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="mt-6 text-lg text-gray-600 leading-relaxed"
                >
                  {description}
                </motion.p>
  
                {/* Resume Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  className="mt-12"
                >
                  <motion.a
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.2)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    href="https://drive.google.com/file/d/1tufhjm950JsDeDFfymsFZSiQZJkl1s7T/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-bold rounded-lg bg-gradient-to-r from-black to-gray-900 text-white shadow-md transition-all duration-300 ease-out hover:pl-10 hover:pr-6"
                  >
                    <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                    <span className="relative">Resume</span>
                    <svg
                      className="w-5 h-5 ml-2 transition-transform duration-300 ease-out transform translate-x-0 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
  
            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="hidden flex-1 lg:block"
            >
              <div className="relative h-[400px] w-[400px] max-w-md ml-auto">
                <img
                  src={profile}
                  alt="Profile"
                  className="h-full w-full rounded-full object-cover shadow-lg relative z-10"
                />
                {/* Subtle Background Circle */}
                <motion.div
                  className="absolute -bottom-6 -right-6 -z-10 h-full w-full rounded-full bg-blue-50"
                  animate={{
                    scale: [1, 1.03, 1],
                    rotate: [0, 2, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
}  
export default Hero;