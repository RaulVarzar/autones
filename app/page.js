"use client";
import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Logo } from "@/components/logo";

const IMAGES = ["/main1.jpg", "/main2.jpg", "/main3.jpg"];

export default function Home() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 0.5"],
  });

  const contentSpring = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 16,
    mass: 0.2,
  });

  const photoScale = useTransform(contentSpring, [0, 1], ["30%", "100%"]);
  const photoY = useTransform(contentSpring, [0, 1], ["-70%", "0%"]);
  const borderRadius = useTransform(contentSpring, [0, 1], ["200px", "30px"]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <section className="h-screen flex flex-col w-full text-center justify-center items-center">
        <div className="flex w-full items-center justify-between py-4 md:py-8 xl:py-12 h-fit max-w-[2000px] px-8 md:px-12 xl:px-24">
          <Logo />
          <button className="btn btn-lg btn-outline rounded-full px-10 font-light">
            CONTACT
          </button>
        </div>
        <Hero />
      </section>
      <section ref={ref} className="min-h-screen w-full flex flex-col gap-8">
        <motion.div
          initial={{ opacity: 0, y: "30px", scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.35, ease: "easeInOut" }}
        >
          <motion.img
            style={{ borderRadius, scale: photoScale, y: photoY }}
            src={IMAGES[0]}
            className="mx-auto w-11/12 md:w-8/12 max-w-6xl mt-[2vh]"
          />
        </motion.div>
        <Services />
      </section>
    </main>
  );
}
