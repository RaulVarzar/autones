const Modal = () => {
  return (
    <dialog id="my_modal_1" className="modal">
      <div className="flex flex-col gap-8 md:p-8 lg:py-10 lg:px-16 modal-box rounded-2xl bg-base-200 w-fit max-w-7xl">
        <div className="flex flex-col justify-center gap-3 text-3xl">
          <span className="opacity-40 text-md sm:text-lg lg:text-xl">
            Ai nevoie de ajutorul nostru? Contacteaza-ne acum!
          </span>
          <div className="flex flex-row justify-center gap-2">
            <h1 className="opacity-80">Program</h1>
            <h3 className="font-bold uppercase">NON-STOP</h3>
          </div>
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
        <div className="w-1/2 p-0 m-0 mx-auto opacity-70 divider">sau</div>

        <div className="flex flex-col gap-4 px-12 py-4 transition duration-200 border cursor-pointer group border-opacity-20 hover:border-opacity-40 border-base-content rounded-2xl backdrop-brightness-110 hover:backdrop-brightness-150">
          <i className="mx-auto text-4xl rounded-full fa-solid fa-envelope w-fit"></i>
          <span className="text-2xl font-light opacity-70 group-hover:opacity-100">
            Formular de contact
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
  );
};

export default Modal;
