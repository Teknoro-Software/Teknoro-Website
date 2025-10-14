"use client";

import { motion } from "framer-motion";
import { Raleway } from "next/font/google";
import {
  FaUniversity,
  FaBriefcase,
  FaHospital,
  FaShieldAlt,
  FaIndustry,
  FaShoppingCart,
  FaShip,
  FaPlane,
  FaBolt,
} from "react-icons/fa";

// ✅ Import Google Font
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const industries = [
  { name: "Banking & Financial Services", icon: <FaUniversity size={32} className="text-[#5AD6FF]" /> },
  { name: "Professional Services", icon: <FaBriefcase size={32} className="text-[#5AD6FF]" /> },
  { name: "Healthcare", icon: <FaHospital size={32} className="text-[#5AD6FF]" /> },
  { name: "Insurance", icon: <FaShieldAlt size={32} className="text-[#5AD6FF]" /> },
  { name: "Retail & Consumer Packaged Goods", icon: <FaShoppingCart size={32} className="text-[#5AD6FF]" /> },
  { name: "Shipping & Logistics", icon: <FaShip size={32} className="text-[#5AD6FF]" /> },
  { name: "Travel & Leisure", icon: <FaPlane size={32} className="text-[#5AD6FF]" /> },
  { name: "Utilities & Energy", icon: <FaBolt size={32} className="text-[#5AD6FF]" /> },
];

export default function IndustriesWeServe() {
  return (
    <section
      className={`bg-white px-4 sm:px-6 lg:px-8 py-8 flex flex-col items-center ${raleway.className}`}

    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 text-center md:text-left">
          Industries <span className="text-[#5AD6FF]">we serve</span>
        </h2>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "120px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="h-1 bg-[#5AD6FF] rounded-full mb-10 sm:mb-12 mx-auto md:mx-0"
        ></motion.div>
      </motion.div>

      {/* Wrapper with top dashed line */}
      <div className="relative w-full max-w-7xl">
        {/* Top dashed line */}
        {/* <div className="absolute top-0 left-0 w-full border-t-2 border-dashed border-gray-300"></div> */}

        {/* Grid with vertical dashed lines */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative pt-8">
          {industries.slice(0, 5).map((industry, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white p-6 text-center flex flex-col items-center justify-center"
            >
              <div className="mb-3">{industry.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900">{industry.name}</h3>
            </motion.div>
          ))}

          {/* Vertical dashed connectors */}
          {/* <div className="absolute top-0 left-1/5 h-8 border-l-2 border-dashed border-gray-300 hidden lg:block"></div>
          <div className="absolute top-0 left-2/5 h-8 border-l-2 border-dashed border-gray-300 hidden lg:block"></div>
          <div className="absolute top-0 left-3/5 h-8 border-l-2 border-dashed border-gray-300 hidden lg:block"></div>
          <div className="absolute top-0 left-4/5 h-8 border-l-2 border-dashed border-gray-300 hidden lg:block"></div> */}
        </div>
      </div>

      {/* Second row (next 5 industries) */}
      <div className="mt-16 w-full max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative">
          {industries.slice(5).map((industry, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white p-6 text-center flex flex-col items-center justify-center"
            >
              <div className="mb-3">{industry.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900">{industry.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
