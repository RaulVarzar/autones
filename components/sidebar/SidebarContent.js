import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useState } from "react";
import ContactButton from "./contactButton";
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
        className="relative  flex flex-col justify-start pt-2 pb-16 md:px-2 gap-y-8 xl:pb-20 lg:px-12 2xl:px-16  "
      >
        <Header />

        <div className="px-4 gap-3 flex flex-col">
          <AnimatePresence>{!showForm && <Socials />}</AnimatePresence>

          <AnimatePresence>
            {!showForm && (
              <div className="flex flex-col items-center justify-center w-full gap-3 sm:flex-row h-fit">
                <ContactButton
                  primary={"Telefon"}
                  secondary={"0743 483 293"}
                  href={"tel:+0743483293"}
                  icon={<FiPhoneCall />}
                  hideText={showForm}
                />

                <ContactButton
                  primary={"Whatsapp"}
                  secondary={"0743 483 293"}
                  href={"https://wa.me/0743483293"}
                  icon={<FaWhatsapp />}
                  hideText={showForm}
                />
              </div>
            )}
          </AnimatePresence>

          <FormButton showForm={showForm} setShowForm={setShowForm} />
        </div>
      </motion.div>
    </LayoutGroup>
  );
}
