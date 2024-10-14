import { useScroll, useSpring, useTransform, useVelocity } from "framer-motion";

export function useShrinkByScroll(maxSpeed, minScale) {
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 100,
    stiffness: 300,
    mass: 0.1,
  });
  const scale = useTransform(
    smoothVelocity,
    [-Math.abs(maxSpeed), 0, Math.abs(maxSpeed)],
    [`${minScale}%`, "100%", `${minScale}%`]
  );
  return scale;
}

export function useTranslateByScroll(maxSpeed, maxX) {
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 100,
    stiffness: 300,
    mass: 0.1,
  });
  const y = useTransform(
    smoothVelocity,
    [-Math.abs(maxSpeed), 0, Math.abs(maxSpeed)],
    [`${maxX}px`, "0px", `${maxX}px`]
  );
  return y;
}
