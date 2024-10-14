import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useState } from "react";
import ContactButton from "./contact-button";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import FormButton from "./formButton";
import Socials from "./socialLinks";
import Header from "./header";

export default function SidebarContent({}) {
  const [showForm, setShowForm] = useState(false);

  return (
    <LayoutGroup>
      <motion.div
        layout
        className="relative flex flex-col justify-start pt-2 pb-20 md:px-2 lg:px-8 gap-y-2 sm:gap-y-4 lg:gap-y-6 "
      >
        {" "}
        <Header />
        <AnimatePresence mode="sync">
          {!showForm && <Socials />}
        </AnimatePresence>
        <motion.div className="flex justify-center w-full h-full gap-4 px-0">
          <motion.div className="flex flex-col w-full gap-4 ">
            {!showForm && (
              <div className="flex flex-col items-center justify-center w-full gap-4 sm:flex-row h-fit">
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
            <FormButton showForm={showForm} setShowForm={setShowForm} />
          </motion.div>
        </motion.div>
      </motion.div>
    </LayoutGroup>
  );
}
