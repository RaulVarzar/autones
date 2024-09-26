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
      className="relative flex flex-col items-center justify-center gap-4 px-8 py-6 overflow-hidden text-center border cursor-pointer contact-btn sm:px-16 group border-opacity-20 border-base-content rounded-2xl "
    >
      <div className="absolute inset-0 transition-all backdrop-brightness-150 opacity-20 group-hover:opacity-100" />
      <motion.span layout className="text-4xl">
        {icon}
      </motion.span>
      {!hideText && (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
          className="contact-btn-container"
        >
          <span className="text-xl font-light contact-btn-text-one sm:text-2xl opacity-70">
            {primary}
          </span>
          <span className="text-lg font-medium opacity-100 contact-btn-text-two sm:text-xl">
            {secondary}
          </span>
        </motion.div>
      )}
      {/* </motion.div> */}
    </motion.a>
  );
}
