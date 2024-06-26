'use client';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Hero from '../components/hero.js';
import Navbar from '../components/navbar';
import Gallery from '../components/gallery';
import Footer from '../components/footer';
import About from '../components/about';
import Services2 from '../components/services2';
import Contact from '../components/contact';

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end', 'end center'],
  });

  const contentSpring = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    mass: 0.2,
  });

  const scale = useTransform(contentSpring, [0.1, 1], ['100%', '90%']);

  return (
    <main className="flex flex-col items-center justify-between min-h-screen bg-primary">
      <motion.div
        ref={ref}
        style={{ scale }}
        className="z-50 flex flex-col items-center w-full pb-24 rounded-b-2xl bg-base-200"
      >
        <section className="flex flex-col items-center justify-center w-full h-screen text-center">
          <Navbar />
          <Hero />
          <div className=" md:min-h-48"></div>
        </section>
        <Services2 />

        <Gallery />
        {/*  <Contact />  */}
      </motion.div>

      <Footer />
    </main>
  );
}
