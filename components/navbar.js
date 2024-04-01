import React from 'react';
import { Logo } from './logo';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <div className="flex w-full items-center justify-between py-4 md:py-8 xl:py-12 h-fit max-w-[2000px] px-8 md:px-12 xl:px-24">
      <Logo />
      <motion.button
        initial={{ opacity: 0, y: '-15px', scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.7, ease: 'easeInOut' }}
        className="px-8 font-normal rounded-full btn btn-lg btn-outline"
        onClick={() => document.getElementById('my_modal_1').showModal()}
      >
        <i className="pr-3 fa-solid fa-phone"></i> CONTACT
      </motion.button>

      <dialog id="my_modal_1" className="modal">
        <div className="flex flex-col gap-8 md:p-8 lg:py-10 lg:px-16 modal-box rounded-2xl bg-base-200 w-fit max-w-7xl">
          <div className="flex flex-row justify-center gap-2 text-3xl">
            <h1 className="opacity-70">Program</h1>
            <h3 className="font-semibold uppercase">NON-STOP</h3>
          </div>

          <div className="grid gap-4 max-sm:grid-rows-2 sm:grid-cols-2 md:flex-row">
            <div className="flex flex-col gap-4 px-16 py-8 transition duration-200 border cursor-pointer group border-opacity-20 hover:border-opacity-40 border-base-content rounded-2xl backdrop-brightness-110 hover:backdrop-brightness-150">
              <i className="mx-auto text-4xl rounded-full fa-solid fa-phone w-fit"></i>
              <span className="text-2xl font-light opacity-70 group-hover:opacity-100">
                Telefon
              </span>
            </div>

            <div className="flex flex-col gap-4 px-16 py-8 transition duration-200 border cursor-pointer group border-opacity-20 hover:border-opacity-40 border-base-content rounded-2xl backdrop-brightness-110 hover:backdrop-brightness-150">
              <i className="mx-auto text-4xl rounded-full fa-brands fa-whatsapp w-fit"></i>
              <span className="text-2xl font-light opacity-70 group-hover:opacity-100">
                Whatsapp
              </span>
            </div>
          </div>
          <div className="w-1/2 p-0 m-0 mx-auto opacity-70 divider"></div>
          <div className="flex flex-col w-full gap-x-4 sm:flex-row justify-stretch">
            <span className="flex items-center justify-center gap-4 px-6 py-3 border border-opacity-0 cursor-pointer grow border-base-content hover:border-opacity-20 rounded-xl">
              <i className="text-2xl sm:text-3xl fa-brands fa-square-facebook"></i>
              Autones Tractari
            </span>

            <span className="flex items-center justify-center gap-4 px-6 py-3 border border-opacity-0 cursor-pointer grow border-base-content hover:border-opacity-20 rounded-xl">
              <i className="text-2xl fa-brands sm:text-3xl fa-square-instagram "></i>
              @autones
            </span>
          </div>
        </div>
        <form
          method="dialog"
          className="transition duration-500 bg-base-100 backdrop-blur-sm bg-opacity-30 modal-backdrop"
        >
          <button>close</button>
        </form>
      </dialog>

      {/* <dialog
        id="my_modal_1"
        className="bg-opacity-40 modal backdrop-blur-md bg-base-100"
      >
        <div className="modal-box rounded-xl bg-base-200 w-fit max-w-7xl">
          
        </div>
      </dialog> */}
    </div>
  );
};

export default Navbar;
