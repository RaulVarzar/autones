import {
  useMotionTemplate,
  useScroll,
  AnimatePresence,
  motion,
  useTransform,
} from "framer-motion";
import useWidth from "../../lib/isMobile.js";
import { useRef } from "react";
import Image from "next/image.js";

const IMAGES = ["/main1.webp", "/main2.webp", "/main3.webp"];

const Photo = ({ selectedTopic, animationDuration, direction }) => {
  const isMobile = useWidth();
  const imageRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start 0.75", "end start"],
  });

  const customScale = isMobile ? "100%" : "92%";
  const scale = useTransform(scrollYProgress, [0, 0.3], [customScale, "100%"]);

  const clipPath1 = useTransform(scrollYProgress, [0, 0.3], [20, 0]);
  const clipPath2 = useTransform(scrollYProgress, [0, 0.3], [20, 0]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.3], ["4vw", "2vw"]);

  const clipPath = useMotionTemplate`inset( 0 ${clipPath2}% 0 ${clipPath1}% round ${borderRadius})`;

  const variants = {
    initial: (direction) => ({
      y: direction == "forward" ? "105%" : "-105%",
      scale: 1.1,
    }),

    animate: {
      y: 0,
      scale: 1.05,
      transition: {
        delay: 0.05,
        duration: animationDuration / 1000 - 0.05,
        ease: [0.7, 0, 0.35, 1],
      },
    },

    exit: (direction) => ({
      y: direction == "forward" ? "-50%" : "50%",
      filter: "blur(10px)",
      scale: 1,
      transition: {
        delay: 0.05,
        duration: animationDuration / 1000 - 0.05,
        ease: [0.7, 0, 0.35, 1],
      },
    }),
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: "30%", scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        delay: 2.3,
        type: "spring",
        mass: 1.4,
        stiffness: 80,
        damping: 30,
      }}
      className="z-10 w-full overflow-hidden max-w-8xl grow"
    >
      <motion.div
        style={{ clipPath }}
        ref={imageRef}
        className="w-full overflow-hidden origin-top "
      >
        <motion.div style={{ scale }} className="origin-top">
          <AnimatePresence mode="popLayout" custom={direction}>
            <motion.div
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              custom={direction}
              key={selectedTopic}
              className="object-cover w-full mx-auto aspect-4/3 md:aspect-video"
            >
              <Image
                src={IMAGES[selectedTopic]}
                alt={`image-${IMAGES[selectedTopic]}`}
                width={1920}
                height={1080}
                quality={100}
                className="object-cover w-full h-full "
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Photo;
