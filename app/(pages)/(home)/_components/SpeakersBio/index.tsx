"use client";
import React, { useEffect, useId, useRef, useState, useMemo } from "react";
import styles from './speakersBio.module.scss';
import { HomeContent } from '@/components/JsonFiles/home';
import Image, { StaticImageData } from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

interface Card {
  title: string;
  description: string;
  src: string | StaticImageData;
  content: string | (() => JSX.Element);
  ctaText: string;
}

const SpeakersBio: React.FC = () => {
  const cards: Card[] = useMemo(() => HomeContent?.SpeakersBio?.SpeakersBioList || [], []);
  const [active, setActive] = useState<Card | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <section className={`ptb-160 ${styles.speakersAttendingWrapper}`}>
      <div className="container">
        {/* <div className='flex items-start flex-col xl:flex-row gap-4 md:gap-6 xxxl:gap-16'>
          <div className='w-full xl:w-1/3 xl:sticky xl:top-8'>
            <div className="title-wrappertext-center">
              <span className={`h3 caption ${styles.PageCaption}`}>{HomeContent?.SpeakersBio?.Caption}</span>
              <h2 className='title'>{HomeContent?.SpeakersBio?.Title}</h2>
            </div>
          </div>
          <div className='w-full xl:w-2/3'>
            <AnimatePresence>
              {active && (
                <>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={`fixed inset-0 h-full w-full z-10 ${styles.speakerBioBoxBG}`}
                  />
                  <div className={`fixed inset-0 grid place-items-center z-[100] ${styles.speakerBioBox}`}>
                    <motion.button
                      key={`button-${active.title}-${id}`}
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, transition: { duration: 0.05 } }}
                      className={`flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6 ${styles.speakerBoxClose}`}
                      onClick={() => setActive(null)}
                    >
                      <CloseIcon />
                    </motion.button>
                    <motion.div
                      layoutId={`card-${active.title}-${id}`}
                      ref={ref}
                      className={`w-full max-w-[500px] md:h-fit max-h-[90%] flex flex-col overflow-hidden ${styles.speakerBioBoxInner}`}
                    >
                      <motion.div layoutId={`image-${active.title}-${id}`} className={`flex-shrink-0 ${styles.speakersImageWrapper}`}>
                        <Image priority width={175} height={175} src={active.src} alt={active.title} />
                      </motion.div>
                      <div className={styles.speakersContentWrapper}>
                        <motion.h3 layoutId={`title-${active.title}-${id}`} className={`font-nasalization ${styles.speakersTitle}`}>
                          {active.title}
                        </motion.h3>
                        <motion.p layoutId={`description-${active.description}-${id}`} className={`h3 font-nasalization ${styles.speakersSubTitle}`}>
                          {active.description}
                        </motion.p>
                        <div className={styles.speakersDescription}>
                          {typeof active.content === "function" ? active.content() : active.content}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </>
              )}
            </AnimatePresence>
            <div className={`w-full grid grid-cols-2 sm:grid-cols-3 md:block gap-3 md:gap-0 overflow-hidden ${styles.speakersBioList}`}>
              {cards?.map((card) => (
                <motion.div
                  layoutId={`card-${card.title}-${id}`}
                  key={`card-${card.title}-${id}`}
                  onClick={() => setActive(card)}
                  className={`flex items-center flex-col md:flex-row justify-between gap-4 md:gap-7 cursor-pointer ${styles.speakersBioItem}`}
                >
                  <div className={`flex items-center flex-col md:flex-row gap-4 xl:gap-5 xxxl:gap-7 ${styles.speakersBioIner}`}>
                    <motion.div layoutId={`image-${card?.title}-${id}`} className={`flex-shrink-0 ${styles.speakersImageWrapper}`}>
                      <Image width={175} height={175} src={card?.src} alt={card?.title} />
                    </motion.div>
                    <div className={styles.speakersContentWrapper}>
                      <motion.h3 layoutId={`title-${card?.title}-${id}`} className={`font-nasalization ${styles.speakersTitle}`}>
                        {card?.title}
                      </motion.h3>
                      <motion.p layoutId={`description-${card?.description}-${id}`} className={`h3 font-nasalization ${styles.speakersSubTitle}`}>
                        {card?.description}
                      </motion.p>
                    </div>
                  </div>
                  <motion.button layoutId={`button-${card?.title}-${id}`} className={`flex-shrink-0 h3 font-nasalization ${styles.speakersButton}`}>
                    {card.ctaText}
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </div> */}
        <div className="title-wrapper text-center">
              {/* <span className={`h3 caption ${styles.PageCaption}`}>{HomeContent?.SpeakersBio?.Caption}</span> */}
              <h2 className='title text-center'>{HomeContent?.SpeakersBio?.Title}</h2>
            </div>
        <div className='no-data mt-60'>Coming Soon</div>
      </div>
    </section>
  );
};

export default SpeakersBio;

export const CloseIcon = () => (
  <motion.svg
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0, transition: { duration: 0.05 } }}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4 text-black"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M18 6l-12 12" />
    <path d="M6 6l12 12" />
  </motion.svg>
);