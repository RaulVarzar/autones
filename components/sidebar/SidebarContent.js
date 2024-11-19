"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import ContactButton from "./contactButton";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall, FiInstagram, FiFacebook } from "react-icons/fi";
import FormButton from "./formButton";
import Header from "./header";

export default function SidebarContent({ visible }) {
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

  const [showForm, setShowForm] = useState(false);

  return (
    <motion.div
      layout
      variants={variants}
      initial="hidden"
      animate={visible ? "visible" : "hidden"}
      className="fixed top-0 right-0 z-40 flex flex-col justify-start w-full h-screen max-w-2xl px-0 pt-20 overflow-hidden md:h-fit md:rounded-b-lg bg-base-300 md:right-4 md:pt-16 lg:pt-20 lg:right-8 gap-y-8 "
    >
      <Header visible={visible} />

      <AnimatePresence mode="popLayout">
        {!showForm && (
          <div className="flex flex-col items-center justify-center w-full pb-12 grow md:pb-20 lg:pb-24 xl:pb-32 h-fit ">
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
          </div>
        )}
      </AnimatePresence>

      <FormButton showForm={showForm} setShowForm={setShowForm} />
    </motion.div>
  );
}
