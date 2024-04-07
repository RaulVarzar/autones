import { useScroll, useSpring, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const Footer = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "0.8 end"],
  });

  const contentSpring = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 20,
    mass: 0.4,
  });

  const scale = useTransform(contentSpring, [0, 1], ["95%", "100%"]);
  const y = useTransform(contentSpring, [0, 1], ["-2vh", "0vh"]);
  const opacity = useTransform(
    contentSpring,
    [0.2, 0.8, 1],
    ["30%", "40%", "100%"]
  );

  return (
    <div
      ref={ref}
      className="w-full px-4 py-4 mx-auto bg-opacity-75 md:px-24 lg:px-48 h-fit"
    >
      <motion.div
        style={{ scale, y, opacity }}
        className="flex flex-col justify-center gap-6 mb-8 md:flex-row md:gap-24 h-fit "
      >
        <div>
          <span className="text-xl font-bold tracking-wide uppercase md:text-3xl">
            Autones
          </span>
          <div className="mt-6 ml-4 lg:max-w-md opacity-60">
            <p className="text-sm md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </p>
            <p className="mt-4 text-sm md:text-lg">
              Eaque ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo.
            </p>
          </div>
        </div>
        <div className="space-y-2 text-lg md:space-y-4">
          <div className="flex flex-col ">
            <p className="leading-none opacity-60">Telefon:</p>
            <a
              href="tel:0744-765-543"
              aria-label="Our phone"
              title="Our phone"
              className="text-xl font-bold transition-colors duration-300"
            >
              0744.765.543
            </a>
          </div>
          <div className="flex flex-col gap-0">
            <p className="leading-none opacity-60">Email:</p>
            <a
              href="mailto:info@lorem.mail"
              aria-label="Our email"
              title="Our email"
              className="text-xl font-bold transition-colors duration-300"
            >
              info@lorem.mail
            </a>
          </div>
          <div className="flex flex-col">
            <p className="leading-none opacity-60">Adresa:</p>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Adresa"
              title="Adresa noastra"
              className="text-xl font-bold transition-colors duration-300"
            >
              Strada bla bla bla, nr 32
            </a>
          </div>
          <div className="flex items-center mt-1 space-x-3 md:space-x-4">
            <a
              href="/"
              className="text-2xl transition-opacity duration-300 opacity-70 hover:opacity-100 md:text-4xl "
            >
              <i className="fa-brands fa-square-facebook"></i>
            </a>
            <a
              href="/"
              className="text-2xl transition-opacity duration-300 opacity-70 hover:opacity-100 md:text-4xl "
            >
              <i className="fa-brands fa-square-instagram"></i>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;
