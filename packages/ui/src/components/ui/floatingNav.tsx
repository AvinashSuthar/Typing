"use client";
import React, { JSX, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "../../lib/utils";

export const FloatingNav = ({
  navItems,
  className,
  modeToggle,
  signIn,
  onNavigate,
}: {
  navItems?: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
  modeToggle: JSX.Element;
  signIn: JSX.Element;
  onNavigate: (link: string) => void;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex w-full backdrop-blur fixed top-0 inset-x-0 mx-auto  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2  items-center justify-between space-x-4 dark:shadow-[0_0_20px_1px_rgba(70,130,180,0.7)]",
          className
        )}
      >
        <div
          className="text-3xl cursor-pointer"
          onClick={() => onNavigate("/")}
        >
          <img width={70} height={70} src="./logo.png" alt="Logo" />
        </div>
        <div className="flex gap-5">
          {navItems?.map((navItem: any, idx: number) => (
            <button
              key={`link=${idx}`}
              onClick={() => onNavigate(navItem.link)}
              className={cn("relative  items-center flex space-x-1   ")}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:block text-sm">{navItem.name}</span>
            </button>
          ))}
        </div>

        <div className="flex gap-5  items-center">
          <div className="">{modeToggle}</div>
          <div className="mx-5">{signIn}</div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
