"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Constants for ring configuration
const ringStyles = [
  {
    size: 200,
    speed: 10,
    color: "border-blue-500/50",
    weight: "border-[2px]",
    rotateAxis: "Y",
  },
  {
    size: 150,
    speed: 7,
    color: "border-cyan-400/70",
    weight: "border-2",
    rotateAxis: "X",
  },
  {
    size: 100,
    speed: 5,
    color: "border-white/90",
    weight: "border",
    rotateAxis: "Z",
  },
];

export default function Loader({ loading }: { loading: boolean }) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader-kinetic"
          // Dark, neutral background for optimal contrast
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-900"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
          transition={{ duration: 0.6 }}
        >
          {/* Main 3D Container */}
          <div className="relative w-[300px] h-[300px] flex items-center justify-center perspective-[1000px]">
            {/* Kinetic Rings */}
            {ringStyles.map((ring, index) => (
              <motion.div
                key={index}
                className={`absolute rounded-full ${ring.color} ${ring.weight} shadow-lg shadow-black/50`}
                style={{
                  width: `${ring.size}px`,
                  height: `${ring.size}px`,
                  transformStyle: "preserve-3d", // Important for 3D rotation
                }}
                animate={{
                  // Continuous rotation on its defined axis
                  [`rotate${ring.rotateAxis}`]: 360,
                  // Subtle scale pulse for life
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: ring.speed,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}

            {/* Central Logo - Fades in at the point of "synchronization" */}
            <motion.div
              className="absolute z-10 p-4 rounded-full backdrop-blur-[2px] bg-black/30" // Subtle background for logo
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.5 }} // Delay for rings to fully enter cycle
            >
              <Image
                src="/teknoro-2.png"
                alt="Teknoro Logo Loader"
                width={120}
                height={120}
                className="object-contain filter drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                priority
              />
            </motion.div>
          </div>

          {/* Status Text - Emphasizing Synchronization */}
          <motion.p
            className="mt-12 text-md tracking-[0.25em] uppercase text-gray-300 font-light"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.6 }}
          >
            SYNCHRONIZING CORE DATA
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
