'use client';

import { JSX } from 'react';
import { motion, Variants } from 'framer-motion';
import { Icon } from './Icon';

// Define variants for the corners with proper typing
const cornerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function FloatingCorners(): JSX.Element {
  return (
    <>
      <motion.span
        className="absolute h-6 w-6 -top-3 -left-3 text-neutral-800"
        variants={cornerVariants}
        initial="hidden"
        animate="visible"
      >
        <Icon className="h-6 w-6" />
      </motion.span>
      <motion.span
        className="absolute h-6 w-6 -bottom-3 -left-3 text-neutral-800"
        variants={cornerVariants}
        initial="hidden"
        animate="visible"
      >
        <Icon className="h-6 w-6" />
      </motion.span>
      <motion.span
        className="absolute h-6 w-6 -top-3 -right-3 text-neutral-800"
        variants={cornerVariants}
        initial="hidden"
        animate="visible"
      >
        <Icon className="h-6 w-6" />
      </motion.span>
      <motion.span
        className="absolute h-6 w-6 -bottom-3 -right-3 text-neutral-800"
        variants={cornerVariants}
        initial="hidden"
        animate="visible"
      >
        <Icon className="h-6 w-6" />
      </motion.span>
    </>
  );
}