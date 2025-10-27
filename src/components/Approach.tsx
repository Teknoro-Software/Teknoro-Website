"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import {
  Search,
  ClipboardList,
  Rocket,
  Headset,
  ChevronRight,
} from "lucide-react";

interface Step {
  title: string;
  text: string;
  icon: React.ElementType;
  delay: number;
}

const steps: Step[] = [
  {
    title: "Discover",
    text: "Collaborate with technology and business leaders to identify needs that align with strategic goals and future objectives.",
    icon: Search,
    delay: 0.0,
  },
  {
    title: "Planning",
    text: "Our team designs a tailored architecture and detailed plan that aligns with your specific objectives, budget, and timelines.",
    icon: ClipboardList,
    delay: 0.15,
  },
  {
    title: "Execution",
    text: "We bring strategies to life with precision and agility, following industry best practices to deliver secure, scalable, and high-performing solutions.",
    icon: Rocket,
    delay: 0.3,
  },
  {
    title: "Support",
    text: "We ensure seamless operations with comprehensive application management, proactive monitoring, and dedicated, long-term support services.",
    icon: Headset,
    delay: 0.45,
  },
];

const titleVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stepVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: custom,
      ease: "easeOut",
      type: "spring",
      stiffness: 100,
    },
  }),
};

export default function Approach() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  const accentColor = "#5AD6FF";

  return (
    <section
      ref={ref}
      id="our-approach"
      className="bg-gray-950 py-20 sm:py-24 px-4 sm:px-6 font-raleway text-white"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
            Our <span style={{ color: accentColor }}>Approach</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            A systematic and agile methodology designed to ensure project
            success from concept to completion.
          </p>
          <div
            className="h-1 rounded-full mx-auto mt-4"
            style={{ width: "120px", background: accentColor }}
          ></div>
        </motion.div>

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="absolute top-10 left-0 right-0 h-[2px] bg-gray-700 hidden md:block mx-16"></div>

          {steps.map((item, index) => {
            const IconComponent = item.icon;
            const isLast = index === steps.length - 1;

            return (
              <motion.div
                key={item.title}
                custom={item.delay}
                variants={stepVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="group relative z-10 bg-gray-800 rounded-3xl p-6 sm:p-8 
                                           text-center transition-all duration-500 
                                           shadow-xl hover:shadow-2xl hover:shadow-cyan-500/30
                                           hover:scale-[1.03] border border-gray-700 hover:border-cyan-500/80 cursor-pointer"
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                                               w-10 h-10 flex items-center justify-center 
                                               rounded-full font-extrabold text-sm text-white shadow-xl ring-4 ring-gray-800"
                  style={{
                    background: accentColor,
                    boxShadow: `0 4px 15px 0 ${accentColor}80`,
                  }}
                >
                  {index + 1}
                </div>

                <div className="mt-6 mb-5 flex justify-center">
                  <div
                    className="p-5 rounded-2xl w-fit transition-all duration-300"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, ${accentColor}10, ${accentColor}20)`,
                      border: `1px solid ${accentColor}30`,
                    }}
                  >
                    <IconComponent
                      size={40}
                      style={{ color: accentColor }}
                      className="transition-transform duration-300 group-hover:rotate-6"
                    />
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  {item.text}
                </p>

                {!isLast && (
                  <ChevronRight
                    size={36}
                    className="absolute right-[-2.5rem] top-1/2 transform -translate-y-1/2 
                                                   text-gray-500 hidden md:block group-hover:text-cyan-400 transition-colors"
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
