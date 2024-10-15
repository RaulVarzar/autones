import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const Gallery = () => {
  const images = require.context("../public/tractari", true);
  const imageList = images.keys().map((image) => images(image));

  const ref = useRef(null);
  const secondaryRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const contentSpring = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 16,
    mass: 0.1,
  });

  const animateScale = useTransform(contentSpring, [0, 0.7], ["85%", "100%"]);
  const animateY = useTransform(contentSpring, [0, 0.9], ["15vh", "0vh"]);

  const { scrollYProgress: exitProgress } = useScroll({
    target: secondaryRef,
    offset: ["end", "start"],
  });
  const exitSpring = useSpring(exitProgress, {
    stiffness: 150,
    damping: 16,
    mass: 0.2,
  });
  const scale = useTransform(exitSpring, [0.2, 1], ["100%", "92%"]);
  const y = useTransform(exitSpring, [0.2, 1], ["0vh", "10vh"]);
  const opacity = useTransform(exitSpring, [0.99, 1], ["100%", "0%"]);

  return (
    <>
      <motion.section
        ref={ref}
        style={{ scale, y: animateY, opacity }}
        className="sticky top-0 w-full px-2 py-4 mx-auto sm:py-20 lg:px-6"
      >
        <motion.div
          style={{ scale: animateScale, y }}
          className="sticky top-[10vh] mx-auto  grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-screen-3xl"
        >
          {imageList.map((image, index) => (
            <Photo key={index} index={index} image={image} />
          ))}
        </motion.div>

        <div className="h-[50vh] max-sm:hidden"></div>
      </motion.section>
      <motion.div ref={secondaryRef} className="h-0 " />
    </>
  );
};

export default Gallery;

const Photo = ({ image, index }) => {
  const imageRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });

  const rawScale = useTransform(
    scrollYProgress,
    [0, 0.4, 0.65, 1],
    ["94%", "100%", "100%", "92%"]
  );
  const y = useTransform(scrollYProgress, [0, 1], ["-18%", "18%"]);
  const opacity = useTransform(
    scrollYProgress,
    [0.15, 0.3, 0.75, 0.85],
    ["0%", "100%", "100%", "0%"]
  );

  const scale = useSpring(rawScale, { stiffness: 70, damping: 15, mass: 0.2 });

  return (
    <motion.div
      ref={imageRef}
      className={`w-full aspect-4/3 cursor-pointer overflow-hidden rounded-md inset-0 m-auto max-w-7xl mx-auto`}
    >
      <PhotoProvider>
        <PhotoView src={image.default.src}>
          <motion.img
            src={image.default.src}
            alt={`image-${image.default.src}`}
            style={{ y, scale: 1.2 }}
            whileHover={{ scale: 1.25 }}
            transition={{ duration: 0.3 }}
            className="object-cover w-full h-full"
          />
        </PhotoView>
      </PhotoProvider>
    </motion.div>
  );
};
