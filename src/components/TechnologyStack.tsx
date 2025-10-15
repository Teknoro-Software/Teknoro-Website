"use client";

import { useState, useRef, useMemo } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
import { Raleway } from "next/font/google";
import {
  Code,
  Cloud,
  Server,
  HardDrive,
  Shield,
  Zap,
  Wrench,
  Grid,
} from "lucide-react"; // Imported Grid icon
import { useInView } from "framer-motion";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

type TechImage = {
  src: string;
  name: string;
  category: string;
};

// --- CONSTANT FOR ALL VIEW ---
const ALL_CATEGORIES = "All Technologies";

// --- DATA REMAINS THE SAME ---
const techStackFlat: TechImage[] = [
  { src: "/techStack/react.png", name: "React.js", category: "Frontend" },
  { src: "/techStack/next.png", name: "Next.js", category: "Frontend" },
  {
    src: "/techStack/typescript.png",
    name: "TypeScript",
    category: "Frontend",
  },
  {
    src: "/techStack/tailwind.png",
    name: "Tailwind CSS",
    category: "Frontend",
  },
  { src: "/techStack/html5.png", name: "HTML5", category: "Frontend" },
  { src: "/techStack/css3.png", name: "CSS3", category: "Frontend" },
  { src: "/techStack/node.png", name: "Node.js", category: "Backend" },
  { src: "/techStack/laravel.png", name: "Laravel", category: "Backend" },
  {
    src: "/techStack/reactnative.png",
    name: "React Native",
    category: "Mobile",
  },
  { src: "/techStack/rest.png", name: "REST APIs", category: "APIs & Tools" },
  { src: "/techStack/postman.png", name: "Postman", category: "APIs & Tools" },
  { src: "/techStack/mysql.png", name: "MySQL", category: "Database" },
  { src: "/techStack/aws.png", name: "AWS", category: "Cloud" },
  { src: "/techStack/oauth.png", name: "OAuth 2.0", category: "Security" },
  { src: "/techStack/jwt.png", name: "JWT", category: "Security" },
];

const categoryMap: {
  [key: string]: { color: string; icon: React.ElementType; hover: string };
} = {
  // NEW ENTRY FOR 'SHOW ALL'
  [ALL_CATEGORIES]: {
    color: "text-blue-400",
    icon: Grid,
    hover: "hover:border-blue-500",
  },

  Frontend: {
    color: "text-red-400",
    icon: Code,
    hover: "hover:border-red-500",
  },
  Backend: {
    color: "text-green-400",
    icon: Server,
    hover: "hover:border-green-500",
  },
  Mobile: {
    color: "text-purple-400",
    icon: Zap,
    hover: "hover:border-purple-500",
  },
  "APIs & Tools": {
    color: "text-yellow-400",
    icon: Wrench,
    hover: "hover:border-yellow-500",
  },
  Database: {
    color: "text-orange-400",
    icon: HardDrive,
    hover: "hover:border-orange-500",
  },
  Cloud: {
    color: "text-cyan-400",
    icon: Cloud,
    hover: "hover:border-cyan-500",
  },
  Security: {
    color: "text-pink-400",
    icon: Shield,
    hover: "hover:border-pink-500",
  },
};

// MODIFIED: 'All Technologies' is now the first item
const categoryList = [
  ALL_CATEGORIES,
  ...Object.keys(categoryMap).filter((key) => key !== ALL_CATEGORIES),
];

// --- ANIMATION VARIANTS (remain the same) ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const tileVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.85 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};
// --- END ANIMATION VARIANTS ---

