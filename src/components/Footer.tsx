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
                TERMS & CONDITIONS
              </h2>

              <p className="text-blue-400 font-medium">
                Teknoro Software Solutions Pvt Ltd
              </p>

              <p className="text-gray-400 text-sm mt-1">
                (An Indian Company incorporated under the Companies Act, 2013)
              </p>

              <p className="text-gray-400 text-sm mb-6">
                Effective Date: [Insert Date]
              </p>

              <div className="space-y-8 text-sm leading-relaxed text-gray-300">

                <div>
                  <p>
                    These Terms & Conditions (“Terms”) constitute a legally binding agreement between
                    Teknoro Software Solutions Pvt Ltd (“Company”, “We”, “Us”, “Our”) and any person or
                    entity (“Client”, “User”, “You”) accessing our website or availing our services.
                  </p>
                  <p className="mt-3">
                    These Terms are governed by the Indian Contract Act, 1872, the Information Technology Act, 2000,
                    and other applicable laws of India.
                  </p>
                  <p className="mt-3">
                    By engaging our services or accessing our website, you agree to be bound by these Terms.
                  </p>
                </div>

                {/* 1 */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3 border-l-4 border-blue-500 pl-3">
                    1. Scope of Services
                  </h3>
                  <p>
                    The Company provides software development, web and mobile application development,
                    IT consulting, digital solutions, maintenance, and related technology services as
                    agreed through written proposals, quotations, work orders, or agreements.
                  </p>
                  <p className="mt-3">
                    The scope of services shall be limited strictly to what is expressly agreed in writing.
                  </p>
                </div>

                {/* 2 */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3 border-l-4 border-blue-500 pl-3">
                    2. Formation of Contract
                  </h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>The Client approves the proposal/quotation in writing (including email confirmation), and</li>
                    <li>The agreed advance payment is received by the Company.</li>
                  </ul>
                  <p className="mt-3">
                    Electronic records and communications shall be valid and enforceable under the Information Technology Act, 2000.
                  </p>
                </div>

                {/* 3 */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3 border-l-4 border-blue-500 pl-3">
                    3. Payment Terms
                  </h3>

                  <p>3.1 Payments must be made strictly as per the agreed schedule.</p>
                  <p className="mt-2">3.2 Work shall commence only after receipt of the agreed advance payment.</p>
                  <p className="mt-2">3.3 Any additional work beyond the approved scope shall be subject to additional charges.</p>

                  <p className="mt-4 font-semibold text-blue-400">3.4 No Refund Policy</p>

                  <p className="mt-2">
                    All payments made to the Company are strictly non-refundable, including but not limited to:
                  </p>

                  <ul className="list-disc pl-6 space-y-2 mt-3">
                    <li>Project cancellation by the Client</li>
                    <li>Change in requirements after project commencement</li>
                    <li>Delay caused by the Client</li>
                    <li>Dissatisfaction after work has begun</li>
                  </ul>

                  <p className="mt-3">
                    These are mutually agreed commercial terms enforceable under the Indian Contract Act, 1872.
                  </p>
                </div>

                {/* 4 */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3 border-l-4 border-blue-500 pl-3">
                    4. Delay or Failure in Payment
                  </h3>

                  <ul className="list-disc pl-6 space-y-2">
                    <li>The Company shall have the right to immediately suspend or stop services.</li>
                    <li>Access to deliverables, servers, hosting, or software may be restricted.</li>
                    <li>Project timelines shall automatically extend proportionate to the delay period.</li>
                  </ul>

                  <p className="mt-3">
                    The Company shall not be liable for any losses arising due to suspension caused by non-payment.
                  </p>
                </div>

                {/* 5 */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3 border-l-4 border-blue-500 pl-3">
                    5. Project Timeline
                  </h3>

                  <p>
                    All timelines provided are estimated timelines and not guaranteed deadlines unless expressly agreed in writing.
                  </p>

                  <p className="mt-3">Project delivery may be delayed due to:</p>

                  <ul className="list-disc pl-6 space-y-2 mt-3">
                    <li>Change in project scope</li>
                    <li>Delay in approvals or feedback</li>
                    <li>Technical limitations</li>
                    <li>Third-party service dependencies</li>
                    <li>Force majeure events</li>
                  </ul>

                  <p className="mt-3">
                    The Company reserves the right to extend delivery timelines when reasonably required.
                  </p>
                </div>

                {/* 6 */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3 border-l-4 border-blue-500 pl-3">
                    6. No Partnership / No Shareholding / No Revenue Sharing
                  </h3>

                  <p>Teknoro Software Solutions Pvt Ltd operates strictly as a service provider.</p>

                  <ul className="list-disc pl-6 space-y-2 mt-3">
                    <li>No partnership basis projects.</li>
                    <li>No equity, shares, profit-sharing, or revenue-sharing arrangements in place of service fees.</li>
                    <li>No joint venture, agency, employment, or partnership relationship unless executed through a separate written agreement signed by authorized directors.</li>
                  </ul>

                  <p className="mt-3">
                    Nothing contained herein shall be construed as creating a partnership under the Indian Partnership Act, 1932.
                  </p>
                </div>

                {/* 7 */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3 border-l-4 border-blue-500 pl-3">
                    7. Client Obligations
                  </h3>

                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide accurate and complete project requirements</li>
                    <li>Provide timely approvals and feedback</li>
                    <li>Share necessary credentials and content</li>
                    <li>Make payments as agreed</li>
                  </ul>

                  <p className="mt-3">
                    Failure to comply may result in project delays or additional charges.
                  </p>
                </div>

                {/* 8 */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3 border-l-4 border-blue-500 pl-3">
                    8. Intellectual Property Rights
                  </h3>

                  <p>
                    Ownership of final deliverables shall transfer only after full payment is received.
                  </p>

                  <p className="mt-3">
                    Until full payment is made, all source codes, designs, frameworks, and documentation remain the exclusive property of the Company.
                  </p>

                  <p className="mt-3">
                    The Company retains rights to reuse general knowledge, experience, and non-confidential components.
                  </p>
                </div>

                {/* 9 */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3 border-l-4 border-blue-500 pl-3">
                    9. Confidentiality
                  </h3>
                  <p>
                    Both parties agree to maintain confidentiality of proprietary information shared during the project.
                  </p>
                  <p className="mt-3">
                    Confidentiality obligations shall survive termination of services.
                  </p>
                </div>

                {/* 10 */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3 border-l-4 border-blue-500 pl-3">
                    10. Limitation of Liability
                  </h3>

                  <ul className="list-disc pl-6 space-y-2">
                    <li>The Company shall not be liable for indirect, incidental, special, or consequential damages.</li>
                    <li>The Company shall not be liable for loss of profits, data, business opportunity, or goodwill.</li>
                    <li>Total liability shall not exceed the total fees paid by the Client for the specific project.</li>
                  </ul>
                </div>

                {/* 11 */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3 border-l-4 border-blue-500 pl-3">
                    11. Third-Party Services
                  </h3>
                  <p>
                    Projects involving third-party APIs, hosting providers, payment gateways, or external platforms are subject to the terms of those providers.
                  </p>
                  <p className="mt-3">
                    The Company shall not be responsible for downtime, pricing changes, policy updates, or failures caused by third parties.
                  </p>
                </div>

                {/* 12 */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3 border-l-4 border-blue-500 pl-3">
                    12. Indemnification
                  </h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Use or misuse of delivered software</li>
                    <li>Violation of applicable laws</li>
                    <li>Content or data provided by the Client</li>
                  </ul>
                </div>

                {/* 13 */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3 border-l-4 border-blue-500 pl-3">
                    13. Termination
                  </h3>

                  <ul className="list-disc pl-6 space-y-2">
                    <li>Payment defaults occur</li>
                    <li>The Client breaches these Terms</li>
                    <li>Illegal or unlawful usage of services is detected</li>
                  </ul>

                  <p className="mt-3">No refunds shall be provided upon termination.</p>
                </div>

                {/* 14 */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3 border-l-4 border-blue-500 pl-3">
                    14. Governing Law & Jurisdiction
                  </h3>

                  <p>
                    These Terms shall be governed by and construed in accordance with the laws of India.
                  </p>

                  <p className="mt-3">
                    Any disputes arising out of or relating to these Terms shall be subject to the exclusive jurisdiction of the competent courts at Cochin (Kochi), Kerala, India.
                  </p>
                </div>

                {/* 15 */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3 border-l-4 border-blue-500 pl-3">
                    15. Force Majeure
                  </h3>
                  <p>
                    The Company shall not be liable for failure to perform obligations due to events beyond reasonable control,
                    including but not limited to natural disasters, strikes, government restrictions, cyber incidents, pandemics,
                    or other force majeure events.
                  </p>
                </div>

                {/* 16 */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3 border-l-4 border-blue-500 pl-3">
                    16. Amendments
                  </h3>
                  <p>
                    The Company reserves the right to modify these Terms at any time.
                    Updated Terms shall become effective upon publication on the website.
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
