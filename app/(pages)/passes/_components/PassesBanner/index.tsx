"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from './passesBanner.module.scss';
import { CanvasRevealEffect } from "@/components/AceternityUI/canvas-reveal-effect";
import { PassesContent } from '@/components/JsonFiles/passes'

const PassesBanner: React.FC = () => {
    const [hovered, setHovered] = React.useState(false);
  return (
    <>
      <section className="pb-80">
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={`flex items-center justify-center overflow-hidden relative ${styles.passesBannerwrapper}`}
          >
            <div className="container">
              <h1 className={`font-nasalization ${styles.Title}`}>{PassesContent?.Banner?.Title}</h1>
            </div>
            <AnimatePresence>
              {hovered && (
              <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full w-full absolute inset-0"
              >
                  <CanvasRevealEffect
                  animationSpeed={5}
                  containerClassName="bg-transparent"
                  colors={[
                      [59, 130, 246],
                      [139, 92, 246],
                  ]}
                  opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
                  dotSize={2}
                  />
              </motion.div>
              )}
            </AnimatePresence>
          </div>
      </section>
    </>
  );
};

export default PassesBanner;