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
      x: [xStart, width],
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
              className="fixed inset-0 z-50 bg-neutral-950/90 backdrop-blur-sm"
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
              ease: "easeInOut",
              type: "spring",
              stiffness: 150,
              damping: 16,
              mass: 0.3,
              duration: 0.2,
            }}
            className="fixed top-0 right-0 z-50 flex flex-col items-center justify-center w-full h-screen px-12 text-3xl font-black bg-base-200 sm:max-w-md md:max-w-xl lg:max-w-4xl xl:max-w-6xl text-base-content "
            style={{ x }}
            drag="x"
            dragControls={controls}
            onDragEnd={() => {
              if (x.get() >= 100) {
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
              className="absolute top-0 left-0 z-10 flex items-center justify-center h-full p-8"
            >
              <div className="flex flex-col gap-2.5 cursor-grab touch-none active:cursor-grabbing">
                <span className="w-1.5 h-1.5 rounded-full bg-base-content"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-base-content"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-base-content"></span>
              </div>
            </button>
            <div className="relative z-0 flex flex-row h-full w-fit">
              {children}
            </div>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default DragCloseDrawer;
