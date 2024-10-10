import useMeasure from "react-use-measure";
import {
  useDragControls,
  useMotionValue,
  useAnimate,
  motion,
  AnimatePresence,
} from "framer-motion";

const DragCloseDrawer = ({ open, setOpen, children }) => {
  const [scope, animate] = useAnimate();
  const [drawerRef, { width }] = useMeasure();
  const x = useMotionValue();
  const controls = useDragControls();

  const handleClose = async () => {
    const xStart = typeof x.get() === "number" ? x.get() : 0;

    await animate("#drawer", {
      x: [xStart, width + 50],
    });
    setOpen();
  };

  return (
    <>
      <div ref={scope}>
        <AnimatePresence mode="sync">
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.3 } }}
              exit={{ opacity: 0, transition: { duration: 0.15, delay: 0 } }}
              onClick={handleClose}
              className="fixed inset-0 z-50 bg-neutral-900/30 backdrop-blur-md"
            ></motion.div>
          )}
        </AnimatePresence>
        {open && (
          <motion.div
            id="drawer"
            ref={drawerRef}
            onClick={(e) => e.stopPropagation()}
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            transition={{
              type: "spring",
              stiffness: 220,
              damping: 25,
              mass: 1.2,
            }}
            className="fixed top-0 right-[2vh] rounded-2xl z-50 flex flex-col items-center justify-center w-fit h-[96vh] mt-[2vh] pl-10 text-3xl font-black sm:pl-16 bg-base-100 sm:max-w-md md:max-w-xl lg:max-w-4xl xl:max-w-6xl text-base-content "
            style={{ x }}
            drag="x"
            dragControls={controls}
            onDragEnd={() => {
              if (x.get() >= 70) {
                handleClose();
              }
            }}
            dragListener={false}
            dragConstraints={{
              left: 0,
              right: 0,
            }}
            dragElastic={{
              left: 0,
              right: 0.5,
            }}
          >
            <button
              onPointerDown={(e) => {
                controls.start(e);
              }}
              className="absolute top-0 left-0 z-10 flex items-center justify-center h-full p-6 sm:p-8"
            >
              <div className="flex flex-col gap-2.5 cursor-grab touch-none active:cursor-grabbing">
                <span className="w-1.5 h-1.5 rounded-full bg-base-content"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-base-content"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-base-content"></span>
              </div>
            </button>
            <div className="relative z-0 flex flex-row h-full w-full  px-8">
              {children}
            </div>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default DragCloseDrawer;
