"use client";
import { cn } from "@/lib/utils";
import { StaticImageData, StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    image?: string | StaticImageData;
    src?: string | StaticImport;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn("scroller relative w-full overflow-hidden", className)}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex flex-nowrap min-w-full shrink-0 gap-4 w-max",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items?.map((item, idx) => {
          // Handle both string and StaticImageData types for image
          const imageSrc = typeof item.image === 'string' ? item.image : item.image?.src ?? '/images/about-image1.webp';

          return (
            <li className="w-[200px] h-[100px] sm:w-[250px] sm:h-[150px] md:w-[300px] md:h-[200px] xl:w-[400px] xl:h-[300px] xxl:w-[516px] xxl:h-[444px]" key={idx}>
              <Image src={imageSrc} alt="card image" width={516} height={444} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};