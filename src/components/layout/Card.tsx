"use client";

import React from "react";

import { CardProps } from "@/lib/types/card.types";

import clsx from "clsx";
import { motion } from "framer-motion";
import { fadeSlideIn } from "@/lib/motion/fadeSlideIn";

function Card({ children, className }: CardProps) {
  return (
    <motion.div
      variants={fadeSlideIn}
      initial="initial"
      animate="animate"
      className={clsx("bg-neutral-800 rounded-md p-4", className)}>
      {children}
    </motion.div>
  );
}

export default Card;
