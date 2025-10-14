"use client";

import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaUser, FaMobileAlt, FaRegCommentDots } from "react-icons/fa";
import { useState } from "react";
import { Raleway, Roboto } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // you can adjust weights
});

export default function GetInTouch() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  // Replace with your Google Apps Script Web App URL
  const SCRIPT_URL: string =
    "https://script.google.com/macros/s/AKfycbyWkLxUxX65cqh79_nSbV0By_COfPEZ7xX-SeenpXhdrP4xPYe02_uQ00AhL_9zvm82Cg/exec";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setLoading(true);

  try {
    const response = await fetch(SCRIPT_URL, {
      redirect: "follow",
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
    });

    const resultText = await response.text();
    const result = JSON.parse(resultText);

    if (response.ok && result.status === "success") {
      setSuccess("Message sent successfully ✅");
    } else {
      console.error("Error submitting form:", result.message || response.statusText);
    }
  } catch (error) {
    console.error("Error submitting form:", error);
  } finally {
    // ✅ Always clear form after submission
    setFormData({ name: "", email: "", mobile: "", message: "" });
    setLoading(false);
  }
};


  return (
    <section
      className={`py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden ${raleway.className}`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 sm:mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Get In <span className="text-[#5AD6FF]">Touch</span>
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="h-1 bg-[#5AD6FF] rounded-full mb-8 sm:mb-12"
          ></motion.div>

          <motion.p
            className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Get in touch with us today and discover how we can help your business
            grow and succeed. We can&apos;t wait to hear from you!
          </motion.p>

          <div className="grid sm:grid-cols-2 gap-6">
            {/* Card 1 */}
            <motion.div
              className="bg-white shadow-md rounded-xl p-6  "
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-slate-950 p-3 rounded-full">
                  <FaPhoneAlt className="text-white text-xl" />
                </div>
              </div>
              <h3 className="font-bold text-lg mb-2">Let&apos;s Talk</h3>
              <p className="text-gray-500 text-sm">
                Just pick up the phone to chat with a member of our sales team.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="bg-white shadow-md rounded-xl p-6 "
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-slate-950 p-3 rounded-full">
                  <FaEnvelope className="text-white text-xl" />
                </div>
              </div>
              <h3 className="font-bold text-lg mb-2">Write Us</h3>
              <p className="text-gray-500 text-sm">
                We are always delighted to receive your inquiries and engage in
                discussions.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT SIDE (Form) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <form className="space-y-4 w-full" onSubmit={handleSubmit}>
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name*"
                className="w-full pl-10 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B0B6E] text-gray-600"
                required
              />
            </div>

            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address*"
                className="w-full pl-10 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B0B6E] text-gray-600"
                required
              />
            </div>
      <div className="relative">
              <FaMobileAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Enter your mobile*"
                className={`w-full pl-10 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B0B6E] text-gray-600 ${roboto.className}`}
                required
              />
            </div>

            <div className="relative">
              <FaRegCommentDots className="absolute left-3 top-3 text-gray-400" />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message*"
                rows={4}
                className="w-full pl-10 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B0B6E] text-gray-600"
                required
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className="bg-slate-950 text-white px-6 py-3 rounded-full hover:bg-[#0a0a5a] transition w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>

            {success && (
              <p className="text-center mt-2 text-sm text-green-600">
                {success}
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
