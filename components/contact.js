"use client";

import { useForm } from "react-hook-form";
import { sendEmail } from "../utils/send-email";

const Contact = () => {
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    sendEmail(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-5">
        <label
          htmlFor="name"
          className="block mb-3 text-base font-medium text-black"
        >
          Full Name
        </label>
        <input
          type="text"
          placeholder="Full Name"
          className="w-full px-6 py-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md outline-none focus:border-purple-500 focus:shadow-md"
          {...register("name", { required: true })}
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="email"
          className="block mb-3 text-base font-medium text-black"
        >
          Email Address
        </label>
        <input
          type="email"
          placeholder="example@domain.com"
          className="w-full px-6 py-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md outline-none focus:border-purple-500 focus:shadow-md"
          {...register("email", { required: true })}
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="message"
          className="block mb-3 text-base font-medium text-black"
        >
          Message
        </label>
        <textarea
          rows={4}
          placeholder="Type your message"
          className="w-full px-6 py-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md outline-none resize-none focus:border-purple-500 focus:shadow-md"
          {...register("message", { required: true })}
        ></textarea>
      </div>
      <div>
        <button className="px-8 py-3 text-base font-semibold text-white bg-purple-500 rounded-md outline-none hover:shadow-form">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Contact;
