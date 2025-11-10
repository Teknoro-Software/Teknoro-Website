"use client";

import {
  motion,
  useScroll,
  useTransform,
  useInView,
  Variants,
} from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Raleway } from "next/font/google";
import { FiArrowDownCircle } from "react-icons/fi";

const raleway = Raleway({
  subsets: ["latin"],
  weight: "800",
});

type NodePosition = {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
};

export default function HomeNextPage() {
  const heroRef = useRef<HTMLElement>(null);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [nodes, setNodes] = useState<NodePosition[]>([]);

  const isInView = useInView(heroRef, { amount: 0.1, once: false });

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const backgroundPosition = useTransform(
    scrollYProgress,
    [0, 1],
    ["0% 0%", "50% 50%"]
  );

  const headlineY = useTransform(scrollYProgress, [0, 1], ["0vh", "-30vh"]);
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headline = [
    "Build your empire with a revolutionary",
    "network of connections and limitless potential - ",
    "unlocking true financial freedom and time for life.",
  ];

  const lineContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.005,
        delayChildren: 0.5,
      },
    },
  };

  const charVariants: Variants = {
    hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.4,
        ease: [0.17, 0.67, 0.83, 0.99],
      },
    },
  };

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
    <section
      ref={heroRef}
      className=" relative h-[100vh] min-h-[700px] px-6 sm:px-8 md:px-10 lg:px-16 xl:px-24 flex flex-col justify-start overflow-hidden text-white "
    >
      {" "}
      <motion.div
        className="absolute inset-0 -z-10"
        style={{
          background: "linear-gradient(135deg, #090e11, #10161d, #0c151a)",
          backgroundSize: "200% 200%",
          backgroundPosition,
        }}
      />
      {renderNetwork()}
      <motion.div
        className="sticky top-0 w-full max-w-7xl flex flex-col justify-center h-screen mx-auto pointer-events-none"
        style={{ y: headlineY, opacity: headlineOpacity }}
      >
        <h1
          className={`${raleway.className} 
      text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl flex flex-col leading-tight tracking-tighter
      text-center
      px-2 sm:px-0
     `}
        >
          {headline.map((line, i) => (
            <motion.div
              key={i}
              className="flex flex-wrap justify-center overflow-hidden"
              variants={lineContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.8 }}
            >
              {line.split(" ").map((word, wIndex) => (
                <span key={wIndex} className="mr-4 sm:mr-6 my-2">
                  {word.split("").map((char, cIndex) => (
                    <motion.span
                      key={cIndex}
                      className="inline-block relative 
            // Highlighting key words with gradient
            text-transparent bg-clip-text
            bg-gradient-to-br from-gray-200 via-gray-50 to-cyan-200
            hover:from-cyan-300 hover:to-white transition-colors duration-500
           "
                      variants={charVariants}
                    >
                      {char}
                    </motion.span>
                  ))}
                  <span className="inline-block">&nbsp;</span>
                </span>
              ))}
            </motion.div>
          ))}
        </h1>
      </motion.div>
    </section>
  );
}
