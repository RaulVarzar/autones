import {
  motion,
  useInView,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const Gallery = () => {
  const images = require.context("../public/tractari", true);
  const imageList = images.keys().map((image) => images(image));

  const [hovering, setHovering] = useState(null);

  const ref = useRef(null);
  const secondaryRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start center"],
  });

  const animateScale = useTransform(scrollYProgress, [0, 0.7], ["85%", "100%"]);
  const enterY = useTransform(scrollYProgress, [0, 1], ["15vh", "0vh"]);

  const { scrollYProgress: exitProgress } = useScroll({
    target: secondaryRef,
    offset: ["end", "end -0.2"],
  });

  const scale = useTransform(exitProgress, [0.2, 1], ["100%", "92%"]);
  const exitY = useTransform(exitProgress, [0, 1], ["0%", "20%"]);

  return (
    <>
      <motion.section
        ref={ref}
        style={{ y: enterY }}
        className="top-0 grid w-full px-2 py-4 mx-auto overflow-hidden sm:sticky sm:h-screen place-content-center sm:py-20 lg:px-6"
      >
        <motion.div
          style={{ y: exitY }}
          className="z-0 grid w-full grid-cols-1 gap-1 mx-auto h-fit sm:grid-cols-2 md:grid-cols-3 sm:gap-2 lg:gap-4 max-w-screen-3xl"
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
      </motion.section>
      <motion.div ref={secondaryRef} className="h-0" />
    </>
  );
};

export default Gallery;

const Photo = ({ image, index, active, setActive }) => {
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
    offset: ["start end", " 0.9 end"],
  });
  const clipPath1 = useTransform(clipPathProgress, [0, 1], [20, 0]);
  const clipPath2 = useTransform(clipPathProgress, [0, 1], [70, 100]);

  const clipPath = useMotionTemplate`polygon(0% ${clipPath1}% , 100% ${clipPath1}%,100% ${clipPath2}% , 0% ${clipPath2}% )`;

  return (
    <motion.div
      ref={imageRef}
      style={{ scale: cardScale, clipPath }}
      onHoverStart={() => setActive(index)}
      onHoverEnd={() => setActive(null)}
      className={`w-full aspect-video sm:aspect-4/3 border-3 border-base-100 relative cursor-pointer overflow-hidden rounded-xl m-auto max-w-7xl mx-auto`}
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
            className="object-cover w-full h-full "
          />
        </PhotoView>
      </PhotoProvider>
    </motion.div>
  );
};
