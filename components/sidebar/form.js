"use client";

import { useForm } from "react-hook-form";
import { sendEmail } from "../../utils/splitStrings";
import { motion } from "framer-motion";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";

const Form = ({ closeForm }) => {
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
      initial={{ scale: 0.95, y: 100, opacity: 0 }}
      animate={{ scale: 1, y: 0, opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.3, type: "spring", mass: 0.2 }}
      className="relative flex flex-col "
    >
      <span
        onClick={closeForm}
        className=" pt-3 px-3 sm:pt-6 sm:px-6 cursor-pointer text-3xl md:text-5xl "
      >
        <IoCloseOutline />
      </span>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6, type: "tween" }}
        className=" mx-auto pt-4 text-base font-semibold tracking-wide text-center w-10/12 sm:w-8/12 sm:text-xl lg:text-2xl"
      >
        Trimite-ne un mesaj si iti vom răspunde cat de repede posibil!
      </motion.h1>
      <form
        // ref={form}
        // onSubmit={sendEmail}
        className="flex flex-col items-center justify-center px-12 pt-6 pb-12 "
      >
        <motion.div className="flex flex-col gap-8 ">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
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
                "peer px-3 block  appearance-none opacity-60  hover:opacity-100  focus:border-white transition duration-300 border-b-2  bg-transparent py-2.5 text-base text-gray-200 md:text-xl focus:outline-none focus:ring-0 " +
                (formData.name.length > 1 && " text-white")
              }
              placeholder=" "
            />
            <label className="absolute text-sm top-0 left-0 opacity-60 text-base-content hover:opacity-100 peer-focus:opacity-100 peer-focus:text-white -z-10 origin-[0]  font-light transform md:text-base  duration-300 peer-placeholder-shown:translate-y-2 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-90 ">
              Nume
            </label>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
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
              className={
                "peer px-3 block  appearance-none opacity-60  hover:opacity-100  focus:border-white transition duration-300 border-b-2  bg-transparent py-2.5 text-base text-gray-200 md:text-xl focus:outline-none focus:ring-0 " +
                (formData.phone.length > 8 && " text-white")
              }
              placeholder=" "
            />
            <label className="absolute text-sm top-0 left-0 opacity-60 text-base-content hover:opacity-100 peer-focus:opacity-100 peer-focus:text-white -z-10 origin-[0]  font-light transform md:text-base  duration-300 peer-placeholder-shown:translate-y-2 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-90 ">
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
              className={
                "peer px-3 block  appearance-none opacity-60  hover:opacity-100  focus:border-white transition duration-300 border-b-2  bg-transparent py-2.5 text-base text-gray-200 md:text-xl focus:outline-none focus:ring-0 " +
                (formData.message.length > 12 && " text-white")
              }
              placeholder=" "
            ></textarea>
            <label className="absolute text-sm top-0 left-0 opacity-60 text-base-content hover:opacity-100 peer-focus:opacity-100 peer-focus:text-white -z-10 origin-[0]  font-light transform md:text-base  duration-300 peer-placeholder-shown:translate-y-2 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-90 ">
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
          className="flex mx-auto mt-5 text-sm  font-normal tracking-wide uppercase transition-all duration-300 rounded-md shadow-md text-base-content border-base-content hover:font-semibold hover:gap-2 group btn btn-md btn-outline hover:border-opacity-0 hover:bg-base-content hover:text-accent hover:scale-105"
        >
          Trimite
          <i className="transition-transform duration-300  text-2xl group-hover:rotate-45">
            <IoIosSend />
          </i>
        </motion.button>
      </form>
    </motion.div>
  );
};

export default Form;
