"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { Raleway } from "next/font/google";
import { Zap, Code, Globe } from "lucide-react";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const textVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, rotateY: 90, scale: 0.8 },
  visible: {
    opacity: 1,
    rotateY: 0,
    scale: 1,
    transition: { duration: 1, ease: "backOut" },
  },
};

export default function About() {
  const companyName = "Teknoro Software Solutions Private Limited";

  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={`relative bg-gray-950 py-20 sm:py-28 overflow-hidden ${raleway.className}`}
    >
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(90deg, #3b82f610 1px, transparent 1px), linear-gradient(#3b82f610 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="max-w-xl mx-auto md:mx-0">
          <motion.p
            variants={textVariants}
            className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-2"
          >
            Our Foundation
          </motion.p>
          <motion.h2
            variants={textVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4"
          >
            About <span className="text-blue-400">Teknoro</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.2 }}
            className="h-1 bg-blue-400 rounded-full mb-8"
          ></motion.div>

          <motion.p
            variants={textVariants}
            className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6"
          >
            **{companyName}** is a cutting-edge, new age technology solutions
            company that specialises in delivering robust and scalable solutions
            to meet the evolving needs of modern businesses.
          </motion.p>

          <motion.p
            variants={textVariants}
            className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6"
          >
            Our team brings over **20 years of collective experience** across
            key sectors including **Banking, Insurance, Logistics, and Health**,
            with a strong specialized focus on Banking and Financial Technology
            (FinTech).
          </motion.p>

          <motion.div
            variants={textVariants}
            className="p-4 border border-blue-600/50 bg-slate-800/60 rounded-lg"
          >
            <p className="text-sm font-bold text-blue-400 mb-2 flex items-center">
              <Code className="w-4 h-4 mr-2" /> CORE EXPERTISE
            </p>
            <p className="text-xs text-gray-400">
              Oracle APEX, OCI, Microservices, Kubernetes, AWS, Event Streaming,
              DevOps, Observability, Payments & Collections, and Loan Management
              Systems (LMS).
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={cardVariants}
          className="flex justify-center md:justify-end perspective-1000"
        >
          <motion.div
            whileHover={{
              rotateY: 3,
              rotateX: 2,
              scale: 1.05,
              boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.5)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg overflow-hidden rounded-xl border-4 border-blue-600/30 shadow-2xl bg-slate-800"
          >
            <Image
              src="/aboutus.png"
              alt="Team of Teknoro Software Solutions Private Limited working on digital innovation"
              width={500}
              height={500}
              priority
              className="object-cover w-full h-auto"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 500px"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
