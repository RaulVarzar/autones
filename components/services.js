import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import React, { useRef, useState } from "react";

export const Services = () => {
  const [selectedTopic, setSelectedTopic] = useState(0);

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end"],
  });

  const contentSpring = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 16,
    mass: 0.2,
  });

  const scale = useTransform(contentSpring, [0, 1], ["85%", "100%"]);
  const y = useTransform(contentSpring, [0, 1], ["80px", "0px"]);

  return (
    <div
      ref={ref}
      className="stats gap-4 stats-vertical lg:stats-horizontal mx-auto overflow-hidden pt-24 pb-60"
    >
      <motion.div
        style={{ scale, y }}
        onClick={() => setSelectedTopic(0)}
        className={
          "stat justify-center gap-2 hover:bg-base-300 rounded-xl p-6 md:p-10 cursor-pointer transition-colors duration-200 " +
          (selectedTopic === 0
            ? " bg-base-200 opacity-100"
            : " hover:bg-base-300 opacity-80 hover:opacity-100")
        }
      >
        <div className="stat-value whitespace-normal text-center text-3xl md:text-4xl xl:text-5xl">
          Tractari auto
        </div>
        <div className="stat-desc text-center text-lg md:text-xl tracking-tighter leading-tight whitespace-normal max-w-72 md:max-w-80 mx-auto">
          Tractari, remorcari si transportam autovehiculul pe platforma auto
          indiferent daca este accidentat sau este defect atat in Romania cat si
          in Europa
        </div>
      </motion.div>

      <motion.div
        style={{ scale, y }}
        onClick={() => setSelectedTopic(1)}
        className={
          "stat justify-center gap-2 border-none  rounded-xl p-6 md:p-10 cursor-pointer transition-colors duration-200 " +
          (selectedTopic === 1
            ? " bg-base-200 opacity-100"
            : " hover:bg-base-300 opacity-80 hover:opacity-100")
        }
      >
        <div className="stat-value whitespace-normal text-center text-3xl md:text-4xl xl:text-5xl">
          Asistenta rutiera
        </div>
        <div className="stat-desc text-center text-lg md:text-xl tracking-tighter leading-tight whitespace-normal max-w-72 md:max-w-80 mx-auto">
          Serviciul nostru de asistenta rutiera este non stop, o pana de
          cauciuc, combustibil, masina nu mai porneste
        </div>
      </motion.div>

      <motion.div
        style={{ scale, y }}
        onClick={() => setSelectedTopic(2)}
        className={
          "stat justify-center gap-2 hover:bg-base-300 border-none rounded-xl p-6 md:p-10 cursor-pointer transition-colors duration-200 " +
          (selectedTopic === 2
            ? " bg-base-200 opacity-100"
            : " hover:bg-base-300 opacity-80 hover:opacity-100")
        }
      >
        <div className="stat-value whitespace-normal text-center text-3xl md:text-4xl xl:text-5xl">
          Transport utilaje
        </div>
        <div className="stat-desc text-center text-lg md:text-xl tracking-tighter leading-tight whitespace-normal max-w-72 md:max-w-80 mx-auto">
          Putem transporta pe platforma auto utilaje atat cu roti de cauciuc cat
          si cu senile cu o greutate de pana la 8 tone.
        </div>
      </motion.div>
    </div>
  );
};
