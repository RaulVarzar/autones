"use client";

import { useEffect, useState } from "react";
import Navbar from "components/navbar";
import Hero from "../components/hero.js";
import Gallery from "../components/gallery";
import Footer from "../components/footer";
import Services from "../components/services.js";
import AboutSection from "../components/About/AboutSection.js";

export default function Home() {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  const [colored, setColored] = useState(false);
  return (
    <main className="bg-base-100">
      <Navbar colored={colored} />
      <Hero />
      <Services />
      <Gallery />
      <AboutSection sectionIsActive={(e) => setColored(e)} />
      <Footer />
    </main>
  );
}
