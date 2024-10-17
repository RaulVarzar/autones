import {
  motion,
  useInView,
  useMotionTemplate,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
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
    offset: ["start end", "start"],
  });

  const contentSpring = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 16,
    mass: 0.1,
  });

  const animateScale = useTransform(contentSpring, [0, 0.7], ["85%", "100%"]);
  const animateY = useTransform(contentSpring, [0, 1], ["25vh", "0vh"]);

  const { scrollYProgress: exitProgress } = useScroll({
    target: secondaryRef,
    offset: ["end", "start"],
  });

  const scale = useTransform(exitProgress, [0.2, 1], ["100%", "92%"]);
  const y = useTransform(exitProgress, [0, 0.2, 1], ["0vh", "20vh", "150vh"]);
  const opacity = useTransform(exitProgress, [0.99, 1], ["100%", "0%"]);

  return (
    <>
      <motion.section
        ref={ref}
        style={{ scale, y: animateY, opacity }}
        className="top-0 grid w-full min-h-screen px-2 py-4 mx-auto overflow-visible place-content-center sm:py-20 lg:px-6"
      >
        <motion.div
          style={{ scale: animateScale, y }}
          className="  tp-[10vh] h-fit mx-auto grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-screen-3xl"
        >
          {imageList.map((image, index) => (
            <Photo key={index} index={index} image={image} />
          ))}
        </motion.div>

        {/* <div className="h-[50vh] max-sm:hidden"></div> */}
      </motion.section>
      <motion.div ref={secondaryRef} className="h-0 " />
    </>
  );
};

export default Gallery;

const Photo = ({ image }) => {
  const variants = {
    hidden: {
      filter: "blur(10px)",
    },
    visible: {
      filter: "blur(0px)",
      transition: {
        ease: [0.25, 0.1, 0.25, 1],
        duration: 0.8,
        delay: 0.2,
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

  const { scrollYProgress: clipPathProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end"],
  });
  const clipPath1 = useTransform(clipPathProgress, [0, 1], [30, 0]);
  const clipPath2 = useTransform(clipPathProgress, [0, 1], [70, 100]);

  const clipPath = useMotionTemplate`polygon(0% ${clipPath1}% , 100% ${clipPath1}%,100% ${clipPath2}% , 0% ${clipPath2}% )`;

  return (
    <motion.div
      ref={imageRef}
      style={{ scale: cardScale, clipPath }}
      className={`w-full aspect-video sm:aspect-4/3  cursor-pointer overflow-hidden rounded-md inset-0 m-auto max-w-7xl mx-auto`}
    >
      <PhotoProvider>
        <PhotoView src={image.default.src}>
          <motion.img
            variants={variants}
            initial="hidden"
            animate={imgInView ? "visible" : "hidden"}
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
