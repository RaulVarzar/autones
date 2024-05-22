import { motion, easeOut } from 'framer-motion';

export default function ContactButton({ primary, secondary, href, icon }) {
  return (
    <motion.a
      initial={{ y: 30, opacity: 0, scale: 0.9 }}
      whileInView={{
        y: 0,
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, delay: 0.4, ease: easeOut },
      }}
      href={href}
      className="flex flex-col gap-4 px-8 py-4 border cursor-pointer contact-btn sm:px-16 sm:py-8 group border-opacity-20 hover:border-opacity-40 border-base-content hover:border-primary-content rounded-2xl backdrop-brightness-110 hover:backdrop-brightness-150"
    >
      <i
        className={
          'mx-auto text-3xl rounded-full btn-icon sm:text-4xl w-fit ' + icon
        }
      ></i>

      <div className="contact-btn-container">
        <span className="text-xl font-light contact-btn-text-one sm:text-2xl opacity-70">
          {primary}
        </span>
        <span className="text-lg font-medium opacity-100 contact-btn-text-two sm:text-xl">
          {secondary}
        </span>
      </div>
    </motion.a>
  );
}
