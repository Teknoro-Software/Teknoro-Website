"use client";

import { motion } from "framer-motion";
import { Lightbulb, Microscope, Clock, Target, Send } from "lucide-react";
import { Raleway, Roboto } from "next/font/google";

// ✅ Load Raleway font
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"], // normal weight (you can add more if needed)
});

const journey = [
  {
    year: "2023",
    phase: "Foundation Phase",
    icon: Lightbulb,
    color: "from-green-400 to-green-600",
    points: [
      "Established core Oracle infrastructure.",
      "Introduced Oracle IDCS Authentication app.",
      "Developed Oracle IDCS Statement Analyzer for smarter insights.",
    ],
  },
  {
    year: "2024",
    phase: "Acceleration Phase",
    icon: Microscope,
    color: "from-cyan-400 to-cyan-600",
    points: [
      "Launched lightweight Oracle APEX applications on Oracle Cloud.",
      "Built Asset Tracking ERP using APEX.",
      "Rolled out corporate collection management modules.",
    ],
  },
  {
    year: "2025",
    phase: "Expansion Phase",
    icon: Clock,
    color: "from-blue-400 to-blue-600",
    points: [
      "Introduced Global Remittance Platform for seamless cross-border payments.",
      "Deployed UPI Switch on AWS for scalable transactions.",
    ],
  },
  {
    year: "2026",
    phase: "Innovation Phase",
    icon: Target,
    color: "from-purple-400 to-purple-600",
    points: [
      "Driving automation in logistics workflows.",
      "Pioneering AI-powered projects to enhance business outcomes.",
    ],
  },
];

export default function CompanyJourney() {
  return (
    <section
      className={`relative min-h-[60vh] bg-white py-16 px-4 sm:px-8 lg:px-20 overflow-x-auto ${raleway.className}`}
    >
      {/* Heading with animation */}
      <motion.div
        // initial={{ opacity: 0, x: -50 }}
        // whileInView={{ opacity: 1, x: 0 }}
        // transition={{ duration: 0.8 }}
        // viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 text-center md:text-left">
          Company <span className="text-[#5AD6FF]">Journey</span>
        </h2>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "120px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="h-1 bg-[#5AD6FF] rounded-full mb-10 sm:mb-12 mx-auto md:mx-0"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto">
        {/* Icons row with scale-in animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, scale: 0.8, y: 30 },
            visible: {
              opacity: 1,
              scale: 1,
              y: 0,
              transition: { duration: 0.8, staggerChildren: 0.2 },
            },
          }}
          className="relative flex items-center justify-between"
        >
          {journey.map((milestone, i) => {
            const Icon = milestone.icon;
            return (
              <motion.div
                key={i}
                variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
                transition={{ duration: 0.6 }}
                className="relative flex-1 flex items-center justify-center"
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r ${milestone.color} text-white shadow-lg z-10`}
                >
                  <Icon size={24} />
                </div>

                {/* Connector line */}
                {i < journey.length - 1 && (
                  <div className="absolute top-1/2 left-full w-full h-[2px] bg-gray-300 -translate-y-1/2"></div>
                )}
              </motion.div>
            );
          })}

          {/* Telegram Icon at End */}
          <motion.div
            variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
            transition={{ duration: 0.6 }}
            className="flex-1 flex items-center justify-center"
          >
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-sky-400 to-sky-600 text-white shadow-lg z-10">
              <Send size={24} />
            </div>
          </motion.div>
        </motion.div>

        {/* Cards with staggered fade-up + rotation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
        >
          {journey.map((milestone, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40, rotate: 3 },
                visible: { opacity: 1, y: 0, rotate: 0 },
              }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="bg-white rounded-xl shadow-md p-4 border border-gray-100 hover:shadow-lg transition"
            >
              <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-2">
                <span className={roboto.className}>{milestone.year}</span> – {milestone.phase}
              </h3>

              <ul className="text-gray-700 text-xs sm:text-sm space-y-1 list-disc list-inside">
                {milestone.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
