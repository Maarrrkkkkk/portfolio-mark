"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef } from "react";

const BlurFade = ({
  children,
  className,
  variant,
  duration = 0.4,
  delay = 0,
  yOffset = 6,
  inView = false,
  blur = "6px",
}) => {
  const ref = useRef(null);
  const inViewResult = useInView(ref, { once: true });
  const isInView = !inView || inViewResult;

  // Simplified animation for testing
  return <div className={className}>{children}</div>;
};

export default BlurFade;
