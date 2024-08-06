"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, LayoutGroup, useMotionTemplate, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";
import styles from './TrainingsHeroBanner.module.scss';
import {ScheduleContent} from '@/components/JsonFiles/schedule'
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";

const TrainingsHeroBanner: React.FC = () => {
  return (
    <>
      <section className={`relative ${styles.TrainingsHeroBanner}`}>
        <div className="container">
          <Breadcrumb Data={ScheduleContent?.Trainings?.Banner?.Breadcrumb} />
          <div className={`overflow-hidden ${styles.heroTitleWraper}`}>
            <h1 className={`font-nasalization text-center gradiant-title title-wrapper ${styles.heroTitleInner}`}>
              {ScheduleContent?.Trainings?.Banner?.banerTitle}
            </h1>
          </div>
        </div>
        <Image src={ScheduleContent?.Trainings?.Banner?.BGImage} width={1920} height={750} alt="bgimage" className={`absolute top-0 left-0 w-full h-full object-cover ${styles.bgImage}`}/>
      </section>
    </>
  );
};

export default TrainingsHeroBanner;

export const FlipWords = ({
  words,
  duration = 3000,
  className,
}: {
  words: string[];
  duration?: number;
  className?: string;
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const startAnimation = useCallback(() => {
    const nextIndex = (currentWordIndex + 1) % words.length;
    setCurrentWordIndex(nextIndex);
    setIsAnimating(true);
  }, [currentWordIndex, words.length]);

  useEffect(() => {
    if (!isAnimating) {
      const timer = setTimeout(() => {
        startAnimation();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isAnimating, duration, startAnimation]);

  const currentWord = words[currentWordIndex];

  return (
    <AnimatePresence
      onExitComplete={() => {
        setIsAnimating(false);
      }}
    >
      <motion.span
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
        exit={{
          opacity: 0,
          y: 0,
          x: 0,
          filter: "blur(8px)",
          scale: 1,
          position: "absolute",
        }}
        className={cn(
          "inline-block relative text-left dark:text-neutral-100 px-2",
          className
        )}
        key={currentWordIndex}
      >
        {currentWord?.split("")?.map((letter, index) => (
          <motion.span
            key={currentWord + index}
            initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              delay: index * 0.08,
              duration: 0.4,
            }}
            className="inline-block gradiant-title"
          >
            {letter}
          </motion.span>
        ))}
      </motion.span>
    </AnimatePresence>
  );
};
