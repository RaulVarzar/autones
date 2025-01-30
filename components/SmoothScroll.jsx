"use client";
import { ReactLenis } from "lenis/react";

function SmoothScroll({ children }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.05,
        duration: 1.4,
        smoothTouch: false,
        wheelMultiplier: 0.55,
        easing: (t) => 1 - Math.pow(1 - t, 5),
      }}
    >
      {children}
    </ReactLenis>
  );
}

export default SmoothScroll;
