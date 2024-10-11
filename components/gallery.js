import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const Gallery = () => {
  const images = require.context("../public/tractari", true);
  const imageList = images.keys().map((image) => images(image));

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const contentSpring = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 16,
    mass: 0.2,
  });

  const scale = useTransform(contentSpring, [0, 1], ["85%", "100%"]);
  const y = useTransform(contentSpring, [0, 1], ["15vh", "0vh"]);

  return (
    <motion.section
      ref={ref}
      // style={{ scale, y }}
      className="relative w-full px-2 py-4 mx-auto sm:py-20 lg:px-6"
    >
      <div className="flex flex-col flex-wrap gap-[40vh] pt-[10vh] pb-[30vh] mx-auto max-w-screen-2xl">
        {imageList.map((image, index) => (
          <Photo key={index} index={index} image={image} />
        ))}
      </div>
    </motion.section>
  );
};

export default Gallery;

const Photo = ({ image, index }) => {
  const imageRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["center end", "end start"],
  });

  const rawScale = useTransform(
    scrollYProgress,
    [0, 0.4, 0.65, 1],
    ["94%", "100%", "100%", "92%"]
  );
  const y = useTransform(scrollYProgress, [0, 0.9, 1], ["-50%", "100%", "50%"]);
  const opacity = useTransform(
    scrollYProgress,
    [0.15, 0.3, 0.75, 0.85],
    ["0%", "100%", "100%", "0%"]
  );

  const scale = useSpring(rawScale, { stiffness: 70, damping: 15, mass: 0.2 });

  return (
    <motion.div
      ref={imageRef}
      className={`p-2 w-full h-[65vh] max-w-7xl mx-auto  flex ${
        (index + 1) / 3 === 1
          ? "justify-center"
          : index % 2 === 0 && "justify-end"
      }`}
    >
      {/* <div className="max-w-5xl "> */}
      <PhotoProvider>
        <PhotoView src={image.default.src}>
          <motion.img
            src={image.default.src}
            alt={`image-${image.default.src}`}
            // initial={{ opacity: 0, y: "10vh", scale: 0.96 }}
            // whileInView={{ opacity: 1, y: "0vh", scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.2,
              ease: "easeInOut",
            }}
            style={{ scale: rawScale, y, opacity }}
            className="object-cover w-auto h-full rounded-3xl "
          />
        </PhotoView>
      </PhotoProvider>
      {/* </div> */}
    </motion.div>
  );
};
