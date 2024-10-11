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
        className="flex relative  flex-col px-8 justify-start gap-y-2 sm:gap-y-4 pt-2 pb-20 lg:gap-y-6 "
      >
        <AnimatePresence mode="sync">{!showForm && <Header />}</AnimatePresence>
        <Socials />
        <motion.div className="h-full flex justify-center gap-4 w-full px-0">
          <motion.div className="  w-full  flex flex-col gap-4">
            {!showForm && (
              <div className="flex flex-col sm:flex-row  h-fit  gap-4 justify-center items-center  w-full">
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
