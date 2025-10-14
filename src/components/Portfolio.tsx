"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

// Import images from public folder
import upiImage from "../../public/upi.png";
import bankImage from "../../public/bankstatement.png";
import loanImage from "../../public/loan.png";
import counterImage from "../../public/counter.png";

interface PortfolioItem {
  title: string;
  description: string;
  image: StaticImageData;
}

const portfolioItems: PortfolioItem[] = [
  {
    title: "UPI Integration on Cloud",
    description:
      "We are implementing a UPI Switch in one of the prominent banks of the country, to facilitate UPI transactions using Cloud Infrastructure.",
    image: upiImage,
  },
  {
    title: "Bank Statement Analyser",
    description:
      "We are creating a Bank Statement Analyser that provides detailed analysis of a user’s spending based on their uploaded bank statement.",
    image: bankImage,
  },
  {
    title: "Loan Against Securities",
    description:
      "We are setting up AWS infrastructure for issuance of Loan Against Mutual Funds through Banks, including ALBs, Databases, API Gateways, WAF, Event Streaming, and Grafana analytics.",
    image: loanImage,
  },
  {
    title: "Counter Selling Products During Account Opening",
    description:
      "We are developing an application for selling Insurance during Bank Account opening, using Oracle APEX, HTML/CSS, and SQL databases.",
    image: counterImage,
  },
];

const Portfolio: FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4"
        >
          Our <span className="text-[#5AD6FF]">Portfolio</span>
        </motion.h2>

        {/* Divider */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-1 bg-[#5AD6FF] rounded-full mx-auto mb-8 sm:mb-12"
        ></motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{
                opacity: 0,
                rotateY: index % 2 === 0 ? -30 : 30,
                scale: 0.8,
                y: index % 2 === 0 ? -30 : 30,
              }}
              whileInView={{
                opacity: 1,
                rotateY: 0,
                scale: 1,
                y: 0,
              }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                rotateY: index % 2 === 0 ? -5 : 5,
                scale: 1.03,
                transition: { duration: 0.3 },
              }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all border border-gray-100"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <motion.div
                  className="relative w-full h-40 sm:h-48 md:h-56"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain p-4"
                  />
                </motion.div>
              </div>

              {/* Text */}
              <div className="p-4 sm:p-6 text-left">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
