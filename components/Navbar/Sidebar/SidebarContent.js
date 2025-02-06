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
    height: 0,
    transition: {
      duration: 0.7,
      ease: [0.76, 0, 0.24, 1],
      delay: 0.15,
    },
  },
  visible: {
    height: "100%",
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
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
    <motion.div className="absolute top-0 right-0 z-40 h-screen sm:pt-5 max-sm:left-0 md:right-4">
      <AnimatePresence>
        {visible && (
          <motion.div className="flex flex-col relative justify-between w-full overflow-hidden max-sm:h-[100svh] sm:h-fit md:max-w-2xl   gap-y-2 ">
            <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="absolute inset-0 bg-base-300 md:rounded-2xl"
            />
            <div className="flex flex-col justify-center gap-10 pt-12 sm:gap-3 grow md:pt-16 xl:pt-20">
              <Header />
              <Links />
            </div>

            <FormButton onClick={() => handleClick()} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export const Links = ({ visible }) => {
  return (
    <motion.div className="flex flex-col w-full gap-1">
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
  );
};
