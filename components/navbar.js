"use client";
import { Logo } from "./logo";
import { motion } from "framer-motion";
import SidebarToggle from "./SidebarToggle";

const Navbar = () => {
  // Toggle the sidebar

  // Hide or show the navbar based on scroll direction
  // const [hidden, setHidden] = useState(false);
  // const { scrollY } = useScroll();
  // useMotionValueEvent(scrollY, "change", (latest) => {
  //   const previous = scrollY.getPrevious();
  //   setHidden(latest > previous && latest > 200 ? true : false);
  // });

  return (
    <>
      <motion.nav
        // variants={{
        //   visible: { y: 0 },
        //   hidden: { y: "-120%" },
        // }}
        // animate={hidden ? "hidden" : "visible"}
        // transition={{ duration: 0.4, ease: "easeOut" }}
        className="fixed inset-0 top-0 z-40 flex items-start justify-between w-full px-4 py-4 mx-auto max-w-screen-3xl md:py-10 xl:py-12 h-fit "
      >
        <Logo />
        <SidebarToggle />
      </motion.nav>
    </>
  );
};

export default Navbar;
