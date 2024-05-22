import {
  motion,
  AnimatePresence,
  easeIn,
  easeOut,
  easeInOut,
} from 'framer-motion';
import { useState } from 'react';
import ContactButton from './contact-button/contact-button';

export default function ModalActions({ showForm, buttonAction }) {
  const [hidden, setHidden] = useState(true);

  return (
    <motion.div
      layout
      key={showForm}
      exit={{ y: 100 }}
      className="flex flex-col gap-8 "
    >
      <motion.div
        initial={{ y: -100, opacity: 0, scale: 0.8 }}
        whileInView={{
          y: 0,
          opacity: 1,
          scale: 1,
          transition: { duration: 0.6, delay: 0.4 },
        }}
        className="flex flex-col justify-center gap-3 text-3xl"
      >
        <span className="text-sm opacity-40 sm:text-lg lg:text-xl">
          Ai nevoie de ajutorul nostru? Contacteaza-ne acum!
        </span>
        <div className="flex flex-row justify-center gap-2">
          <h1 className="text-lg opacity-80 sm:text-2xl lg:text-3xl">
            Program
          </h1>
          <h3 className="text-lg font-bold uppercase sm:text-2xl lg:text-3xl">
            NON-STOP
          </h3>
        </div>
      </motion.div>
      <div className="grid gap-4 max-sm:grid-rows-2 sm:grid-cols-2 md:flex-row">
        <ContactButton
          primary={'Telefon'}
          secondary={'0743 483 293'}
          href={'tel:+40744840417'}
          icon={'fa-solid fa-phone'}
        />

        <ContactButton
          primary={'Whatsapp'}
          secondary={'Deschide Whatsapp'}
          href={'https://wa.me/+40744840417'}
          icon={'fa-brands fa-whatsapp'}
        />
      </div>
      <motion.div
        initial={{ y: -10, opacity: 0, scale: 0.95 }}
        whileInView={{
          y: 0,
          opacity: 1,
          scale: 1,
          transition: { duration: 0.5, delay: 0.7, ease: easeInOut },
        }}
        className="w-1/2 p-0 m-0 mx-auto opacity-70 divider"
      >
        sau
      </motion.div>
      <motion.div
        initial={{ x: -0, opacity: 0, scale: 0.9 }}
        whileInView={{
          x: 0,
          opacity: 1,
          scale: 1,
          transition: { duration: 0.5, delay: 0.5, ease: easeOut },
        }}
        onClick={buttonAction}
        className="flex flex-col gap-2 px-12 py-4 border cursor-pointer sm:gap-4 group border-opacity-20 hover:border-opacity-40 border-base-content rounded-2xl backdrop-brightness-110 hover:backdrop-brightness-150"
      >
        <i className="mx-auto text-3xl rounded-full sm:text-4xl fa-solid fa-envelope w-fit"></i>
        <span className="text-xl font-light sm:text-2xl opacity-70 group-hover:opacity-100">
          Formular de contact
        </span>
      </motion.div>
    </motion.div>
  );
}
