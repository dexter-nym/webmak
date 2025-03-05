"use client";

import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import FirstSection from "@/components/FirstSection/FirstSection";
import SecondSection from "@/components/SecondSection/SecondSection";
import ThirdSection from "@/components/ThirdSection/ThirdSection";
import FourthSection from "@/components/FourthSection/FourthSection";
import FifthSection from "@/components/FifthSection/FifthSection";
import SixthSection from "@/components/SixthSection/SixthSection";
import SeventhSection from "@/components/SeventhSection/SeventhSection";
import EighthSection from "@/components/EighthSection/EighthSection";
import Footer from "@/components/Footer/Footer";
import { React, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [bgHeight, setBgHeight] = useState("100vh");

  useEffect(() => {
    const img = new Image();
    img.src = "/background-design.png";
    img.onload = () => {
      setBgHeight(`${img.naturalHeight}px`);
    };

    const fadeUpElem = [
      { selector: ".hero-content-title", delay: 0 },
      { selector: ".hero-content-subtitle", delay: 0.1 },
      { selector: ".hero-content_btn-wrapper", delay: 0.2 },
      { selector: ".hero_tool_icon-wrap.left", delay: 0.3, x: -50 },
      { selector: ".hero_tool_icon-wrap.right", delay: 0.3, x: 50 },
      { selector: ".hero_tool_icon-wrap.left.mobile", delay: 0.3, x: -50 },
      { selector: ".hero_tool_icon-wrap.right.mobile", delay: 0.3, x: 50 },
    ];

    // Animate all elements on scroll
    fadeUpElem.forEach(({ selector, delay, x = 0 }) => {
      const element = document.querySelector(selector);
      if (!element) return;

      gsap.set(element, { opacity: 0, visibility: "hidden", "z-index": 10 });

      gsap.fromTo(
        element,
        { opacity: 0, y: 50, x, visibility: "hidden" }, // Apply x animation for left/right fade
        {
          opacity: 1,
          y: 0,
          x: 0,
          visibility: "visible",
          duration: 0.5,
          delay: delay,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Animation for .fade-up-desktop class
    gsap.utils.toArray(".fade-up-desktop").forEach((element) => {
      gsap.set(element, { opacity: 0, visibility: "hidden" });

      gsap.fromTo(
        element,
        { opacity: 0, y: 50, visibility: "hidden" }, // Fade up
        {
          opacity: 1,
          y: 0,
          visibility: "visible",
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Animation for .fade-in class
    gsap.utils.toArray(".fade-in").forEach((element) => {
      gsap.set(element, { opacity: 0, visibility: "hidden" });

      gsap.fromTo(
        element,
        { opacity: 0, y: 0, visibility: "hidden" }, // Fade up
        {
          opacity: 1,
          y: 0,
          visibility: "visible",
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Animation for .fade-up class
    gsap.utils.toArray(".fade-up").forEach((element) => {
      gsap.set(element, { opacity: 0, visibility: "hidden" });

      gsap.fromTo(
        element,
        { opacity: 0, y: 50, visibility: "hidden" }, // Fade up
        {
          opacity: 1,
          y: 0,
          visibility: "visible",
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Animation for .scale-up class
    gsap.utils.toArray(".scale-up").forEach((element) => {
      gsap.set(element, { opacity: 0, scale: 0, visibility: "hidden" });

      gsap.fromTo(
        element,
        { opacity: 0, scale: 0, visibility: "hidden" }, // Scale up
        {
          delay: 0.8,
          opacity: 1,
          scale: 1,
          visibility: "visible",
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Animate .logo_title immediately on page load
    const logoTitle = document.querySelector(".logo_title");
    if (logoTitle) {
      gsap.set(logoTitle, { opacity: 0, visibility: "hidden" });

      gsap.fromTo(
        logoTitle,
        { opacity: 0, y: 50, visibility: "hidden" },
        {
          opacity: 1,
          y: 0,
          visibility: "visible",
          duration: 0.5,
          delay: 0.4, // Match the timing of other elements
          ease: "power2.out",
        }
      );
    }
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <div className="main">
        <div className="scroll-trigger">
          <FirstSection />
          <SecondSection />
          <ThirdSection />
        </div>
        <FourthSection />
        <div className="scroll-trigger">
          <FifthSection />
          <SixthSection />
          <SeventhSection />
        </div>
        <EighthSection />
        <Footer />
      </div>
    </>
  );
}
