"use client";

import { useForm } from "react-hook-form";
import { sendEmail } from "../../utils/splitStrings";
import { motion } from "framer-motion";
import { useState } from "react";

const Form = ({ submitRef }) => {
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
  }

  return (
    <div className="z-50 flex flex-col ">
      <form
        // ref={form}
        // onSubmit={sendEmail}
        className="flex flex-col items-center justify-center gap-12  "
      >
        <motion.div className="flex flex-col w-full pb-10">
          <motion.div
            initial={{ opacity: 0, y: "-50%", filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              delay: 0.4,
              duration: 0.5,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="relative border-  border-base-content border-opacity-25 py-6  lg:py-10"
          >
            <label className="input flex-row-reverse text-2xl flex items-center gap-2 w-full outline-none focus:outline-none peer-focus:outline-none focus:border-transparent focus:ring-0 focus-within:ring:0 focus-within:border-transparent focus-within:outline-none bg-transparent py-6 px-8 sm:text-3xl">
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleChange(e)}
                required
                name="name"
                className={`grow peer focus:placeholder-transparent  ${
                  formData.name.length > 0 ? " opacity-100" : "opacity-30"
                }`}
                placeholder="Ion Popescu"
              />
              <span className=" min-w-28   opacity-100 peer-focus:opacity-60 transition-opacity duration-300 ">
                Nume
              </span>
            </label>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: "-50%", filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              delay: 0.55,
              duration: 0.5,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="relative border-  border-base-content border-opacity-25 py-6 lg:py-10"
          >
            <label className="input flex-row-reverse text-2xl flex items-center gap-2 w-full outline-none focus:outline-none peer-focus:outline-none focus:border-transparent focus:ring-0 focus-within:ring:0 focus-within:border-transparent focus-within:outline-none bg-transparent py-6 px-8 sm:text-3xl">
              <input
                type="phone"
                value={formData.phone}
                onChange={(e) => handleChange(e)}
                required
                name="phone"
                className={`grow peer focus:placeholder-transparent  ${
                  formData.phone.length > 0 ? " opacity-100" : "opacity-30"
                }`}
                placeholder="0712 345 678"
              />
              <span className=" min-w-28   opacity-100 peer-focus:opacity-60 transition-opacity duration-300 ">
                Telefon
              </span>
            </label>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: "-50%", filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              delay: 0.7,
              duration: 0.5,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="relative border-  border-base-content border-opacity-25 py-6 lg:py-10"
          >
            <label className="input flex-row-reverse text-2xl flex items-center gap-2 w-full outline-none focus:outline-none peer-focus:outline-none focus:border-transparent focus:ring-0 focus-within:ring:0 focus-within:border-transparent focus-within:outline-none bg-transparent py-6 px-8 sm:text-3xl">
              <input
                type="text"
                value={formData.message}
                onChange={(e) => handleChange(e)}
                required
                name="message"
                className={`grow peer focus:placeholder-transparent  ${
                  formData.message.length > 0 ? " opacity-100" : "opacity-30"
                }`}
                placeholder="Mesajul dumneavoastră"
              />
              <span className=" min-w-28   opacity-100 peer-focus:opacity-60 transition-opacity duration-300 ">
                Mesaj
              </span>
            </label>
          </motion.div>
        </motion.div>

        <button ref={submitRef} type="submit" className="hidden"></button>
      </form>
    </div>
  );
};

export default Form;
