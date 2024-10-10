import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Topic } from "./topics";

const IMAGES = ["/main1.jpg", "/main2.jpg", "/main3.jpg"];

const Services = () => {
  const imageRef = useRef(null);
  const [selectedTopic, setSelectedTopic] = useState(0);

  function changeTopic(topic) {
    setSelectedTopic(topic);
  }

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start 0.7", "start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.57], ["40%", "100%"]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.6], ["8vh", "3vh"]);
  const y = useTransform(scrollYProgress, [0, 0.6], ["0vh", "30vh"]);

  return (
    <section className="relative bottom-0 flex flex-col h-[200vh] items-center w-full min-h-screen gap-1 px-4 bg-transparent  border-error sm:px-6 md:px-8 lg:px-12 ">
      <motion.div
        initial={{ opacity: 0, y: "30%", scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, delay: 1.2, ease: "easeOut" }}
        className="z-10 w-full h-screen grow border-info max-w-7xl"
      >
        <div ref={imageRef} className="sticky top-[70vh]  border-fuchsia-900">
          <motion.img
            style={{ scale, borderRadius }}
            src={IMAGES[selectedTopic]}
            className="object-cover w-full mx-auto origin-top max-w-7xl aspect-video "
          />
        </div>
      </motion.div>

      <Topic selectedTopic={selectedTopic} changeTopic={changeTopic} />
    </section>
  );
};

export default Services;
