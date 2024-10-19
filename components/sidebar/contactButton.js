"use client";
import { motion, easeOut } from "framer-motion";
import { useState } from "react";

export default function ContactButton({
  primary,
  secondary,
  href,
  icon,
  hideText,
}) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <motion.div
      href={href}
      target="_blank"
      // layout
      initial={{ opacity: 0, x: "50%" }}
      animate={{
        opacity: 1,
        x: "0%",
        transition: {
          delay: 0.4,
          duration: 1,
          ease: [0.25, 0.1, 0.25, 1],
        },
      }}
      exit={{ opacity: 0, x: "50%" }}
      style={{ backdropFilter: "brightness(120%)", borderRadius: "10px" }}
      whileHover={{ backdropFilter: "brightness(160%)" }}
      className="relative flex flex-col items-center justify-center px-4 min-w-48 w-full grow py-1 overflow-hidden text-center cursor-pointer sm:gap-2  sm:py-6 contact-btn sm:px-6 group transition-colors duration-300 rounded-2xl "
    >
      <motion.span layout className="pt-4 pb-1 text-4xl z-10">
        {icon}
      </motion.span>
      {!hideText && (
        <motion.div className="contact-btn-container">
          <span className="text-base font-light contact-btn-text-one sm:text-2xl opacity-70">
            {primary}
          </span>
          <span className="text-base font-medium opacity-100 contact-btn-text-two sm:text-xl">
            {secondary}
          </span>
        </motion.div>
      )}
      {/* </motion.div> */}
    </motion.div>
  );
}
