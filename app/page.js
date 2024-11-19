import Navbar from "components/navbar";
import Hero from "../components/hero.js";
import Gallery from "../components/gallery";
import Footer from "../components/Footer/footer.js";
import Services from "../components/services.js";
import AboutSection from "../components/About/AboutSection.js";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative z-10 bg-base-100">
        <Hero />
        <Services />
        <Gallery />
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}
