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
        className="grid grid-cols-1 gap-4 mx-auto mt-4 mb-24 overflow-hidden md:grid-cols-3 sm:mt-12 max-w-7xl"
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
  hovering,
  setHovering,
}) => {
  return (
    <motion.div
      className="relative w-full max-w-4xl mx-auto cursor-pointer rounded-3xl"
      // onHoverStart={() => setHovering(id)}
      key={id}
      layout
    >
      <motion.div
        // style={{ scale }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 1.2, delay: 0.4 },
        }}
        layout
        // viewport={{ once: true, margin: "-10%" }}
        // onClick={() => changeTopic(id)}
        className={`flex flex-col gap-2 border-neutral  h-full rounded-3xl border-opacity-100 p-6 md:p-10
       `}
      >
        <div className="text-3xl text-center uppercase whitespace-normal stat-value md:text-4xl">
          {title}
        </div>
        <div className="mx-auto text-lg leading-tight text-center whitespace-normal stat-desc xl:text-xl max-w-72 md:max-w-80">
          {description}
        </div>
      </motion.div>

      {hovering === id && (
        <motion.span
          layoutId="cards"
          transition={{ duration: 0.35, ease: "easeOut" }}
          initial={{ scale: 1, opacity: 0, y: "100%" }}
          animate={{
            scale: 1,
            opacity: 1,
            y: 0,
            transition: { duration: 0.25, ease: "easeInOut" },
          }}
          exit={{
            scale: 1,
            opacity: 0,
            transition: { duration: 0.15, ease: "easeInOut" },
          }}
          className="absolute inset-0 z-20 w-full h-full bg-indigo-900 rounded-3xl"
        ></motion.span>
      )}
    </motion.div>
  );
};
