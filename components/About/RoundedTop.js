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
    [0, 0.65, 0.9],
    [30, 20, 0]
  );

  const clipPath = useMotionTemplate`ellipse(60% ${clipPathRoundness}% at 50% 102%)`;

  return (
    <motion.div style={{ clipPath }}>
      <div className="w-full bg-accent z-50 h-28 sm:h-32 md:h-48 lg:h-96"></div>
    </motion.div>
  );
};

export default RoundedTop;
