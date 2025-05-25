import { Variants } from "framer-motion";

export const bounceAnimation: Variants = {
  initial: {
    scale: 0.8,
    opacity: 0,
    y: 20,
  },
  animate: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.6,
      duration: 0.5,
    },
  },
  exit: {
    scale: 0.8,
    opacity: 0,
    transition: { duration: 0.2 },
  },
};
