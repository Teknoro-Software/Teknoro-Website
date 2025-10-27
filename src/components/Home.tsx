"use client";

import { motion, Variants } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import Link from "next/link";

type NodePosition = {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.5,
    },
  },
};

const titleWordVariants: Variants = {
  hidden: { opacity: 0, y: 50, rotateX: 90, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 20,
    },
  },
};

const textRevealVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.0,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: 1.8,
    },
  },
};

const buttonVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 20,
      delay: 2.5,
    },
  },
};

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const isInView = useInView(heroRef, { amount: 0.1, once: false });

  const [nodes, setNodes] = useState<NodePosition[]>([]);

  const title = "Connect. Market. Network.";
  const titleWords = title.split(" ");
  useEffect(() => {
    const generateNodes = () => {
      if (heroRef.current) {
        const numNodes = 70;
        const container = heroRef.current.getBoundingClientRect();

        const newNodes: NodePosition[] = Array.from({ length: numNodes }).map(
          (_, i) => ({
            id: i,
            x: Math.random() * container.width * 0.9 + container.width * 0.05,
            y: Math.random() * container.height * 0.8 + container.height * 0.1,
            size: Math.random() * 3 + 1,
            delay: Math.random() * 2,
          })
        );
        setNodes(newNodes);
      }
    };

    generateNodes();
    window.addEventListener("resize", generateNodes);
    return () => window.removeEventListener("resize", generateNodes);
  }, []);

  const renderNetwork = () => {
    if (nodes.length === 0) return null;

    return (
      <svg className="absolute inset-0 w-full h-full opacity-50 z-[1] pointer-events-none">
        {nodes.map((node, i) => {
          const closest = nodes
            .filter((n) => n.id !== node.id)
            .sort((a, b) => {
              const distA = Math.hypot(node.x - a.x, node.y - a.y);
              const distB = Math.hypot(node.x - b.x, node.y - b.y);
              return distA - distB;
            })
            .slice(0, 2);

          return closest.map((target, j) => (
            <motion.line
              key={`${i}-${j}`}
              x1={node.x}
              y1={node.y}
              x2={target.x}
              y2={target.y}
              stroke="rgba(0, 255, 255, 0.23)"
              strokeWidth="0.5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: node.delay + 0.5 }}
            />
          ));
        })}

        {nodes.map((node, i) => (
          <motion.circle
            key={i}
            cx={node.x}
            cy={node.y}
            r={node.size / 2}
            fill="rgb(0, 255, 255)"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [0.5, 1.2, 0.5],
              fill: isInView ? "rgb(0, 255, 255)" : "rgba(30, 41, 59, 0.5)",
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: node.delay,
            }}
          />
        ))}
      </svg>
    );
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap"
      />

      <section
        ref={heroRef}
        className={`relative min-h-screen flex flex-col items-center justify-center 
bg-[#0D1117] text-white px-4 sm:px-6 lg:px-8 overflow-hidden font-inter`}
      >
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 2 }}
          style={{
            backgroundImage:
              "radial-gradient(ellipse at bottom, rgba(30, 41, 59, 0.2) 0%, transparent 80%), repeating-linear-gradient(45deg, #1e293b 0, #1e293b 1px, transparent 1px, transparent 20px), repeating-linear-gradient(135deg, #1e293b 0, #1e293b 1px, transparent 1px, transparent 20px)",
            backgroundSize: "200% 200%, 40px 40px, 40px 40px",
            backgroundPosition: isInView
              ? "50% 50%, 0 0, 0 0"
              : "0% 0%, 0 0, 0 0",
            filter: "brightness(0.8) contrast(1.2)",
          }}
        />
        {renderNetwork()}
        <div className="relative z-20 w-full max-w-6xl text-center space-y-10 pt-28">
          <motion.h1
            className="text-5xl sm:text-6xl md:text-8xl font-black leading-none tracking-tighter"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {titleWords.map((word, index) => (
              <span
                key={index}
                className="inline-block overflow-hidden mx-1 perspective"
              >
                <motion.span
                  variants={titleWordVariants}
                  className={
                    word === "Network."
                      ? "bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 drop-shadow-[0_0_15px_rgba(0,255,255,0.7)]"
                      : "text-white"
                  }
                  style={{ display: "inline-block" }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          <motion.p
            variants={textRevealVariants}
            initial="hidden"
            animate="visible"
            className="text-base sm:text-lg md:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed px-4"
          >
            <span className="font-semibold text-white">
              Teknoro Software Solutions Private Limited
            </span>{" "}
            is dedicated to precision IT service delivery. We forge deep
            partnerships with our clients, translating complex challenges into
            clear, custom-built, and scalable technology solutions.
          </motion.p>

          <Link href="#services" passHref>
            <motion.button
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 20px rgba(0,255,255,0.8)",
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 px-10 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold rounded-full 
shadow-lg shadow-cyan-600/50 transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Explore Our Services</span>

              <span
                className="absolute inset-0 bg-white opacity-20 transform 
scale-x-0 group-hover:scale-x-100 transition-transform 
duration-500 origin-left ease-out"
              ></span>
            </motion.button>
          </Link>
        </div>
      </section>
    </>
  );
}
