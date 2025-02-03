import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useState } from "react";
import ContactButton from "./contactButton";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall, FiInstagram, FiFacebook } from "react-icons/fi";
import FormButton from "./formButton";
import Header from "./header";
import { useLenis } from "lenis/react";

const variants = {
  hidden: {
    y: "-105%",
    filter: "blur(10px)",
    transition: {
      ease: [0.25, 0.1, 0.25, 1],
      duration: 0.25,
      delay: 0,
    },
  },
  visible: {
    y: "0%",
    filter: "blur(0px)",
    transition: {
      ease: [0.25, 0.1, 0.25, 1],
      duration: 0.5,
      delay: 0.1,
    },
  },
};

export default function SidebarContent({ visible, closeNavbar }) {
  const lenisInstance = useLenis();

  const handleClick = () => {
    const scrollToOptions = {
      offset: 0,
      lerp: 0.1,
      duration: 2,
      easing: (t) => {
        return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
      },
      immediate: false,
      lock: true,
      force: false,
    };
    lenisInstance.scrollTo("#contact-form", scrollToOptions);
    closeNavbar();
  };

  return (
    <motion.div
      layout
      variants={variants}
      initial="hidden"
      animate={visible ? "visible" : "hidden"}
      className="absolute top-0 sm:top-6 right-0 z-40  flex flex-col justify-between w-full max-sm:h-[100svh] px-0 pt-20 overflow-hidden md:max-w-2xl pb-4 md:rounded-2xl bg-base-300 md:right-4 md:pt-16 lg:pt-20  gap-y-2  "
    >
      <div className="flex flex-col justify-center gap-10 sm:gap-3 grow">
        <Header visible={visible} />

        <AnimatePresence mode="popLayout">
          <motion.div
            exit={{ opacity: "0%" }}
            layout
            className="flex flex-col w-full gap-1"
          >
            <ContactButton
              primary={"Telefon"}
              secondary={"0743 483 293"}
              href={"tel:+0743483293"}
              icon={<FiPhoneCall />}
              visible={visible}
              id={0}
            />

            <ContactButton
              primary={"Whatsapp"}
              secondary={"0743 483 293"}
              href={"https://wa.me/0743483293"}
              icon={<FaWhatsapp />}
              visible={visible}
              id={1}
            />

            <ContactButton
              primary={"Instagram"}
              secondary={"@autones"}
              href={"https://instagram.com/autones"}
              icon={<FiInstagram />}
              visible={visible}
              id={2}
            />
            <ContactButton
              primary={"Facebook"}
              secondary={"Autones"}
              href={"https://facebook.com/autones"}
              icon={<FiFacebook />}
              visible={visible}
              id={3}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <FormButton onClick={() => handleClick()} />
    </motion.div>
  );
}
