"use client";

import { useForm } from "react-hook-form";
import { sendEmail } from "../../utils/splitStrings";
import { motion } from "framer-motion";
import { useState } from "react";

const Form = ({}) => {
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
    <div className="z-10 flex flex-col items-center justify-center w-full max-w-6xl md:w-1/2 ">
      <form
        // ref={form}
        // onSubmit={sendEmail}
        className="flex flex-col items-center justify-center gap-4 md:gap-8 2xl:gap-12 w-fit"
      >
        {/* <h1 className="text-4xl font-semibold uppercase lg:text-5xl 2xl:text-7xl">
          Formular de contact
        </h1> */}
        <motion.div className="flex flex-col w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: "-50%", filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              delay: 0.4,
              duration: 0.5,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="relative w-full py-6 border-b border-opacity-25 border-base-content lg:py-10"
          >
            <label className="flex items-center w-full gap-2 px-8 py-6 text-2xl bg-transparent outline-none sm:flex-row-reverse input focus:outline-none peer-focus:outline-none focus:border-transparent focus:ring-0 focus-within:ring:0 focus-within:border-transparent focus-within:outline-none sm:text-3xl">
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
              <span className="transition-opacity duration-300 opacity-100 max-sm:hidden min-w-28 peer-focus:opacity-60">
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
            className="relative py-6 border-b border-opacity-25 border-base-content lg:py-10"
          >
            <label className="flex flex-row-reverse items-center w-full gap-2 px-8 py-6 text-2xl bg-transparent outline-none input focus:outline-none peer-focus:outline-none focus:border-transparent focus:ring-0 focus-within:ring:0 focus-within:border-transparent focus-within:outline-none sm:text-3xl">
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
              <span className="transition-opacity duration-300 opacity-100 max-sm:hidden min-w-28 peer-focus:opacity-60">
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
            className="relative py-6 border-b border-opacity-25 border-base-content lg:py-10"
          >
            <label className="flex flex-row-reverse items-center w-full gap-2 px-8 py-6 text-2xl bg-transparent outline-none input focus:outline-none peer-focus:outline-none focus:border-transparent focus:ring-0 focus-within:ring:0 focus-within:border-transparent focus-within:outline-none sm:text-3xl">
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
              <span className="transition-opacity duration-300 opacity-100 max-sm:hidden min-w-28 peer-focus:opacity-60">
                Mesaj
              </span>
            </label>
          </motion.div>
        </motion.div>

        <button
          type="submit"
          className="w-full max-w-xs px-10 py-4 text-2xl border bg-base-200 rounded-xl border-base-content border-opacity-10"
        >
          Trimite
        </button>
      </form>
    </div>
  );
};

export default Form;
