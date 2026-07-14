"use client";

import * as React from "react";
import { motion, type Variants } from "framer-motion";

function cn(...inputs: Array<string | false | null | undefined>) {
  return inputs.filter(Boolean).join(" ");
}

interface AnimatedTextProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  duration?: number;
  delay?: number;
  replay?: boolean;
  className?: string;
  textClassName?: string;
  underlineClassName?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  underlineColor?: string;
  underlineHeight?: string;
  underlineOffset?: string;
}

const NBSP = String.fromCharCode(160);

export const AnimatedText = React.forwardRef<HTMLDivElement, AnimatedTextProps>(
  (
    {
      text,
      duration = 0.035,
      delay = 0.2,
      replay = true,
      className,
      textClassName,
      underlineClassName,
      as: Component = "h1",
      underlineColor = "bg-accent",
      underlineHeight = "h-px",
      underlineOffset = "-bottom-3",
      ...props
    },
    ref,
  ) => {
    const letters = Array.from(text);

    const container: Variants = {
      hidden: { opacity: 0 },
      visible: (i: number = 1) => ({
        opacity: 1,
        transition: { staggerChildren: duration, delayChildren: i * delay },
      }),
    };

    const child: Variants = {
      visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", damping: 12, stiffness: 200 },
      },
      hidden: {
        opacity: 0,
        y: 20,
        transition: { type: "spring", damping: 12, stiffness: 200 },
      },
    };

    const lineVariants: Variants = {
      hidden: { width: "0%", left: "50%" },
      visible: {
        width: "100%",
        left: "0%",
        transition: { delay: letters.length * duration, duration: 0.8, ease: "easeOut" },
      },
    };

    return (
      <div ref={ref} className={cn("flex flex-col items-center justify-center gap-2", className)} {...props}>
        <div className="relative">
          <Component className="sr-only">{text}</Component>
          <motion.div
            aria-hidden="true"
            style={{ display: "flex", overflow: "hidden" }}
            variants={container}
            initial="hidden"
            animate={replay ? "visible" : "hidden"}
            className={cn("text-center", textClassName)}
          >
            {letters.map((letter, index) => (
              <motion.span key={index} variants={child}>
                {letter === " " ? NBSP : letter}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            aria-hidden="true"
            variants={lineVariants}
            initial="hidden"
            animate="visible"
            className={cn("absolute", underlineHeight, underlineOffset, underlineColor, underlineClassName)}
          />
        </div>
      </div>
    );
  },
);
AnimatedText.displayName = "AnimatedText";
