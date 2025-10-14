"use client";

// #020617

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isAtTop, setIsAtTop] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsAtTop(window.scrollY < 10);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence initial={false} mode="wait">
      {isAtTop ? (
        <TopNavbar key="top-navbar" isOpen={isOpen} setIsOpen={setIsOpen} />
      ) : (
        <ScrollNavbar key="scroll-navbar" isOpen={isOpen} setIsOpen={setIsOpen} />
      )}
    </AnimatePresence>
  );
}

/** NAV when page is at the very top */
function TopNavbar({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void }) {
  return (
    <motion.nav
  initial={{ y: -80, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  exit={{ y: -80, opacity: 0 }}
  transition={{ duration: 0.35 }}
  className="fixed top-0 w-full z-50 bg-slate-950 py-3 shadow-md"
>
  <NavContent
    logo="/technodromelogo3.png"
    variant="light"
    isOpen={isOpen}
    setIsOpen={setIsOpen}
  />
</motion.nav>

  );
}

/** NAV when user has scrolled down */
function ScrollNavbar({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void }) {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -80, opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="fixed top-0 w-full z-50 bg-white text-black shadow-md font-raleway"
    >
      <NavContent
        logo="/technodromelogo3.png"
        variant="light"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </motion.nav>
  );
}

/** Shared Navbar Layout */
function NavContent({
  logo,
  variant,
  isOpen,
  setIsOpen,
}: {
  logo: string;
  variant: "light" | "dark";
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  return (
    <div className="container mx-auto flex justify-between items-center px-4">
      <div className="w-full flex items-center justify-between px-6 py-2 bg-white rounded-full shadow-md">
        {/* Logo */}
        <Image
          src={logo}
          alt="Technodrome Logo"
          width={140}
          height={40}
          priority
          className="transition-all duration-300"
        />

        {/* Desktop Menu */}
        <NavLinks variant={variant} className="hidden md:flex items-center space-x-10" />

        {/* Mobile Hamburger */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -200, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`absolute top-20 left-0 w-full p-6 flex flex-col space-y-6 shadow-lg md:hidden ${
              variant === "light" ? "bg-white text-black" : "bg-slate-950 text-white"
            }`}
          >
            <NavLinks variant={variant} className="flex flex-col space-y-6" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/** Links Component */
function NavLinks({
  variant,
  className,
}: {
  variant: "light" | "dark";
  className?: string;
}) {
  return (
    <ul className={`${className} font-raleway text-base md:text-md`}>
      <li>
        <a href="#who-we-are" className="hover:font-semibold transition-all">
          Who We Are
        </a>
      </li>
      <li>
        <a href="#what-we-do" className="hover:font-semibold transition-all">
          What We Do
        </a>
      </li>
      <li>
        <a href="#future" className="hover:font-semibold transition-all">
          Future of Retail
        </a>
      </li>
      <li>
        <a href="#news" className="hover:font-semibold transition-all">
          News
        </a>
      </li>
      <li>
        <a
          href="#contact"
          className="px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 font-raleway font-medium flex items-center gap-2 bg-neutral-800 text-white hover:bg-neutral-900"
        >
          <span>↗</span> Get in touch
        </a>
      </li>
    </ul>
  );
}







