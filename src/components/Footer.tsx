"use client";
import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
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
  const [showTerms, setShowTerms] = useState(false);

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
    <>
      <footer className={`bg-slate-950 text-white ${roboto.className}`}>
        <div className="max-w-7xl mx-auto px-6 py-8 sm:py-10 border-t border-slate-800">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {/* Company Info */}
            <div className="space-y-3">
              <img src="/teknoro.png" alt="Teknoro" className="h-30" />
              <p className="text-gray-400 text-xs max-w-[300px]">
                Robust and highly scalable technology solutions designed
                exclusively for the Multi-Level Marketing (MLM) and direct selling
                industry.
              </p>
            </div>

            {/* Explore Links */}
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

            {/* Contact */}
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

          {/* Bottom Section */}
          <div className="mt-6 pt-3 border-t border-slate-800 text-center text-gray-500 text-xs">
            © {currentYear} {companyName}. All Rights Reserved.
            <button
              onClick={() => setShowTerms(true)}
              className="text-blue-400 hover:underline ml-2"
            >
              Terms & Conditions
            </button>
          </div>
        </div>
      </footer>

      {showTerms && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 px-4"
          onClick={() => setShowTerms(false)}
        >
          <div
            className="relative w-full max-w-6xl max-h-[85vh] rounded-2xl shadow-2xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-black overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="absolute inset-0 bg-center bg-no-repeat opacity-[0.04] pointer-events-none"
              style={{
                backgroundImage: "url('/teknoro.png')",
                backgroundAttachment: "fixed",
              }}
            />

            <div className="relative z-10 max-h-[85vh] overflow-y-auto custom-scrollbar p-8 text-gray-200">

              <button
                onClick={() => setShowTerms(false)}
                className="absolute top-5 right-6 text-gray-400 hover:text-white transition text-xl"
              >
                ✕
              </button>


              <h2 className="text-3xl font-bold mb-2 text-white tracking-wide">
                Terms & Conditions
              </h2>

              <p className="text-blue-400 font-medium mb-6">
                Teknoro Software Solutions Pvt Ltd
              </p>

              <div className="space-y-8 text-sm leading-relaxed text-gray-300">

                <div>
                  <p>
                    Welcome to Teknoro Software Solutions Pvt Ltd (“Company”, “we”, “our”, “us”).
                    By accessing our website or engaging our services, you agree to be bound by
                    the following Terms & Conditions.
                  </p>

                  <p className="mt-3">
                    If you do not agree with any part of these terms, please do not use our services.
                  </p>
                </div>

                {/* 1 */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3 border-l-4 border-blue-500 pl-3">
                    1. Services
                  </h3>
                  <p>
                    Teknoro Software Solutions Pvt Ltd provides software development,
                    web and mobile application development, IT consulting, digital solutions,
                    maintenance services, and other related technology services as agreed
                    with the client in writing.
                  </p>
                  <p className="mt-3">
                    All services are delivered based on approved proposals, quotations, or agreements.
                  </p>
                </div>

                {/* 2 */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3 border-l-4 border-blue-500 pl-3">
                    2. Payment Terms
                  </h3>

                  <p>
                    Payments must be made as per the agreed schedule mentioned in the proposal or agreement.
                  </p>

                  <p className="mt-2">
                    Work will commence only after receipt of the agreed advance payment.
                  </p>

                  <p className="mt-2">
                    Any additional features or modifications outside the approved scope will be charged separately.
                  </p>

                  <p className="mt-4 font-semibold text-blue-400">No Refund Policy</p>

                  <ul className="list-disc pl-6 space-y-2 mt-3">
                    <li>Project cancellation by the client</li>
                    <li>Change of requirements after project initiation</li>
                    <li>Delay in client response</li>
                    <li>Dissatisfaction after work has commenced</li>
                  </ul>
                </div>

                {/* 3 */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3 border-l-4 border-blue-500 pl-3">
                    3. Delay or Failure in Payment
                  </h3>

                  <p>If the client fails to make payment within the agreed timeline:</p>

                  <ul className="list-disc pl-6 space-y-2 mt-3">
                    <li>Project development will be immediately paused.</li>
                    <li>Access to services, hosting, servers, or deliverables may be suspended.</li>
                    <li>Project timeline will automatically extend based on the delay period.</li>
                  </ul>

                  <p className="mt-4">
                    The Company will not be responsible for any loss arising due to service
                    suspension caused by delayed payment.
                  </p>
                </div>

                {/* 4 */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3 border-l-4 border-blue-500 pl-3">
                    4. Project Timeline
                  </h3>

                  <p>All project timelines provided are estimates.</p>

                  <p className="mt-3">Project delivery may be delayed due to:</p>

                  <ul className="list-disc pl-6 space-y-2 mt-3">
                    <li>Change in scope or requirements</li>
                    <li>Delay in client approvals or feedback</li>
                    <li>Technical challenges</li>
                    <li>Third-party service issues</li>
                    <li>Force majeure events</li>
                  </ul>

                  <p className="mt-4">
                    The Company reserves the right to extend the delivery timeline where necessary.
                    The Company shall not be liable for delays beyond its reasonable control.
                  </p>
                </div>

                {/* 5 */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3 border-l-4 border-blue-500 pl-3">
                    5. Client Responsibilities
                  </h3>

                  <p>The client agrees to:</p>

                  <ul className="list-disc pl-6 space-y-2 mt-3">
                    <li>Provide accurate project requirements</li>
                    <li>Share necessary content, access, and credentials on time</li>
                    <li>Provide timely feedback and approvals</li>
                    <li>Make payments as agreed</li>
                  </ul>

                  <p className="mt-4">
                    Any delay from the client’s side may result in an extension of the project timeline.
                  </p>
                </div>

                {/* 6 */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3 border-l-4 border-blue-500 pl-3">
                    6. Intellectual Property Rights
                  </h3>

                  <p>
                    Ownership of the final deliverables will be transferred only after full payment is received.
                  </p>

                  <p className="mt-3">
                    Until full payment is made, all codes, designs, concepts, and materials
                    remain the property of Teknoro Software Solutions Pvt Ltd.
                  </p>

                  <p className="mt-3">
                    The Company reserves the right to showcase completed projects in its portfolio
                    unless otherwise agreed in writing.
                  </p>
                </div>

                {/* 7 */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3 border-l-4 border-blue-500 pl-3">
                    7. Confidentiality
                  </h3>

                  <p>
                    Both parties agree to maintain confidentiality of any proprietary or sensitive
                    information shared during the course of the project.
                  </p>
                </div>

                {/* 8 */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3 border-l-4 border-blue-500 pl-3">
                    8. Limitation of Liability
                  </h3>

                  <p>Teknoro Software Solutions Pvt Ltd shall not be liable for:</p>

                  <ul className="list-disc pl-6 space-y-2 mt-3">
                    <li>Indirect or consequential damages</li>
                    <li>Loss of revenue or business</li>
                    <li>Data loss caused by third-party services</li>
                    <li>Downtime caused by hosting providers or external integrations</li>
                  </ul>

                  <p className="mt-4">
                    Total liability shall not exceed the total amount paid for the specific project.
                  </p>
                </div>

                {/* 9 */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3 border-l-4 border-blue-500 pl-3">
                    9. Third-Party Services
                  </h3>

                  <p>
                    Projects involving third-party APIs, payment gateways, hosting providers,
                    or external platforms are subject to the terms of those providers.
                    The Company is not responsible for third-party service interruptions or policy changes.
                  </p>
                </div>

                {/* 10 */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3 border-l-4 border-blue-500 pl-3">
                    10. Termination
                  </h3>

                  <p>The Company reserves the right to terminate services if:</p>

                  <ul className="list-disc pl-6 space-y-2 mt-3">
                    <li>Payments are not made as agreed</li>
                    <li>The client breaches these terms</li>
                    <li>Misuse of services is detected</li>
                  </ul>

                  <p className="mt-4">No refunds will be issued upon termination.</p>
                </div>

                {/* 11 */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3 border-l-4 border-blue-500 pl-3">
                    11. Governing Law
                  </h3>

                  <p>
                    These Terms shall be governed by the laws of India.
                    Any disputes shall be subject to the jurisdiction of the appropriate courts in India.
                  </p>
                </div>

                {/* 12 */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3 border-l-4 border-blue-500 pl-3">
                    12. Updates to Terms
                  </h3>

                  <p>
                    The Company reserves the right to update these Terms & Conditions at any time
                    without prior notice. Continued use of our services constitutes acceptance
                    of the revised terms.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}

    </>
  );
};

export default Footer;
