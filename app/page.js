"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import Hero from "../components/hero.js";
import Navbar from "../components/navbar";
import Gallery from "../components/gallery";
import Footer from "../components/footer";
import About from "../components/about";
import Services from "../components/services.js";
import Contact from "../components/contact";

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end", "end center"],
  });

  const contentSpring = useSpring(scrollYProgress, {
    stiffness: 350,
    damping: 50,
    mass: 0.1,
  });

  const scale = useTransform(contentSpring, [0.1, 1], ["100%", "85%"]);
  const y = useTransform(contentSpring, [0.1, 1], ["0vh", "10vh"]);

  return (
    <main className="flex flex-col items-center justify-between min-h-screen bg-primary">
      <Navbar />
      <motion.div
        ref={ref}
        style={{ scale, y }}
        className="z-10 flex flex-col items-center w-full pb-24 rounded-b-2xl bg-base-200"
      >
        <Hero />
        <Services />
        <Gallery />
        {/*  <Contact />  */}
      </motion.div>
      <Footer />
    </main>
  );
}
