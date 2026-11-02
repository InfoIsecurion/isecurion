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

import { Icon } from "@iconify/react";
interface GradientIconProps {
  Icon?: string;
  className?: string;
}

function GradientIcon({
  Icon: iconName,
  className = "w-8 h-8",
}: GradientIconProps) {
  return (
    <div
      className={className}
      style={{
        background: "linear-gradient(180deg, #0FEADB 0%, #0F66EA 100%)",
        WebkitMaskImage: `url("https://api.iconify.design/${iconName}.svg")`,
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        WebkitMaskSize: "contain",
        maskImage: `url("https://api.iconify.design/${iconName}.svg")`,
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
}

export default function WordReveal({ text, className = "" }: WordRevealProps) {
  return (
    <motion.h2
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.11,
          },
        },
      }}
    >
      {text.split(" ").map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-[0.25em]"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.h2>
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
