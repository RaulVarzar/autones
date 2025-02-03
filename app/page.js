import Navbar from "components/Navbar/Navbar.js";
import Hero from "components/Hero/Hero.js";
import Gallery from "components/Gallery/Gallery.js";
import Footer from "./components/Footer/Footer";
import Services from "components/Services/Services";
import AboutSection from "components/About/AboutSection.js";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="home" className="relative z-10 ">
        <div className="bg-base-100">
          <Hero />
          <Services />
          <Gallery />
        </div>
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}
