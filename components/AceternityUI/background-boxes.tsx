"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
 
export const BoxesCore = ({ className, ...rest }: { className?: string }) => {
  const rows = new Array(150).fill(1);
  const cols = new Array(100).fill(1);
  let colors = [
    "--white",
    "--primary",
    "--secondary",
    "--white",
    "--primary",
    "--secondary",
    "--white",
    "--primary",
    "--secondary",
  ];
  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };
 
  return (
    <div
      style={{
        transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
        width: `1920px`,
        height: `1920px`,
      }}
      className={cn(
        "absolute top-0 left-0 right-0 bottom-0 flex",
        className
      )}
      {...rest}
    >
      {rows?.map((_, i) => (
        <motion.div
          key={`row` + i}
          className="w-20 h-10  border-l  Borderf20Color relative"
        >
          {cols?.map((_, j) => (
            <motion.div
              whileHover={{
                backgroundColor: `var(${getRandomColor()})`,
                transition: { duration: 0 },
              }}
              animate={{
                transition: { duration: 2 },
              }}
              key={`col` + j}
              className="w-20 h-10  border-r border-t Borderf20Color relative"
            >
              {/* {j % 2 === 0 && i % 2 === 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="absolute h-6 w-10 -top-[14px] -left-[22px] text-slate-700 stroke-[1px] pointer-events-none"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </svg>
              ) : null} */}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};
 
export const Boxes = React.memo(BoxesCore);