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
    <motion.a
      href={href}
      target="_blank"
      layout
      initial={{ x: 50, opacity: 0 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: { delay: 0.4, type: "spring", duration: 0.8, bounce: 0.3 },
      }}
      className="relative flex flex-col items-center justify-center px-4 min-w-48 w-full grow py-1 overflow-hidden text-center cursor-pointer sm:gap-2 md:gap-4 sm:py-6 contact-btn sm:px-16 group transition-colors duration-300 hover:bg-accent-content bg-neutral-content rounded-2xl "
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
    </motion.a>
  );
}
