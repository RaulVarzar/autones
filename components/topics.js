"use client";
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import React, { useRef, useState } from "react";

const TOPICS = [
  {
    id: 0,
    title: "Tractări auto 24/7",
    description:
      "Tractări, remorcări și transportam autovehiculul pe platforma auto indiferent daca este accidentat sau este defect atat in Romania cat si in Europa",
  },
  {
    id: 1,
    title: "Transport auto intern",
    description:
      "Serviciul nostru de asistenta rutiera este non stop, o pana de cauciuc, combustibil, masina nu mai porneste",
  },
  {
    id: 2,
    title: "Transport utilaje",
    description:
      "Putem transporta pe platforma auto utilaje atat cu roti de cauciuc cat si cu senile cu o greutate de pana la 8 tone.",
  },
];

export const Topic = ({ selectedTopic, changeTopic }) => {
  const ref = useRef(null);

  const [hovering, setHovering] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "0.8 end"],
  });

  const contentSpring = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 16,
    mass: 0.2,
  });

  const scale = useTransform(contentSpring, [0, 1], ["85%", "100%"]);
  const y = useTransform(contentSpring, [0, 1], ["12vh", "0vh"]);
  const [selectedTab, setSelectedTab] = useState(TOPICS[0]);

  return (
    <>
      <motion.div
        onHoverEnd={() => setHovering(false)}
        ref={ref}
        className="grid grid-cols-1 gap-4 mx-auto mt-4 mb-24 md:gap-8 lg:grid-cols-3 sm:mt-12 max-w-7xl"
      >
        {TOPICS.map((item, i) => (
          <Card
            key={i}
            selectedTopic={selectedTopic}
            changeTopic={changeTopic}
            hovering={hovering}
            setHovering={setHovering}
            {...item}
          />
        ))}
      </motion.div>
    </>
  );
};

export const Card = ({
  title,
  description,
  id,
  selectedTopic,
  changeTopic,
  setHovering,
}) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start 0.1", "center start"],
  });

  const contentSpring = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 16,
    mass: 0.1,
  });

  const y = useTransform(contentSpring, [0, 1], ["0%", "-50%"]);
  return (
    <motion.div
      className="relative w-full max-w-4xl mx-auto cursor-pointer rounded-3xl"
      onHoverStart={() => setHovering(id)}
      ref={cardRef}
      style={{ y }}
      layout
    >
      <motion.div
        // style={{ scale }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 1.2, delay: 0.4 + id * 0.3 },
        }}
        layout
        viewport={{ once: true, margin: "-10%" }}
        animate={selectedTopic === id ? { scale: 1.03 } : { scale: 1 }}
        transition={{ duration: 0.4 }}
        onClick={() => changeTopic(id)}
        className={`flex flex-col gap-2 border-neutral border relative bg-neutral-content h-full z-10 rounded-3xl  p-6 md:p-10 transition-colors duration-300 ${
          selectedTopic === id
            ? "bg-opacity-40 border-opacity-60 "
            : "bg-opacity-0 hover:bg-opacity-30 border-opacity-0"
        }
       `}
      >
        <div
          className={`text-2xl lg:text-3xl 2xl:text-4xl text-balance tracking-wide leading-none text-center uppercase whitespace-normal transition-opacity duration-300 stat-value md:text-4xl ${
            selectedTopic === id ? "opacity-100" : "opacity-75"
          }`}
        >
          {title}
        </div>
        <div
          className={`mx-auto text-md text-pretty leading-tight text-center whitespace-normal sm:text-base md:text-lg stat-desc xl:text-xl transition-opacity duration-300 max-w-72 md:max-w-80 ${
            selectedTopic === id ? "opacity-90" : "opacity-60"
          }`}
        >
          {description}
        </div>
      </motion.div>
    </motion.div>
  );
};
