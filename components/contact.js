"use client";

import { useForm } from "react-hook-form";
import { sendEmail } from "../utils/send-email";
import { easeInOut, motion } from "framer-motion";
import { useState } from "react";

const Contact = ({ buttonAction }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
    console.log(formData);
  }

  return (
    <motion.div
      initial={{ scale: 0.8, y: 100, opacity: 0 }}
      animate={{ scale: 1, y: 0, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, delay: 0.1, ease: easeInOut }}
    >
      <span className="mx-auto mt-4 mb-8">
        <motion.i
          initial={{ scale: 0.8, y: 35, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.4, ease: easeInOut }}
          onClick={buttonAction}
          className="p-2 px-3 text-3xl transition-opacity duration-300 border-2 rounded-full fa-solid fa-xmark text-base-content opacity-40 hover:opacity-80 hover:cursor-pointer"
        />
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
            transition={{ delay: 0.3, duration: 0.8, type: "tween" }}
            className="relative z-0 group"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={(e) => handleChange(e)}
              required
              className={
                "peer px-3 block w-full appearance-none opacity-60 group-hover:opacity-100 font-bold focus:border-emerald-700 transition duration-300 border-b-2  bg-transparent py-2.5 text-base text-gray-200 md:text-xl focus:outline-none focus:ring-0 " +
                (formData.name.length > 1 && " text-white")
              }
              placeholder=" "
            />
            <label className="absolute text-sm top-0 left-0 opacity-60 group-hover:opacity-100 peer-focus:opacity-100 peer-focus:text-emerald-700 -z-10 origin-[0] -translate-y-6  transform md:text-base text-neutral-content duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 ">
              Nume
            </label>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6, type: "tween" }}
            className="relative z-0 group"
          >
            <input
              type="phone"
              required
              value={formData.phone}
              onChange={(e) => handleChange(e)}
              name="phone"
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
              type: "tween",
            }}
            className="relative z-0 group"
          >
            <textarea
              name="message"
              rows="5"
              required
              value={formData.message}
              onChange={(e) => handleChange(e)}
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
