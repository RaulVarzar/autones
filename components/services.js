import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import React, { useRef, useState } from "react";

export const Services = ({ selectedTopic, changeTopic }) => {
  const ref = useRef(null);

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

  return (
    <div
      ref={ref}
      className="gap-4 pt-4 pb-24 mx-auto overflow-hidden sm:pt-12 stats stats-vertical lg:stats-horizontal"
    >
      <motion.div
        style={{ scale, y }}
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { duration: 1.2, delay: 0.4 },
        }}
        viewport={{ once: true, margin: "-10%" }}
        onClick={() => changeTopic(0)}
        className={
          "stat justify-center gap-2 hover:bg-base-300 rounded-xl p-6 md:p-10 cursor-pointer transition-colors duration-200 " +
          (selectedTopic === 0
            ? " bg-base-300 opacity-100"
            : " hover:bg-base-200 opacity-80 hover:opacity-100")
        }
      >
        <div className="text-3xl text-center uppercase whitespace-normal stat-value md:text-4xl">
          Tractări auto 24/7
        </div>
        <div className="mx-auto text-lg leading-tight tracking-tighter text-center whitespace-normal stat-desc md:text-xl max-w-72 md:max-w-80">
          Tractări, remorcări și transportam autovehiculul pe platforma auto
          indiferent daca este accidentat sau este defect atat in Romania cat si
          in Europa
        </div>
      </motion.div>

      <motion.div
        style={{ scale, y }}
        onClick={() => changeTopic(1)}
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { duration: 1.2, delay: 0.65 },
        }}
        viewport={{ once: true, margin: "-10%" }}
        className={
          "stat justify-center gap-2 hover:bg-base-300 border-none rounded-xl p-6 md:p-10 cursor-pointer transition-colors duration-200 " +
          (selectedTopic === 1
            ? " bg-base-300 opacity-100"
            : " hover:bg-base-200 opacity-80 hover:opacity-100")
        }
      >
        <div className="text-3xl text-center uppercase whitespace-normal stat-value md:text-4xl ">
          Transport auto intern
        </div>
        <div className="mx-auto text-lg leading-tight tracking-tighter text-center whitespace-normal stat-desc md:text-xl max-w-72 md:max-w-80">
          Serviciul nostru de asistenta rutiera este non stop, o pana de
          cauciuc, combustibil, masina nu mai porneste
        </div>
      </motion.div>

      <motion.div
        style={{ scale, y }}
        onClick={() => changeTopic(2)}
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { duration: 1.2, delay: 0.9 },
        }}
        viewport={{ once: true, margin: "-10%" }}
        className={
          "stat justify-center gap-2 hover:bg-base-300 border-none rounded-xl p-6 md:p-10 cursor-pointer transition-colors duration-200 " +
          (selectedTopic === 2
            ? " bg-base-300 opacity-100"
            : " hover:bg-base-200 opacity-80 hover:opacity-100")
        }
      >
        <div className="text-3xl text-center uppercase whitespace-normal stat-value md:text-4xl ">
          Transport utilaje
        </div>
        <div className="mx-auto text-lg leading-tight tracking-tighter text-center whitespace-normal stat-desc md:text-xl max-w-72 md:max-w-80">
          Putem transporta pe platforma auto utilaje atat cu roti de cauciuc cat
          si cu senile cu o greutate de pana la 8 tone.
        </div>
      </motion.div>
    </div>
  );
};
