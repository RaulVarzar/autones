import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const PHOTOS = [
  "https://images.unsplash.com/photo-1686966933735-305bd8fe0a77?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRvd2luZ3xlbnwwfHwwfHx8Mg%3D%3D",
  "https://images.unsplash.com/photo-1673187139211-1e7ec3dd60ec?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRvd2luZ3xlbnwwfHwwfHx8Mg%3D%3D",
  "https://images.unsplash.com/photo-1673187139181-795761a40ca1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1596383765797-8e10e88d1590?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1673187139612-6bf684a74815?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1686966933735-305bd8fe0a77?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRvd2luZ3xlbnwwfHwwfHx8Mg%3D%3D",
  "https://images.unsplash.com/photo-1566933293069-b55c7f326dd4?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1673187139211-1e7ec3dd60ec?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRvd2luZ3xlbnwwfHwwfHx8Mg%3D%3D",
];

const Gallery = () => {
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
      class="py-4 px-2 mx-auto sm:py-20 lg:px-6 w-full max-w-screen-2xl"
    >
      <div class="flex flex-wrap flex-row ">
        {PHOTOS.map((photo, i) => (
          <div className="w-1/3 p-2 aspect-auto">
            <motion.img
              key={photo}
              src={photo}
              alt={photo}
              initial={{ opacity: 0, y: "10vh", scale: 0.96 }}
              whileInView={{ opacity: 1, y: "0vh", scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.2,
                ease: "easeInOut",
              }}
              viewport={{ once: true }}
              className="object-cover h-full rounded-3xl"
            />
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Gallery;
