'use client';

import { useForm } from 'react-hook-form';
import { sendEmail } from '../utils/send-email';
import { easeInOut, motion } from 'framer-motion';

const Contact = ({ buttonAction }) => {
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    sendEmail(data);
  }

  return (
    <motion.div
      initial={{ scale: 0.8, y: 100, opacity: 0 }}
      animate={{ scale: 1, y: 0, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, delay: 0.1, ease: easeInOut }}
    >
      <span className="mx-auto mt-4 mb-8">
        <i
          onClick={buttonAction}
          class="text-3xl fa-solid fa-xmark border-2 p-2 px-3 rounded-full text-base-content opacity-40 transition-opacity duration-300 hover:opacity-80 hover:cursor-pointer"
        ></i>
      </span>
      <h1 className="w-8/12 mx-auto mt-6 text-sm font-semibold tracking-wide sm:text-xl lg:text-2xl">
        Trimite-ne un mesaj si iti vom răspunde cat de repede posibil!
      </h1>
      <form
        // ref={form}
        // onSubmit={sendEmail}
        className="flex flex-col justify-center px-12 py-4 mt-8 w-fit"
      >
        <motion.div className="flex flex-col gap-8 w-full md:w-[550px] lg:w-[60px] 2xl:w-[650px] ">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: [0, 1, 1, 1], y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, type: 'tween' }}
            className="relative z-0 group"
          >
            <input
              type="text"
              name="name"
              // value={name}
              // onChange={(e) => setName(e.target.value)}
              required
              className="peer px-4 block w-full appearance-none opacity-60 group-hover:opacity-100 focus:border-emerald-700 transition duration-300  border-b-2  bg-transparent py-2.5 text-base text-gray-200 md:text-xl focus:outline-none focus:ring-0"
              placeholder=" "
            />
            <label className="absolute text-sm top-0 left-0 opacity-60 group-hover:opacity-100 peer-focus:opacity-100 peer-focus:text-emerald-700 -z-10 origin-[0] -translate-y-6  transform md:text-base text-neutral-content duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 ">
              Nume
            </label>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6, type: 'tween' }}
            className="relative z-0 group"
          >
            <input
              type="email"
              required
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
              name="email"
              className="peer px-4 block w-full appearance-none opacity-60 group-hover:opacity-100 focus:border-emerald-700 transition duration-300  border-b-2  bg-transparent py-2.5 text-base text-gray-200 md:text-xl focus:outline-none focus:ring-0"
              placeholder=" "
            />
            <label className="absolute top-0 text-s left-0 opacity-60 group-hover:opacity-100  peer-focus:text-emerald-700 peer-focus:opacity-100 -z-10 origin-[0] -translate-y-6  transform md:text-base text-neutral-content duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 ">
              Numar de telefon
            </label>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.9,
              duration: 0.4,
              type: 'tween',
            }}
            className="relative z-0 group"
          >
            <textarea
              name="message"
              rows="5"
              required
              // value={message}
              // onChange={(e) => setMessage(e.target.value)}
              className="peer px-4 block w-full appearance-none opacity-60 group-hover:opacity-100 transition duration-300 border-b-2 bg-transparent py-2.5 text-base text-gray-200 md:text-xl focus:outline-none focus:ring-0 focus:border-emerald-700"
              placeholder=" "
            ></textarea>
            <label className="absolute top-0 text-sm left-0 opacity-60 group-hover:opacity-100  peer-focus:text-emerald-700 peer-focus:opacity-100 -z-10 origin-[0] -translate-y-6  transform md:text-base text-neutral-content duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 ">
              Mesajul dvs.
            </label>
          </motion.div>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.2, duration: 0.8 },
          }}
          type="submit"
          className="flex mx-auto mt-5 text-sm font-normal tracking-wide uppercase transition-all duration-300 rounded-md shadow-md text-base-content border-base-content hover:font-semibold hover:gap-2 group btn btn-md btn-outline hover:border-opacity-0 hover:bg-base-content hover:text-accent hover:scale-105"
        >
          Trimite
          <i className="transition-transform duration-300 fa-regular fa-paper-plane group-hover:rotate-45"></i>
        </motion.button>
      </form>
    </motion.div>
  );
};

export default Contact;
