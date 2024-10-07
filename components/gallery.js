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
      style={{ scale, y }}
      className="w-full px-2 py-4 mx-auto sm:py-20 lg:px-6 max-w-screen-2xl"
    >
      <div className="flex flex-row flex-wrap ">
        {imageList.map((image, index) => (
          <div
            key={index}
            className="w-full p-2 sm:p-4 lg:p-6 sm:w-1/2 aspect-auto"
          >
            <PhotoProvider>
              <PhotoView src={image.default.src}>
                <motion.img
                  key={index}
                  src={image.default.src}
                  alt={`image-${index}`}
                  initial={{ opacity: 0, y: "10vh", scale: 0.96 }}
                  whileInView={{ opacity: 1, y: "0vh", scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2,
                    ease: "easeInOut",
                  }}
                  viewport={{ once: true }}
                  className="object-cover h-full rounded-3xl aspect-4/3"
                />
              </PhotoView>
            </PhotoProvider>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Gallery;
