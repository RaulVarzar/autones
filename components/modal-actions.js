import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useState } from "react";
import ContactButton from "./contact-button/contact-button";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMessage } from "react-icons/md";
import Form from "./form";

export default function ModalActions({}) {
  const [showForm, setShowForm] = useState(false);

  return (
    <LayoutGroup>
      <motion.div layout className="flex flex-col gap-16 ">
        <AnimatePresence mode="sync">
          {!showForm && (
            <motion.div
              layout="position"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.02,
              }}
              key="hello"
              className="flex flex-col justify-center gap-3 text-3xl text-center"
            >
              <span className="text-base font-light leading-tight text-balance opacity-40 sm:text-lg lg:text-xl">
                Ai nevoie de ajutorul nostru? Contacteaza-ne acum!
              </span>
              <div className="flex flex-col justify-center sm:flex-row gap-y-0 gap-x-2">
                <h1 className="text-lg opacity-80 sm:text-2xl lg:text-3xl">
                  Program
                </h1>
                <h3 className="text-xl font-bold uppercase sm:text-2xl lg:text-3xl">
                  NON-STOP
                </h3>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div className="flex flex-col gap-8 ">
          <div className="grid gap-4 max-sm:grid-rows-2 sm:grid-cols-2 md:flex-row">
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

          <motion.div
            layout
            style={{ borderRadius: "16px" }}
            className={`max-w-xl border relative group  border-base-content overflow-hidden  ${
              !showForm
                ? " border-opacity-20"
                : "border-opacity-50 backdrop-brightness-150"
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
                className="relative flex flex-row items-center justify-center gap-2 px-12 py-5 cursor-pointer md:py-8 sm:gap-4 group "
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
    </LayoutGroup>
  );
}