export default function TechnologyStackRedesign() {
  // Start with 'All Technologies' active
  const [activeCategory, setActiveCategory] = useState(ALL_CATEGORIES);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.1, once: true });

  const filteredTech = useMemo(() => {
    // MODIFIED FILTERING LOGIC
    if (activeCategory === ALL_CATEGORIES) {
      return techStackFlat; // Return everything for "Show All"
    }
    return techStackFlat.filter((tech) => tech.category === activeCategory);
  }, [activeCategory]);

  const { color: activeColor } = categoryMap[activeCategory];

  // MODIFIED LOGIC: Small category logic is only applied if NOT showing ALL
  const isShowingAll = activeCategory === ALL_CATEGORIES;
  const isSmallCategory = !isShowingAll && filteredTech.length < 6;

  return (
    <section
      className={`relative py-20 sm:py-28 bg-slate-900 overflow-hidden ${raleway.className}`}
    >
      {/* Subtle Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(90deg, #3b82f610 1px, transparent 1px), linear-gradient(#3b82f610 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div
        className="max-w-7xl mx-auto px-6 w-full relative z-10"
        ref={containerRef}
      >
        {/* === HEADER === */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-2">
            Our Technology Ecosystem
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white">
            The <span className="text-blue-400">Spectrum</span>
          </h2>
          <div className="text-lg text-gray-400 mt-3 max-w-3xl mx-auto">
            We build modern, high-performance solutions on a foundation of
            interconnected, category-leading technologies.
          </div>
        </motion.div>

        {/* === CATEGORY TABS (including "Show All") === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-10 p-2 sm:p-4 bg-slate-800/50 rounded-xl max-w-4xl mx-auto border border-slate-700"
        >
          {categoryList.map((category) => {
            const { icon: Icon, color } = categoryMap[category];
            const isActive = category === activeCategory;

            // Adjust button label for mobile "All Technologies" -> "All"
            const mobileLabel =
              category === ALL_CATEGORIES ? "All" : category.split(" ")[0];

            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex items-center space-x-2 px-3 py-2 sm:px-4 sm:py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  isActive
                    ? `bg-slate-700/80 shadow-lg ${color}`
                    : `text-gray-400 hover:text-white hover:bg-slate-700/50`
                }`}
              >
                <Icon
                  className={`w-4 h-4 sm:w-5 sm:h-5 ${
                    isActive ? activeColor : "text-gray-500"
                  }`}
                />
                <span className="hidden sm:inline">{category}</span>
                <span className="sm:hidden">{mobileLabel}</span>
              </button>
            );
          })}
        </motion.div>

        {/* === TECH TILES DISPLAY === */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            // CONDITIONAL CLASSNAME: Flex centering for small categories, otherwise full grid.
            className={`
                mt-10 gap-6 justify-items-center
                ${
                  isSmallCategory
                    ? "flex justify-center items-center flex-wrap" // Small Category (< 6 items)
                    : "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6" // Large Category or ALL
                }
            `}
          >
            {filteredTech.map((tech) => {
              // Use the category color from the map, but default to the ALL_CATEGORIES color if showing all
              const techCategoryColor = categoryMap[tech.category].color;
              const hoverEffect = categoryMap[tech.category].hover;

              return (
                <motion.div
                  key={tech.name}
                  variants={tileVariants}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: `0 0 15px 2px ${techCategoryColor
                      .replace("text-", "")
                      .replace("-400", "-500")}/40`,
                  }}
                  className={`flex flex-col items-center justify-center p-4 w-full aspect-square max-w-[150px]
                            bg-slate-800/80 rounded-xl transition duration-300 ease-out border border-slate-700
                            ${hoverEffect} cursor-pointer
                          `}
                >
                  <div className="flex-grow flex items-center justify-center mb-3">
                    <Image
                      src={tech.src}
                      alt={tech.name}
                      width={60}
                      height={60}
                      className="h-10 w-10 md:h-12 md:w-12 object-contain"
                    />
                  </div>
                  <p className="text-sm font-semibold text-gray-200 text-center leading-tight">
                    {tech.name}
                  </p>
                  <div
                    // Use the tech's actual category color here, even in the 'All' view
                    className={`mt-1 text-[10px] font-bold uppercase tracking-wider ${techCategoryColor}`}
                  >
                    {tech.category}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
