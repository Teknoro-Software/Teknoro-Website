"use client";

import { motion, Variants, TargetAndTransition } from "framer-motion";
import { Raleway } from "next/font/google";
import { useRef } from "react";
import { useInView } from "framer-motion";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaUsers,
  FaCloud,
  FaStream,
  FaChartLine,
} from "react-icons/fa";
import { Laptop } from "lucide-react";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});

type Service = {
  title: string;
  description: string;
  icon: React.ElementType;
  accentColor: string;
};

const services: Service[] = [
  {
    title: "MLM Software Development",
    description:
      "Building robust, secure, and customizable platforms with precision compensation logic and seamless wallet management.",
    icon: FaUsers,
    accentColor: "text-emerald-400",
  },
  {
    title: "Web Development",
    description:
      "Crafting high-performance, scalable web applications and intuitive interfaces using Next.js, React, and modern full-stack architecture.",
    icon: FaLaptopCode,
    accentColor: "text-red-400",
  },

  {
    title: "Mobile Development",
    description:
      "Delivering native and cross-platform apps for iOS and Android, focusing on superior UX, performance, and API integration.",
    icon: FaMobileAlt,
    accentColor: "text-purple-400",
  },
  {
    title: "Cloud Integrations (IaaS/PaaS)",
    description:
      "Expert setup and maintenance of secure Cloud Infrastructure for Banks and Financial Institutions, covering IaaS, PaaS, and SaaS environments.",
    icon: FaCloud,
    accentColor: "text-indigo-400",
  },
  {
    title: "Event Streaming Solutions",
    description:
      "Specializing in technologies like Apache Kafka and Oracle Streaming to build scalable, event-driven systems with real-time analytics.",
    icon: FaStream,
    accentColor: "text-yellow-400",
  },
  {
    title: "Observability & Analytics",
    description:
      "Actionable insights, real-time monitoring, and log analysis powered by Oracle Analytics and the ELK Stack for system health.",
    icon: FaChartLine,
    accentColor: "text-pink-400",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const tileVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const tileHover: TargetAndTransition = {
  y: -8,
  scale: 1.02,
  rotateX: 1.5,
  boxShadow: "0 15px 30px rgba(0, 0, 0, 0.4)",
  transition: { type: "spring", stiffness: 350, damping: 25 },
};

export default function Services() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.1, once: true });

  return (
    <section
      className={`${raleway.className} relative py-20 sm:py-28 bg-slate-900 overflow-hidden`}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
                        radial-gradient(circle at 50% 50%, rgba(60, 150, 250, 0.1) 0%, transparent 40%),
                        repeating-linear-gradient(45deg, #1f2937 0 1px, transparent 1px, transparent 20px)
                    `,
          backgroundSize: "40px 40px",
        }}
      />

      <div
        className="max-w-7xl mx-auto px-6 w-full relative z-10"
        ref={containerRef}
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 text-center">
          What We <span className="text-blue-400">Build.</span>
        </h2>
        <div className="h-1 bg-blue-500 rounded-full mb-16 w-[150px] mx-auto"></div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={tileVariants}
                whileHover={tileHover}
                className="relative bg-slate-800/90 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-slate-700/50 cursor-pointer"
                style={{
                  transformStyle: "preserve-3d",
                  transformOrigin: "bottom center",
                }}
              >
                <div
                  className={`p-4 rounded-full w-fit mb-6 ${service.accentColor.replace(
                    "text-",
                    "bg-"
                  )} bg-opacity-20`}
                >
                  <Icon className={`w-10 h-10 ${service.accentColor}`} />
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">
                  {service.title}
                </h3>

                <p className="text-base leading-relaxed text-gray-400 mb-6 min-h-[70px]">
                  {service.description}
                </p>

                <div className="text-blue-400 font-semibold flex items-center transition-colors hover:text-blue-300">
                  Discover More
                  <FaLaptopCode
                    size={16}
                    className="ml-2"
                    style={{ transform: "rotate(-45deg)" }}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
