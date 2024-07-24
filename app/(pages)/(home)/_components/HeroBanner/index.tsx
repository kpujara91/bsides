"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, LayoutGroup, useMotionTemplate, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

// import { FlipWords } from '@/components/AceternityUI/flip-words';
// import { HoverBorderGradient } from '@/components/AceternityUI/hover-border-gradient';
import styles from './heroBanner.module.scss';
// import { EvervaultCard } from '@/components/AceternityUI/evervault-card';
import {HomeContent} from '@/components/JsonFiles/home'

type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";

const HeroBanner: React.FC = () => {
  return (
    <>
      {/* Hero Banner */}
      <section className={`relative ${styles.heroBanner}`}>
        <div className="container">
          <div className={`overflow-hidden ${styles.heroTitleWraper}`}>
            <h1 className={`font-nasalization text-center gradiant-title title-wrapper ${styles.heroTitleInner}`}>
              {HomeContent?.HiroBanner?.banerTitle} <span className="relative"><FlipWords words={HomeContent?.HiroBanner?.bannerAnimationLoop} /></span> 
              {/* {" "} {HomeContent?.HiroBanner?.bannerAnimationLoop} */}
              <br /> {HomeContent?.HiroBanner?.banerYear}
            </h1>
            <ul className={`flex items-center justify-center flex-wrap gap-2 sm:gap-4 xl:gap-7 ${styles.bannerCardList}`}>
                {HomeContent?.HiroBanner?.BannerCardList?.map((list,i)=>{
                    return(
                        <React.Fragment key={i}>
                            <HoverBorderGradient
                                as="li"
                                containerClassName={`h3 ${styles.bannerCard}`}
                            >
                                {list}
                            </HoverBorderGradient>
                            {/* <li className={`h3 relative flex items-center flex-col justify-center transition overflow-visible ${styles.bannerCard}`}>
                              <span className='relative z-2'>{list}</span>
                              <div className={`bg-BorderGrey18 absolute z-1 flex-none inset-[2px] rounded-[100px]`}></div>
                            </li> */}
                        </React.Fragment>
                    )
                })}
            </ul>
          </div>
        </div>
        <EvervaultCard className={`absolute left-0 top-0 w-full h-full ${styles.heroBgAnimation}`} characters={HomeContent?.HiroBanner?.bgAnimationText}/>
      </section>
    </>
  );
};

export default HeroBanner;

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

export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  as: Tag = "button",
  duration = 1,
  clockwise = true,
  ...props
}: React.PropsWithChildren<
  {
    as?: React.ElementType;
    containerClassName?: string;
    className?: string;
    duration?: number;
    clockwise?: boolean;
  } & React.HTMLAttributes<HTMLElement>
>) {
  const [hovered, setHovered] = useState<boolean>(false);
  const [direction, setDirection] = useState<Direction>("TOP");
 
  const rotateDirection = (currentDirection: Direction): Direction => {
    const directions: Direction[] = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
    const currentIndex = directions.indexOf(currentDirection);
    const nextIndex = clockwise
      ? (currentIndex - 1 + directions.length) % directions.length
      : (currentIndex + 1) % directions.length;
    return directions[nextIndex];
  };
 
  const movingMap: Record<Direction, string> = {
    TOP: "radial-gradient(20.7% 50% at 50% 0%, #933AFA 0%, rgba(255, 255, 255, 0) 100%)",
    LEFT: "radial-gradient(16.6% 43.1% at 0% 50%, #00FD9D  0%, rgba(255, 255, 255, 0) 100%)",
    BOTTOM:
      "radial-gradient(20.7% 50% at 50% 100%, #933AFA 0%, rgba(255, 255, 255, 0) 100%)",
    RIGHT:
      "radial-gradient(16.2% 41.199999999999996% at 100% 50%, #00FD9D 0%, rgba(255, 255, 255, 0) 100%)",
  };
 
  const highlight =
    "radial-gradient(75% 181.15942028985506% at 50% 50%, #00FD9D 0%, rgba(255, 255, 255, 0) 100%)";
 
  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setDirection((prevState) => rotateDirection(prevState));
      }, duration * 1000);
      return () => clearInterval(interval);
    }
  }, [hovered]);
  return (
    <Tag
      onMouseEnter={(event: React.MouseEvent<HTMLDivElement>) => {
        setHovered(true);
      }}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative flex items-center flex-col justify-center transition overflow-visible",
        containerClassName
      )}
      {...props}
    >
      <span
        className={cn(
          "relative z-2",
        )}
      >
        {children}
      </span>
      <motion.div
        className={cn(
          "flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]"
        )}
        style={{
          filter: "blur(2px)",
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
        initial={{ background: movingMap[direction] }}
        animate={{
          background: hovered
            ? [movingMap[direction], highlight]
            : movingMap[direction],
        }}
        transition={{ ease: "linear", duration: duration ?? 1 }}
      />
      <div className="bg-BorderGrey18 absolute z-1 flex-none inset-[2px] rounded-[100px]" />
    </Tag>
  );
}

const generateRandomString = (length: number, characters: string) => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

export const EvervaultCard = ({
  children,
  className,
  characters,
}: {
    text?: string;
    bgText?: string;
    className?: string;
    characters?: any;
    children?: React.ReactNode;
  }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const [randomString, setRandomString] = useState("");

  useEffect(() => {
    const str = generateRandomString(100000, characters);
    setRandomString(str);
  }, [characters]);

  function onMouseMove({ currentTarget, clientX, clientY }:any) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);

    const str = generateRandomString(100000, characters);
    setRandomString(str);
  }

  return (
    <div
      className={cn(
        "bg-transparent aspect-square flex items-center justify-center w-full h-full relative",
        className
      )}
    >
      <div
        onMouseMove={onMouseMove}
        className="group/card w-full relative overflow-hidden bg-transparent flex items-center justify-center h-full"
      >
        <CardPattern
          mouseX={mouseX}
          mouseY={mouseY}
          randomString={randomString}
        />
        {children}
      </div>
    </div>
  );
};

export function CardPattern({ mouseX, mouseY, randomString }:any) {
  const maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50"></div>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r secondary-gradient-animate primary-gradient-animate opacity-0 group-hover/card:opacity-100 backdrop-blur-xl transition duration-500"
        style={style}
      />
      <motion.div
        className="absolute inset-0 opacity-0 mix-blend-overlay group-hover/card:opacity-100"
        style={style}
      >
        <p className="absolute inset-x-0 text-xs h-full break-words whitespace-pre-wrap text-white font-mono font-bold transition duration-500">
          {randomString}
        </p>
      </motion.div>
    </div>
  );
}
