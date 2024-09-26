"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import Hero from "../components/hero.js";
import Navbar from "../components/navbar";
import Gallery from "../components/gallery";
import Footer from "../components/footer";
import Services from "../components/services.js";
import Sidebar from "../components/sidebar.js";

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

  const scale = useTransform(contentSpring, [0.1, 1], ["100%", "92%"]);
  const y = useTransform(contentSpring, [0.1, 1], ["0vh", "10vh"]);

  return (
    <main className="relative flex flex-col items-center justify-between min-h-screen bg-secondary">
      <motion.div
        ref={ref}
        style={{ scale, y }}
        className="z-10 flex flex-col items-center w-full pb-24 rounded-b-2xl bg-base-100"
      >
        <Hero />
        <Services />
        <Gallery />
      </motion.div>
      <Footer />
    </main>
  );
}
