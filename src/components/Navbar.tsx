"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const RalewayLink = () => (
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700;900&display=swap"
  />
);

const CustomStyles = () => (
  <style>{`
        @keyframes pulse-slow {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(1.2); }
        }
        .animate-pulse-slow {
            animation: pulse-slow 3s infinite ease-in-out;
        }
    `}</style>
);

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("who");

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScrollY && currentScroll > 100) {
        setShowNavbar(false);
      } else if (currentScroll < lastScrollY || currentScroll < 100) {
        setShowNavbar(true);
      }

      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (!showNavbar) {
      setIsOpen(false);
    }
  }, [showNavbar]);

  return (
    <>
      <RalewayLink />
      <CustomStyles />
      <AnimatePresence initial={false} mode="wait">
        {showNavbar && (
          <motion.nav
            key="navbar"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed top-5 w-full z-[100] font-raleway"
          >
            <NavContent
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              activeSection={activeSection}
            />
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}

interface NavContentProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  activeSection: string;
}

const NavContent = ({ isOpen, setIsOpen, activeSection }: NavContentProps) => {
  const LogoImage = () => (
    <img
      src="/teknoro-nav.png"
      alt="Teknoro Logo"
      className="h-8 w-auto object-contain filter drop-shadow-[0_0_8px_rgba(37,99,235,0.8)]"
      style={{ width: "8.75rem" }}
      onError={(e) => {
        e.currentTarget.onerror = null;
        e.currentTarget.alt = "Teknoro";
      }}
    />
  );

  return (
    <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
      <div
        className="flex items-center justify-between 
                   bg-gray-900/40 backdrop-blur-3xl border border-gray-700/50 
                   px-8 py-3 rounded-3xl shadow-2xl 
                   max-w-[95%] mx-auto lg:max-w-full 
                   transition-all duration-300 hover:bg-gray-900/60"
      >
        <a href="#home" className="flex items-center group">
          <LogoImage />
        </a>

        <NavLinks
          className="hidden md:flex items-center space-x-8 text-white text-[16px]"
          activeSection={activeSection}
          onLinkClick={undefined}
        />

        <button
          className="md:hidden ml-auto focus:outline-none text-white p-2 rounded-lg 
                     hover:bg-white/20 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ originY: 0 }}
            className="absolute top-[5.75rem] left-0 right-0 mx-auto w-[95%] p-8 
                       flex flex-col items-center space-y-6 
                       shadow-2xl md:hidden bg-gray-900/95 backdrop-blur-xl 
                       text-white z-40 rounded-b-2xl border border-t-0 border-gray-700/50"
          >
            <NavLinks
              className="flex flex-col items-center space-y-6 text-center w-full"
              onLinkClick={() => setIsOpen(false)}
              activeSection={activeSection}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface NavLinksProps {
  className: string;
  onLinkClick?: () => void;
  activeSection: string;
}

interface LinkItemProps {
  href: string;
  label: string;
  id: string;
  onLinkClick?: () => void;
  activeSection: string;
}

const NavLinks = ({ className, onLinkClick, activeSection }: NavLinksProps) => {
  const links = [
    { href: "#who", label: "Who We Are", id: "who" },
    { href: "#services", label: "What We Do", id: "services" },
    { href: "#technologystack", label: "Tech Stack", id: "technologystack" },
    { href: "#about", label: "About", id: "about" },
  ];

  const LinkItem = ({ href, label, id }: LinkItemProps) => {
    const isActive = id === activeSection;

    return (
      <li>
        <a
          href={href}
          onClick={onLinkClick}
          className="hover:text-blue-400 transition-colors relative group 
                       font-semibold py-1 md:py-0 text-gray-300 md:text-white flex items-center gap-3"
        >
          <AnimatePresence>
            {isActive && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="w-2 h-2 rounded-full bg-blue-400 
                                   shadow-[0_0_8px_rgba(0,255,255,0.9)] 
                                   animate-pulse-slow"
              />
            )}
          </AnimatePresence>

          {label}

          {!isActive && (
            <span
              className="absolute bottom-0 left-0 w-full h-[2px] 
                                 bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform 
                                 duration-300 origin-center"
            ></span>
          )}
        </a>
      </li>
    );
  };

  return (
    <ul className={`${className} font-medium`}>
      {links.map((link, index) => (
        <LinkItem
          key={index}
          href={link.href}
          label={link.label}
          id={link.id}
          activeSection={activeSection}
          onLinkClick={onLinkClick}
        />
      ))}
      <li>
        <a
          href="#contact"
          onClick={onLinkClick}
          className="md:px-5 md:py-2.5 px-6 py-3 mt-4 md:mt-0 rounded-full transition-all 
                     duration-300 font-semibold flex items-center 
                     justify-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 
                     text-white 
                     shadow-[0_4px_15px_rgba(37,99,235,0.6)] 
                     hover:shadow-[0_0_30px_rgba(0,255,255,1)] hover:scale-[1.03] active:scale-[0.98]
                     hover:from-cyan-500 hover:to-blue-500 relative overflow-hidden group"
        >
          <span
            className="absolute inset-0 bg-white opacity-10 transform -skew-x-12 translate-x-[-150%] 
                           group-hover:translate-x-[150%] transition-transform duration-700 ease-out"
          ></span>
          <span className="relative">Get in touch</span>
          <ArrowUpRight size={20} className="relative" />
        </a>
      </li>
    </ul>
  );
};
