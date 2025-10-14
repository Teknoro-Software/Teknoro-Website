"use client";

import { useEffect, useState } from "react";
import Loader from "@/components/Loader";

import About from "@/components/About";
import Approach from "@/components/Approach";
import CompanyJourney from "@/components/companyJourney";
import Footer from "@/components/Footer";
import GetInTouch from "@/components/GetInTouch";
import Home from "@/components/Home";
import HomeNextPage from "@/components/HomeNextPage";
import IndustriesWeServe from "@/components/IndustriesWeServe";
import Navbar from "@/components/Navbar";
import Partners from "@/components/Partners";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import TechnologyStack from "@/components/TechnologyStack";
import WhoSection from "@/components/Who";
// import ScrollStack from "./ScrollStack";

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loader overlay */}
      <Loader loading={loading} />

      {/* Main content */}
      <main
        className={`${
          loading ? "opacity-0" : "opacity-100"
        } transition-opacity duration-700`}
      >
        <Navbar />

        <section id="navbar">
          <Navbar />
        </section>

        <section id="home">
          <Home />
        </section>

        <section id="homenextpage">
          <HomeNextPage />
        </section>

        <section id="who">
          <WhoSection />
        </section>

        {/* <section id="journey">
          <CompanyJourney />
        </section> */}

        <section id="services">
          <Services />
        </section>

        <section id="approach">
          <Approach />
        </section>

        <section id="technologystack">
          <TechnologyStack />
        </section>

        {/* <section id="industry">
          <IndustriesWeServe />
        </section> */}

        <section id="about">
          <About />
        </section>

        {/* <section id="partners">
          <Partners />
        </section> */}

        <section id="contact">
          <GetInTouch />
        </section>

        <Footer />
      </main>
    </>
  );
}
