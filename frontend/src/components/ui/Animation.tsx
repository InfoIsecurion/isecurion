"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";

interface AnimationProps {
  delay?: number;
  children: React.ReactNode;
}

function Animation({ delay = 0, children }: AnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay,
        duration: 1.2,
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
interface AnimatedHeadingProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

function AnimatedHeading({
  children,
  className = "",
  delay = 0.2,
}: AnimatedHeadingProps) {
  return (
    <motion.h1
      initial={{
        opacity: 0,
        y: 40,
        filter: "blur(10px)",
      }}
      animate={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 0.9,
        delay,
        ease: "easeOut",
      }}
      className={`font-semibold mx-auto max-w-2xl text-[#FFFFFF] ${className}`}
    >
      {children}
    </motion.h1>
  );
}

interface AnimatedCardProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}
function AnimatedCard({
  children,
  delay = 0,
  className = "",
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 90,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.7,
        delay,
      }}
      viewport={{
        once: true,
        amount: 0.5,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface LeftAnimationProps {
  children: React.ReactNode;
  delay?: number;
}

function LeftAnimation({ children }: LeftAnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.9,
        ease: "easeOut",
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
    >
      {children}
    </motion.div>
  );
}

interface RightAnimationProps {
  children: React.ReactNode;
  delay?: number;
}

function RightAnimation({ children, delay = 0 }: RightAnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 120 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.8,
        delay,
        ease: "easeOut",
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
    >
      {children}
    </motion.div>
  );
}


interface GradientIconProps {
  Icon?: string;
  className?: string;
}

function GradientIcon({
  Icon: iconName,
  className = "h-10 w-10",
}: GradientIconProps) {
  if (!iconName) return null;

  const iconUrl = `https://api.iconify.design/${iconName.replace(":", "/")}.svg`;

  return (
    <div
      aria-hidden="true"
      className={className}
      style={{
        background: "linear-gradient(180deg, #0FEADB 0%, #0F66EA 100%)",
        WebkitMaskImage: `url("${iconUrl}")`,
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        WebkitMaskSize: "contain",
        maskImage: `url("${iconUrl}")`,
        maskRepeat: "no-repeat",
        maskPosition: "center",
        maskSize: "contain",
      }}
    />
  );
}

interface WordRevealProps {
  text: string;
  className?: string;
  as?: "h1" | "span";
}

export default function WordReveal({
  text,
  className = "",
  as = "h1",
}: WordRevealProps) {
  const MotionTag = as === "span" ? motion.span : motion.h1;
  const words = text.split(" ");

  return (
    <MotionTag
      className={className}
      aria-label={text}
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.06 }}
    >
      {words.map((word, i) => (
        <span key={i} aria-hidden="true">
          <motion.span
            className="inline-block"
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && " "}
        </span>
      ))}
    </MotionTag>
  );
}


export {
  Animation,
  AnimatedHeading,
  AnimatedCard,
  LeftAnimation,
  RightAnimation,
  GradientIcon,
  WordReveal,
};
