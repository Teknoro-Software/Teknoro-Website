"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";

const borderVariants: Variants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 3,
      ease: "linear",
      repeat: Infinity,
    },
  },
};

export default function Loader({ loading }: { loading: boolean }) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeOut" } }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="relative w-56 h-56 flex items-center justify-center">
            <motion.div
              className="absolute w-full h-full rounded-full overflow-hidden flex items-center justify-center p-[4px] shadow-2xl shadow-blue-500/30"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                variants={borderVariants}
                animate="animate"
                className="absolute inset-[-100%] z-0 bg-[conic-gradient(transparent,transparent,transparent,rgba(59,130,246,0.8),rgba(0,255,255,0.8))]"
              />

              <div className="relative w-full h-full rounded-full bg-slate-950 flex items-center justify-center z-10">
                <motion.div
                  className="w-36 h-36 flex items-center justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2,
                    ease: "easeOut",
                  }}
                >
                  <Image
                    src="/teknoro-2.png"
                    alt="Teknoro Logo Loader"
                    width={180}
                    height={180}
                    className="object-contain filter drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]"
                    priority
                  />
                </motion.div>
              </div>
            </motion.div>

            <motion.p
              className="absolute bottom-[-50px] text-sm tracking-widest uppercase text-gray-400 opacity-70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Loading
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
