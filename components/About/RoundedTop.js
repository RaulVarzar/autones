import {
  motion,
  useMotionTemplate,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";

const RoundedTop = ({ scrollProgress }) => {
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 100,
    stiffness: 300,
    mass: 0.1,
  });

  const amount = useTransform(smoothVelocity, [-700, 0, 700], [25, 0, 35], {
    clamp: true,
  });

  const clipPathRoundness = useTransform(
    scrollProgress,
    [0, 0.7, 1],
    [90, 65, 0]
  );

  const clipPath = useMotionTemplate`ellipse(60% ${clipPathRoundness}% at 50% 102%)`;

  return (
    <motion.div style={{ clipPath }}>
      <div className="z-50 w-full h-12 bg-accent sm:h-32 "></div>
    </motion.div>
  );
};

export default RoundedTop;
