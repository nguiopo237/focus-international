import { motion } from "motion/react";
import { ReactNode } from "react";

interface AnimateRevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  blur?: number;
  staggerChildren?: number;
  className?: string;
  triggerOnce?: boolean;
}

export default function AnimateReveal({
  children,
  delay = 0,
  duration = 0.8,
  y = 25,
  blur = 6,
  staggerChildren,
  className = "",
  triggerOnce = true
}: AnimateRevealProps) {
  if (staggerChildren !== undefined) {
    const parentVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: staggerChildren,
          delayChildren: delay
        }
      }
    };

    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: triggerOnce, margin: "-10% 0px" }}
        variants={parentVariants}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  const childVariants = {
    hidden: { 
      opacity: 0, 
      y: y,
      filter: blur > 0 ? `blur(${blur}px)` : "none"
    },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: duration,
        ease: [0.16, 1, 0.3, 1], // Sophisticated architectural curve
        delay: delay
      }
    }
  };

  return (
    <motion.div
      variants={childVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: triggerOnce, margin: "-10% 0px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
