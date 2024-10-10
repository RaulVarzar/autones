"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
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
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  const scale = useTransform(scrollYProgress, [0.1, 1], ["100%", "97%"]);
  const y = useTransform(scrollYProgress, [0.1, 1], ["0vh", "3vh"]);

  const [colored, setColored] = useState(false);
  return (
    <main>
      <motion.div
        ref={ref}
        style={{ scale, y }}
        className={`z-10 flex flex-col items-center w-full pb-48 rounded-b-2xl transition-colors  duration-500  ${
          colored ? "bg-base-300" : " bg-base-100"
        }`}
      >
        {/* <div className="p-4 bg-indigo-950 rounded-2xl"> */}
        <Hero />
        {/* </div> */}
        <Services sectionIsActive={(e) => setColored(e)} />
        <Gallery />
        {/* <Testimonials /> */}
      </motion.div>
      <Footer />
    </main>
  );
}
