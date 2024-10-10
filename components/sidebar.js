import { motion, AnimatePresence, useDragControls } from "framer-motion";
import ModalActions from "./modal-actions";

import DragCloseDrawer from "./dragToClose";

const Sidebar = ({ isOpen, closeSidebar }) => {
  return (
    <>
      <DragCloseDrawer open={isOpen} setOpen={closeSidebar}>
        <ModalActions />
      </DragCloseDrawer>
    </>
  );
};

export default Sidebar;
