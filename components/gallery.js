import {
  AnimatePresence,
  motion,
  useInView,
  useMotionTemplate,
  useScroll,
  useSpring,
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
    offset: ["start end", "start"],
  });

  const contentSpring = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 16,
    mass: 0.1,
  });

  const animateScale = useTransform(contentSpring, [0, 0.7], ["85%", "100%"]);
  const animateY = useTransform(contentSpring, [0, 1], ["15vh", "0vh"]);

  const { scrollYProgress: exitProgress } = useScroll({
    target: secondaryRef,
    offset: ["end", "end -0.2"],
  });

  const scale = useTransform(exitProgress, [0.2, 1], ["100%", "92%"]);
  const y = useTransform(exitProgress, [0, 1], ["0vh", "150vh"]);
  const opacity = useTransform(exitProgress, [0.99, 1], ["100%", "0%"]);

  return (
    <>
      <motion.section
        ref={ref}
        style={{ scale, y: animateY }}
        className="top-0 grid w-full  min-h-screen px-2 py-4 mx-auto overflow-visible place-content-center sm:py-20 lg:px-6"
      >
        <motion.div
          style={{ scale: animateScale, y }}
          className="  tp-[10vh] h-fit mx-auto grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-screen-3xl"
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
      <motion.div ref={secondaryRef} className="h-0 " />
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
    offset: ["start end", "0.8 end"],
  });
  const clipPath1 = useTransform(clipPathProgress, [0, 1], [30, 0]);
  const clipPath2 = useTransform(clipPathProgress, [0, 1], [70, 100]);

  const clipPath = useMotionTemplate`polygon(0% ${clipPath1}% , 100% ${clipPath1}%,100% ${clipPath2}% , 0% ${clipPath2}% )`;

  return (
    <motion.div className="p-1.5  relative rounded-2xl overflow-hidden">
      <AnimatePresence>
        {active === index && (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              transition: { delay: 0, duration: 0.3 },
            }}
            exit={{
              scale: 0.9,
              opacity: 0.8,
              transition: { delay: 0, duration: 0.5 },
            }}
            className="absolute w-full h-full inset-0 bg-primary rounded-xl"
          ></motion.div>
        )}
      </AnimatePresence>
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
      </motion.div>{" "}
    </motion.div>
  );
};
