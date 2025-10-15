"use client";

import { motion, Variants, TargetAndTransition } from "framer-motion";
import { Raleway, Merriweather } from "next/font/google";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { IoDiamondOutline, IoSyncOutline } from "react-icons/io5";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: "300",
  style: "italic",
});

const wipeReveal: Variants = {
  hidden: { scaleX: 1, originX: 0 },
  visible: {
    scaleX: 0,
    originX: 0,
    transition: {
      duration: 1.2,
      ease: [0.83, 0, 0.17, 1],
      delay: 0.2,
    },
  },
};

const contentScaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 0.5,
    },
  },
};

const cardHover: TargetAndTransition = {
  y: -5,
  boxShadow: "0 10px 20px rgba(13, 100, 185, 0.2)",
  transition: { type: "spring", stiffness: 350, damping: 30 },
};

export default function WhoWeAreSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.2, once: true });

  // --- MLM-FOCUSED CONTENT ---
  const bulletPoints = [
    {
      text: "Flawless Commission Logic",
      sub: "Handling all Matrix, Binary, Unilevel, and Hybrid plan calculations with 100% accuracy.",
    },
    {
      text: "Global Scalability & Security",
      sub: "Infrastructure designed for millions of distributors and iron-clad financial data protection.",
    },
    {
      text: "Custom Distributor Portals",
      sub: "Providing personalized dashboards, training tools, and e-commerce integration for growth.",
    },
  ];

  const mission =
    "To be the **trusted technological backbone** for network marketing companies, providing intuitive, precise, and infinitely scalable software solutions that drive distributor success and organizational integrity.";
  const vision =
    "To redefine the global MLM landscape by setting a new standard for software precision, user experience, and ethical transparency, making every commission accurate and every growth metric traceable.";
  // ---------------------------

  return (
    <section
      className={`bg-white relative overflow-hidden ${raleway.className}`}
    >
      <div
        ref={containerRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          variants={contentScaleUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-12 sm:gap-16 relative z-10 py-16 sm:py-24"
        >
          <div className="space-y-10">
            {/* Updated Heading for MLM Focus */}
            <h2 className="text-5xl lg:text-6xl font-black text-slate-900 leading-tight">
              Our <span className="text-blue-500">MLM</span> Blueprint
            </h2>
            <h3 className="text-2xl font-semibold text-gray-700">
              <span
                className={`${merriweather.className} italic font-light text-blue-500`}
              >
                Building
              </span>{" "}
              Trust and Growth, Commission by Commission.
            </h3>
            <ul className="list-none space-y-4 pl-0">
              {bulletPoints.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.15 }}
                  className="flex items-start text-gray-700"
                >
                  <IoDiamondOutline className="w-5 h-5 mr-3 mt-1 text-blue-500 flex-shrink-0" />

                  <span className="text-base font-medium">
                    <strong className="font-bold text-slate-800">
                      {item.text}
                    </strong>{" "}
                    — {item.sub}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-8 pt-4">
            <motion.div
              whileHover={cardHover}
              className="relative bg-white border border-gray-100 rounded-lg shadow-md p-6 lg:p-8 cursor-pointer hover:border-blue-400 transition duration-200"
            >
              <IoSyncOutline className="absolute top-5 right-5 w-8 h-8 text-blue-500/10" />
              <h4 className="text-xl font-bold text-blue-600 mb-3">
                Our Mission: Trust and Precision
              </h4>
              <p className="text-sm leading-relaxed text-gray-600">{mission}</p>
            </motion.div>
            <motion.div
              whileHover={cardHover}
              className="relative bg-white border border-gray-100 rounded-lg shadow-md p-6 lg:p-8 cursor-pointer hover:border-cyan-400 transition duration-200"
            >
              <IoDiamondOutline className="absolute top-5 right-5 w-8 h-8 text-cyan-600/10" />
              <h4 className="text-xl font-bold text-cyan-700 mb-3">
                Our Vision: Industry Standard
              </h4>
              <p className="text-sm leading-relaxed text-gray-600">{vision}</p>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          variants={wipeReveal}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="absolute inset-0 z-20"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at bottom, rgba(30, 41, 59, 0.2) 0%, transparent 80%), linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)",
          }}
        />
        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-[50%] bg-gray-100 -z-10"></div>
      </div>
    </section>
  );
}
