import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useState } from "react";
import ContactButton from "./contact-button/contact-button";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMessage } from "react-icons/md";
import Form from "./form";
import Socials from "./socialLinks";
export default function ModalActions({}) {
  const [showForm, setShowForm] = useState(false);

  return (
    <LayoutGroup>
      <motion.div
        layout
        className="flex flex-col justify-start gap-8 sm:gap-10 pt-12 lg:gap-16 "
      >
        <Socials />
        <motion.div className="h-full grid grid-rows-6  justify-center gap-4 grow">
          <AnimatePresence mode="sync">
            {!showForm && (
              <motion.div
                layout="position"
                exit={{ opacity: 0, transition: { duration: 0.01 } }}
                key="hello"
                className="flex flex-col justify-end gap-1  text-left row-span-1"
              >
                <motion.span
                  initial={{ opacity: 0, x: 30 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: {
                      delay: 0.25,
                      type: "spring",
                      duration: 1,
                      bounce: 0.5,
                    },
                  }}
                  className="text-lg  font-light leading-tight text-balance opacity-40 sm:text-sx lg:text-2xl"
                >
                  Ai nevoie de ajutorul nostru?
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: 30 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: {
                      delay: 0.3,
                      type: "spring",
                      duration: 1.1,
                      bounce: 0.5,
                    },
                  }}
                  className="flex flex-col  justify-center text-2xl sm:text-3xl lg:text-4xl  tracking-wide uppercase"
                >
                  Contacteaza-ne acum!
                </motion.span>
              </motion.div>
            )}
          </AnimatePresence>
          <motion.div className="flex flex-col gap-4 row-span-5 pt-10">
            {!showForm && (
              <div className="grid gap-4 max-sm:grid-cols-2 sm:grid-cols-2 md:flex-row">
                <ContactButton
                  primary={"Telefon"}
                  secondary={"0743 483 293"}
                  href={"tel:+40744840417"}
                  icon={<FiPhoneCall />}
                  hideText={showForm}
                />

                <ContactButton
                  primary={"Whatsapp"}
                  secondary={"Deschide Whatsapp"}
                  href={"https://wa.me/+40744840417"}
                  icon={<FaWhatsapp />}
                  hideText={showForm}
                />
              </div>
            )}
            <motion.div
              layout
              initial={{ x: 50, opacity: 0 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: {
                  delay: 0.52,
                  type: "spring",
                  duration: 0.8,
                  bounce: 0.3,
                },
              }}
              style={{ borderRadius: "16px" }}
              className={`max-w-xl relative group overflow-hidden  ${
                !showForm ? " bg-base-300" : " bg-accent"
              }`}
            >
              {!showForm && (
                <motion.div
                  layout="position"
                  onClick={() => setShowForm(true)}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.25,
                    type: "spring",
                    damping: 8,
                    mass: 0.3,
                  }}
                  className="relative flex flex-row items-center justify-center gap-2 px-4 py-5 cursor-pointer md:px-8 lg:px-12 md:py-8 sm:gap-4 group "
                >
                  <div className="absolute inset-0 transition-all -z-10 backdrop-brightness-150 opacity-20 group-hover:opacity-100" />
                  <MdOutlineMessage />
                  <span className="text-xl font-medium transition-opacity sm:text-2xl opacity-70 group-hover:opacity-100">
                    Trimite-ne un mesaj
                  </span>
                </motion.div>
              )}
              {showForm && <Form closeForm={() => setShowForm(false)} />}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </LayoutGroup>
  );
}
