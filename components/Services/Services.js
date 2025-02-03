"use client";

import { useEffect, useRef, useState } from "react";
import Topic from "./Topics";
import Photo from "./Photo";

const usePrevious = (value) => {
  const ref = useRef(undefined);
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

const Services = () => {
  const [selectedTopic, setSelectedTopic] = useState(0);
  const [disabled, setDisabled] = useState(false); // Disable button until animation finishes
  const previous = usePrevious(selectedTopic) ?? selectedTopic;
  const animationDuration = 1200;

  const direction = previous > selectedTopic ? "back" : "forward";

  const changeTopic = (topic) => {
    if (disabled) {
      return;
    }
    setDisabled(true);
    setTimeout(() => {
      setDisabled(false);
    }, animationDuration);

    setSelectedTopic(topic);
  };

  return (
    <section className="relative flex flex-col items-center w-full px-4 bg-transparent sm:min-h-fit pb-[20vh] sm:px-6 md:px-8 lg:px-12 ">
      <Photo
        selectedTopic={selectedTopic}
        changeTopic={changeTopic}
        animationDuration={animationDuration}
        direction={direction}
      />
      <Topic selectedTopic={selectedTopic} changeTopic={changeTopic} />
    </section>
  );
};

export default Services;
