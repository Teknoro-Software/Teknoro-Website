"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
import { Raleway } from "next/font/google";
import { Code, Cloud, Server, HardDrive, Shield, Zap } from "lucide-react";
import { useInView } from "framer-motion";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

type TechImage = {
  src: string;
  name: string;
  category: string;
};

const techStackFlat: TechImage[] = [
  { src: "/techStack/react.png", name: "React.js", category: "Frontend" },
  { src: "/techStack/next.png", name: "Next.js", category: "Frontend" },
  {
    src: "/techStack/typescript.png",
    name: "TypeScript",
    category: "Frontend",
  },
  {
    src: "/techStack/tailwind.png",
    name: "Tailwind CSS",
    category: "Frontend",
  },
  { src: "/techStack/html5.png", name: "HTML5", category: "Frontend" },
  { src: "/techStack/css3.png", name: "CSS3", category: "Frontend" },
  { src: "/techStack/node.png", name: "Node.js", category: "Backend" },
  { src: "/techStack/laravel.png", name: "Laravel", category: "Backend" },
  {
    src: "/techStack/reactnative.png",
    name: "React Native",
    category: "Mobile",
  }, // APIs & Tools
  { src: "/techStack/rest.png", name: "REST APIs", category: "APIs & Tools" },
  { src: "/techStack/postman.png", name: "Postman", category: "APIs & Tools" },
  { src: "/techStack/mysql.png", name: "MySQL", category: "Database" },
  { src: "/techStack/aws.png", name: "AWS", category: "Cloud" },
  { src: "/techStack/oauth.png", name: "OAuth 2.0", category: "Security" },
  { src: "/techStack/jwt.png", name: "JWT", category: "Security" },
];

const categoryMap: {
  [key: string]: { color: string; icon: React.ElementType };
} = {
  Frontend: { color: "border-red-500", icon: Code },
  Backend: { color: "border-green-500", icon: Server },
  Mobile: { color: "border-purple-500", icon: Zap },
  "APIs & Tools": { color: "border-yellow-500", icon: Server },
  Database: { color: "border-orange-500", icon: HardDrive },
  Cloud: { color: "border-cyan-500", icon: Cloud },
  Security: { color: "border-pink-500", icon: Shield },
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.3,
    },
  },
};

const hexTileVariants: Variants = {
  hidden: { opacity: 0, rotateZ: 90, scale: 0.5 },
  visible: {
    opacity: 1,
    rotateZ: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "backOut",
    },
  },
};

export default function TechnologyStack() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.2, once: true });

  return (
    <section
      className={`relative py-20 sm:py-28 bg-slate-900 overflow-hidden ${raleway.className}`}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(90deg, #3b82f610 1px, transparent 1px), linear-gradient(#3b82f610 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
      <div
        className="max-w-7xl mx-auto px-6 w-full relative z-10"
        ref={containerRef}
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-2">
            Our Technology Ecosystem
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white">
            The <span className="text-blue-400">Spectrum</span>
          </h2>
          <div className="text-sm text-gray-400 mt-3 max-w-2xl mx-auto">
            We build on a foundation of cutting-edge, interconnected
            technologies.
          </div>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center items-center gap-x-12 gap-y-16 lg:gap-x-16 lg:gap-y-20 p-4"
        >
          {techStackFlat.map((tech, idx) => {
            const { color } = categoryMap[tech.category];
            const isCenter = idx === 0;

            return (
              <motion.div
                key={tech.name}
                variants={hexTileVariants}
                whileHover={{
                  scale: 1.1,
                  z: 10,
                  rotate: 0,
                  boxShadow: `0 0 20px ${color
                    .replace("border-", "")
                    .replace("-500", "500")}`,
                }}
                className={`relative w-28 h-32 md:w-32 md:h-36 flex items-center justify-center p-1 cursor-pointer transition duration-300 bg-slate-800/80 ${color}
                    ${
                      isCenter
                        ? "z-20 scale-[1.05] shadow-xl shadow-blue-500/30"
                        : "z-10"
                    }
                `}
                style={{
                  clipPath:
                    "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  borderWidth: "2px",
                  borderColor: color.split("-")[1].replace("500", "400"),
                }}
              >
                <div className="flex flex-col items-center justify-center text-center w-full h-full relative z-10 p-2">
                  <div className="mb-2 flex-grow flex items-center justify-center">
                    <Image
                      src={tech.src}
                      alt={tech.name}
                      width={48}
                      height={48}
                      className="h-8 w-8 md:h-10 md:w-10 object-contain transition-all duration-300"
                    />
                  </div>
                  <p className="text-[10px] md:text-xs font-semibold text-gray-300 mt-1">
                    {tech.name}
                  </p>
                  <div
                    className={`mt-1 text-[8px] md:text-[9px] font-bold uppercase tracking-wider ${color.replace(
                      "border-",
                      "text-"
                    )}`}
                  >
                    {tech.category}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
