"use client";
import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MapPin } from "lucide-react";
import { Raleway, Roboto } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["700"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
});

const FooterLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-xs py-0.5 block"
  >
    {children}
  </a>
);

const ContactItem = ({
  Icon,
  text,
  href,
}: {
  Icon: React.ElementType;
  text: string;
  href: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center text-gray-300 hover:text-blue-400 transition-colors text-xs"
  >
    <Icon className="w-3 h-3 mr-2 flex-shrink-0 text-blue-500" />
    <span>{text}</span>
  </a>
);

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const companyName = "Teknoro Software Solutions Private Limited";

  const allLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Our Services", href: "#services" },
    { name: "Technology Stack", href: "#technologystack" },
    { name: "Contact", href: "#contact" },
    { name: "MLM Software Development", href: "#" },
    { name: "Web Development", href: "#" },
    { name: "Mobile Development", href: "#" },
  ];

  const linkColumn1 = allLinks.slice(0, 5);
  const linkColumn2 = allLinks.slice(5);

  return (
    <footer className={`bg-slate-950 text-white ${roboto.className}`}>
      <div className="max-w-7xl mx-auto px-6 py-8 sm:py-10 border-t border-slate-800">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-3">
            <img src="/teknoro.png" alt="Teknoro" className="h-30" />
            <p className="text-gray-400 text-xs max-w-[300px]">
              Robust and highly scalable technology solutions designed
              exclusively for the Multi-Level Marketing (MLM) and direct selling
              industry.
            </p>
            {/* <div className="flex space-x-3 pt-1">
              {[
                { Icon: FaXTwitter, href: "https://x.com/" },
                { Icon: FaInstagram, href: "https://www.instagram.com/" },
                {
                  Icon: FaLinkedin,
                  href: "https://www.linkedin.com/company/technodrome-solutions-private-limited/",
                },
              ].map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-400 transition-colors"
                >
                  <Icon size={16} /> 
                </a>
              ))}
            </div> */}
          </div>

          <div className="space-y-3">
            <h4 className="text-base font-bold text-white mb-2 border-b border-blue-500/20 pb-1 w-max">
              Explore
            </h4>
            <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-xs">
              <div className="flex flex-col space-y-0.5">
                {linkColumn1.map((link) => (
                  <FooterLink key={link.name} href={link.href}>
                    {link.name}
                  </FooterLink>
                ))}
              </div>
              <div className="flex flex-col space-y-0.5">
                {linkColumn2.map((link) => (
                  <FooterLink key={link.name} href={link.href}>
                    {link.name}
                  </FooterLink>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-base font-bold text-white mb-2 border-b border-blue-500/20 pb-1 w-max">
              Contact
            </h4>
            <div className="space-y-2">
              <ContactItem
                Icon={MapPin}
                href="https://maps.app.goo.gl/zUY8spnxHLNN9qta7"
                text="5B, Malabar Gate, Edappally, Kochi - 682024"
              />
              <ContactItem
                Icon={FaPhoneAlt}
                href="tel:+919962690005"
                text="+91 9962690005"
              />
              <ContactItem
                Icon={FaEnvelope}
                href="mailto:info@teknoro.in"
                text="info@teknoro.in"
              />
            </div>
          </div>
        </div>

        <div
          className={`mt-6 pt-3 border-t border-slate-800 text-center text-gray-500 text-xs ${roboto.className}`}
        >
          © {currentYear} {companyName}. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
