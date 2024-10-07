"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import Hero from "../components/hero.js";
import Gallery from "../components/gallery";
import Footer from "../components/footer";
import Services from "../components/services.js";
import Testimonials from "../components/testimonials/testimonials.js";

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end", "end center"],
  });

  // const contentSpring = useSpring(scrollYProgress, {
  //   stiffness: 350,
  //   damping: 50,
  //   mass: 0.1,
  // });

  const scale = useTransform(scrollYProgress, [0.1, 1], ["100%", "92%"]);
  const y = useTransform(scrollYProgress, [0.1, 1], ["0vh", "3vh"]);

  return (
    <main>
      <motion.div
        ref={ref}
        style={{ scale, y }}
        className="z-10 flex flex-col items-center w-full pb-24 rounded-b-2xl bg-base-100"
      >
        <Hero />
        <Services />
        <Gallery />
        <Testimonials />
      </motion.div>
      <Footer />
    </main>
  );
}
