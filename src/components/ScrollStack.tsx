"use client";

import React from "react";
import { motion } from "framer-motion";

type ScrollStackProps = {
  children: React.ReactNode;
  activeIndex: number;
  /**
   * How many pixels each stacked card moves when not active (peek height).
   * Positive number; default 28
   */
  peek?: number;
  /**
   * Controls the scale reduction for non-active items
   */
  inactiveScale?: number;
};

export default function ScrollStack({
  children,
  activeIndex,
  peek = 28,
  inactiveScale = 0.96,
}: ScrollStackProps) {
  const items = React.Children.toArray(children);
  const count = items.length;

  return (
    <div className="relative w-full h-full">
      {items.map((child, idx) => {
        const offset = (idx - activeIndex) * -peek; // previous items -> negative (move up) so they peek above
        const isActive = idx === activeIndex;

        return (
          <motion.div
            key={idx}
            initial={false}
            animate={{
              y: offset,
              scale: isActive ? 1 : inactiveScale,
              opacity: isActive ? 1 : 0.9,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            style={{
              zIndex: isActive ? 999 : Math.max(0, count - idx),
            }}
            className="absolute left-0 right-0 top-0 mx-auto w-full flex items-center justify-center pointer-events-none"
          >
            {child}
          </motion.div>
        );
      })}
    </div>
  );
}
