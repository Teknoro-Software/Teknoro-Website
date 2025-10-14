"use client";

import { motion, Variants } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { LuChevronsDown } from "react-icons/lu";

const Navbar = () => (
  <header className="absolute top-0 left-0 right-0 z-50 p-4 sm:p-6">
    <nav className="flex justify-between items-center max-w-7xl mx-auto">
      <div className="text-xl font-bold text-cyan-400">Teknoro</div>
      <div className="hidden sm:flex space-x-6 text-sm">
        <a href="#" className="hover:text-cyan-400 transition">
          Services
        </a>
        <a href="#" className="hover:text-cyan-400 transition">
          About
        </a>
        <a href="#" className="hover:text-cyan-400 transition">
          Contact
        </a>
      </div>
    </nav>
  </header>
);

type StarPosition = {
  x: number;
  y: number;
  scale: number;
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.5,
    },
  },
};

const titleWordVariants: Variants = {
  hidden: { opacity: 0, y: 50, rotateX: 90, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 20,
    },
  },
};

const textRevealVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.0,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: 1.8,
    },
  },
};

const buttonVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 20,
      delay: 2.5,
    },
  },
};

export default function Home() {
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { amount: 0.1, once: false });

  const [starPositions, setStarPositions] = useState<StarPosition[]>([]);
  const title = "Innovate. Integrate. Compute.";
  const titleWords = title.split(" ");

  useEffect(() => {
    const generateStars = () => {
      if (typeof window !== "undefined") {
        const w = window.innerWidth;
        const h = window.innerHeight;

        const newStars: StarPosition[] = Array.from({ length: 50 }).map(() => ({
          x: Math.random() * w,
          y: Math.random() * h,
          scale: Math.random() * 0.5 + 0.5,
        }));
        setStarPositions(newStars);
      }
    };

    generateStars();
  }, []);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap"
      />
      <section
        ref={heroRef}
        className={`relative min-h-screen flex flex-col items-center justify-center 
bg-[#0D1117] text-white px-4 sm:px-6 lg:px-8 overflow-hidden font-inter`}
      >
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: starPositions.length > 0 ? 0.2 : 0 }}
          transition={{ duration: 2 }}
          style={{
            backgroundImage:
              "radial-gradient(ellipse at bottom, rgba(30, 41, 59, 0.2) 0%, transparent 80%), linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)",
            backgroundSize: "200% 200%, 40px 40px, 40px 40px",
            backgroundPosition: isInView
              ? "50% 50%, 0 0, 0 0"
              : "0% 0%, 0 0, 0 0",
            filter: "brightness(0.8) contrast(1.2)",
          }}
        />
        <div className="absolute inset-0 z-[1] pointer-events-none">
          {starPositions.map((star, i) => (
            <motion.div
              key={i}
              className="absolute w-[2px] h-[2px] rounded-full bg-cyan-300 opacity-70"
              initial={{
                x: star.x,
                y: star.y,
                scale: star.scale,
              }}
              animate={{
                x: [null, star.x + (Math.random() - 0.5) * 100, star.x],
                y: [null, star.y + (Math.random() - 0.5) * 100, star.y],
                opacity: [0.7, 0.3, 0.7],
              }}
              transition={{
                duration: Math.random() * 8 + 5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>
        <div className="relative z-10 w-full max-w-6xl text-center space-y-10 pt-28">
          <motion.h1
            className="text-5xl sm:text-6xl md:text-8xl font-black leading-none tracking-tighter"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {titleWords.map((word, index) => (
              <span
                key={index}
                className="inline-block overflow-hidden mx-1 perspective"
              >
                <motion.span
                  variants={titleWordVariants}
                  className={
                    word === "Compute."
                      ? "bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 drop-shadow-[0_0_15px_rgba(0,255,255,0.7)]" // Stronger drop shadow
                      : "text-white"
                  }
                  style={{ display: "inline-block" }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </motion.h1>
          <motion.p
            variants={textRevealVariants}
            initial="hidden"
            animate="visible"
            className="text-base sm:text-lg md:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed px-4"
          >
            <span className="font-semibold text-white">
              Teknoro Software Solutions Private Limited
            </span>{" "}
            is dedicated to precision IT service delivery. We forge deep
            partnerships with our clients, translating complex challenges into
            clear, custom-built, and scalable technology solutions.
          </motion.p>
          <motion.button
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 20px rgba(0,255,255,0.8)",
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 px-10 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold rounded-full 
shadow-lg shadow-cyan-600/50 transition-all duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10">Explore Our Services</span>
            <span
              className="absolute inset-0 bg-white opacity-20 transform 
scale-x-0 group-hover:scale-x-100 transition-transform 
 duration-500 origin-left ease-out"
            ></span>
          </motion.button>
        </div>
      </section>{" "}
      {/* Floating Scroll Indicator - Subtle Blinking and Bouncing */}
      {/* <motion.a
        href="#who"
        className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <motion.div
          animate={{
            y: [0, -8, 0], // Gentle bounce, slightly larger
            opacity: [1, 0.4, 1], // More pronounced blink
            scale: [1, 1.1, 1], // Subtle scale pulse
          }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }} // Slightly longer, more fluid
        >
          <LuChevronsDown
            className="text-cyan-400"
            style={{
              fontSize: "2.8rem", // Slightly larger icon
              filter: "drop-shadow(0 0 10px rgba(0, 255, 255, 0.8))", // Stronger, crisper shadow
            }}
          />
        </motion.div>
      </motion.a> */}
         {" "}
    </>
  );
}
