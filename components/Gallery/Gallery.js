"use client";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const Gallery = () => {
  const images = require.context("../../public/tractari", true);
  const imageList = images.keys().map((image) => images(image));

  const [hovering, setHovering] = useState(null);

  const secondaryRef = useRef(null);

  const { scrollYProgress: exitProgress } = useScroll({
    target: secondaryRef,
    offset: ["start 0.7", "start"],
  });

  const exitY = useTransform(exitProgress, [0, 1], ["0vh", "25vh"]);

  return (
    <div className="relative">
      <motion.div
        style={{ y: exitY }}
        className=" z-0 grid w-full grid-cols-1 gap-4 pb-[25vh] mx-auto px-6 sm:px-10 sm:grid-cols-2 lg:grid-cols-3 sm:gap-3 lg:gap-6 max-w-screen-3xl"
      >
        {imageList.map((image, index) => (
          <Photo
            key={index}
            index={index}
            image={image}
            setActive={setHovering}
            active={hovering}
          />
        ))}
      </motion.div>

      <motion.div ref={secondaryRef} className="h-0" />
    </div>
  );
};

export default Gallery;

const Photo = ({ image, index, setActive, active }) => {
  const variants = {
    hidden: {
      filter: "blur(8px)",
    },
    visible: {
      filter: "blur(0px)",
      transition: {
        ease: [0.25, 0.1, 0.25, 1],
        duration: 0.7,
      },
    },
  };

  const imageRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-18%", "10%"]);

  const { scrollYProgress: cardEnterProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "center end"],
  });
  const cardScale = useTransform(cardEnterProgress, [0, 1], ["97%", "100%"]);

  const imgInView = useInView(imageRef, { margin: "0% 0% -15% 0%" });
  const isBlurred = active != index + 1 && active;

  return (
    <motion.div
      ref={imageRef}
      style={{ scale: cardScale }}
      onHoverStart={() => setActive(index + 1)}
      onHoverEnd={() => setActive(null)}
      className={`w-full aspect-video sm:aspect-4/3  border-base-100 relative cursor-pointer overflow-hidden rounded-3xl m-auto max-w-7xl mx-auto`}
    >
      <PhotoProvider>
        <PhotoView src={image.default.src}>
          <motion.div
            className="w-full h-full "
            variants={variants}
            initial="hidden"
            animate={imgInView && !isBlurred ? "visible" : "hidden"}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={image.default.src}
              alt={`image-${image.default.src}`}
              style={{ y, scale: 1.02 }}
              width={480}
              height={420}
              quality={90}
              className="object-cover w-full h-full "
            />
          </motion.div>
        </PhotoView>
      </PhotoProvider>
    </motion.div>
  );
};
