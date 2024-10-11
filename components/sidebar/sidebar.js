import useMeasure from "react-use-measure";
import {
  useDragControls,
  useMotionValue,
  useAnimate,
  motion,
  AnimatePresence,
} from "framer-motion";

import SidebarContent from "./SidebarContent";

const Sidebar = ({ open, closeSidebar, children }) => {
  const [scope, animate] = useAnimate();
  const [drawerRef, { width }] = useMeasure();
  const x = useMotionValue();
  const controls = useDragControls();

  const handleClose = async () => {
    const xStart = typeof x.get() === "number" ? x.get() : 0;

    await animate("#drawer", {
      x: [xStart, width + 50],
    });
    closeSidebar();
  };

  return (
    <motion.div ref={scope}>
      {/* <AnimatePresence mode="sync">
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.3 } }}
            exit={{ opacity: 0, transition: { duration: 0.15, delay: 0 } }}
            onClick={handleClose}
            className="fixed inset-0 z-50 bg-neutral-950/80 backdrop-blur-md"
          ></motion.div>
        )}
      </AnimatePresence> */}
      {open && (
        <motion.div
          id="drawer"
          ref={drawerRef}
          // onClick={(e) => e.stopPropagation()}
          // initial={{ x: "100%" }}
          // animate={{ x: "0%" }}
          // transition={{
          //   type: "spring",
          //   stiffness: 220,
          //   damping: 25,
          //   mass: 1.2,
          // }}
          layout
          className=" rounded-2xl z-50 flex flex-col items-center justify-center md:w-fit h-fit px-2 text-3xl font-black md:px-4  w-full lg:max-w-4xl xl:max-w-6xl text-base-content "
          // style={{ x }}
          // drag="x"
          // dragControls={controls}
          // onDragEnd={() => {
          //   if (x.get() >= 70) {
          //     handleClose();
          //   }
          // }}
          // dragListener={false}
          // dragConstraints={{
          //   left: 0,
          //   right: 0,
          // }}
          // dragElastic={{
          //   left: 0,
          //   right: 0.5,
          // }}
        >
          {/* <button
            // onPointerDown={(e) => {
            //   controls.start(e);
            // }}
            onClick={handleClose}
            className="absolute top-0 left-0 z-10 flex items-center justify-center h-full p-6 sm:p-8"
          >
            <div className="flex flex-col gap-2.5 cursor-grab touch-none active:cursor-grabbing">
              <span className="w-1.5 h-1.5 rounded-full bg-base-content"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-base-content"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-base-content"></span>
            </div>
          </button> */}

          <SidebarContent />
        </motion.div>
      )}
    </motion.div>
  );
};

export default Sidebar;
