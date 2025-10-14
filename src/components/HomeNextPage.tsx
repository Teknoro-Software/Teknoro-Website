"use client";

import {
  motion,
  useScroll,
  useTransform,
  useInView,
  Variants,
} from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Raleway } from "next/font/google";
import { FiArrowDownCircle } from "react-icons/fi";

const raleway = Raleway({
  subsets: ["latin"],
  weight: "800",
});

export default function HomeNextPage() {
  const [hasScrolled, setHasScrolled] = useState(false);

  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { amount: 0.1, once: false });

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const backgroundPosition = useTransform(
    scrollYProgress,
    [0, 1],
    ["0% 0%", "50% 50%"]
  );

  const headlineY = useTransform(scrollYProgress, [0, 1], ["0vh", "-30vh"]);
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headline = [
    "Empowering enterprises with future-ready innovation",
    "seamless integration, and intelligent computing solutions—",
    "delivering reliable technology expertise that drives business performance.",
  ];

  const lineContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.005,
        delayChildren: 0.5,
      },
    },
  };

  const charVariants: Variants = {
    hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.4,
        ease: [0.17, 0.67, 0.83, 0.99],
      },
    },
  };

  return (
    <section
      ref={heroRef}
      className="
        relative
        h-[150vh] min-h-[900px] // Made section taller to enable parallax scroll
        px-6 sm:px-8 md:px-10 lg:px-16 xl:px-24
        flex flex-col 
        justify-start // Align content at the top
        overflow-hidden
        text-white // Default text color is white for dark theme
      "
    >
      <motion.div
        className="absolute inset-0 -z-10"
        style={{
          background: "linear-gradient(135deg, #090e11, #10161d, #0c151a)",
          backgroundSize: "200% 200%",
          backgroundPosition,
        }}
      />

      <motion.div
        className="sticky top-0 w-full max-w-7xl flex flex-col justify-center h-screen mx-auto pointer-events-none"
        style={{ y: headlineY, opacity: headlineOpacity }}
      >
        <h1
          className={`${raleway.className} 
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
            flex flex-col leading-tight tracking-tighter
            text-center
            px-2 sm:px-0
          `}
        >
          {headline.map((line, i) => (
            <motion.div
              key={i}
              className="flex flex-wrap justify-center overflow-hidden"
              variants={lineContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.8 }}
            >
              {line.split(" ").map((word, wIndex) => (
                <span key={wIndex} className="mr-4 sm:mr-6 my-2">
                  {word.split("").map((char, cIndex) => (
                    <motion.span
                      key={cIndex}
                      className="inline-block relative 
                        // Highlighting key words with gradient
                        text-transparent bg-clip-text
                        bg-gradient-to-br from-gray-200 via-gray-50 to-cyan-200
                        hover:from-cyan-300 hover:to-white transition-colors duration-500
                      "
                      variants={charVariants}
                    >
                      {char}
                    </motion.span>
                  ))}
                  <span className="inline-block">&nbsp;</span>
                </span>
              ))}
            </motion.div>
          ))}
        </h1>
      </motion.div>

      {/* 3. Fixed Scroll-down Icon - Animated Pulse and Fade */}
      {/* <motion.a
        href="#next-section" // Link to the next section ID
        className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 10 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <motion.div
          animate={{
            y: [0, -8, 0], // Gentle bounce
            opacity: [1, 0.5, 1], // Subtle pulse
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <FiArrowDownCircle
            className="text-cyan-400 hover:text-cyan-300 transition-colors"
            style={{
              fontSize: "3.5rem",
              filter: "drop-shadow(0 0 12px rgba(0, 255, 255, 0.4))", // Stronger glow
            }}
          />
        </motion.div>
      </motion.a> */}

      {/* Filler div to push scroll to the next section */}
    </section>
  );
}
