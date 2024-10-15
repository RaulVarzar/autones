"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Navbar from "components/navbar";
import Hero from "../components/hero.js";
import Gallery from "../components/gallery";
import Footer from "../components/footer";
import Services from "../components/services.js";
import AboutSection from "../components/About/AboutSection.js";

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end", "end center"],
  });
  // useEffect(() => {
  //   window.history.scrollRestoration = "manual";
  // }, []);

  const scale = useTransform(scrollYProgress, [0.1, 1], ["100%", "97%"]);
  const y = useTransform(scrollYProgress, [0.1, 1], ["0vh", "3vh"]);

  const [colored, setColored] = useState(false);
  return (
    <main>
      <Navbar colored={colored} />
      <motion.div
        ref={ref}
        style={{ scale, y }}
        className="z-10 bg-base-100 rounded-b-3xl"
      >
        <Hero />

        <Services />
        <Gallery />
        <AboutSection sectionIsActive={(e) => setColored(e)} />
      </motion.div>
      <Footer />
    </main>
  );
}
