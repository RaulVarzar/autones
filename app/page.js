import Navbar from "components/navbar";
import Hero from "../components/Hero/Hero.js";
import Gallery from "../components/gallery";
import Footer from "../components/Footer/footer.js";
import Services from "../components/services.js";
import AboutSection from "../components/About/AboutSection.js";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative z-10 ">
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
