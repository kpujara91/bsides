'use client'
import React, { useState, ReactNode } from 'react'
import Image, { StaticImageData } from 'next/image'
import { HomeContent } from '@/components/JsonFiles/home'
import styles from './speakersBio.module.scss'
interface Card {
    title: string
    description: string
    src: string | StaticImageData
    content: ReactNode | (() => JSX.Element)
    ctaText: string
}

const Index = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null)

    const handleToggle = (index: number) => {
        if (activeIndex === index) {
            setActiveIndex(null) // Close the currently active item
        } else {
            setActiveIndex(index) // Open the clicked item
        }
    }

    return (
        <div className={`container ${styles.speakersAttendingWrapper}`}>
            <div className="title-wrapper text-center">
                {/* <span className={`h3 caption ${styles.PageCaption}`}>{HomeContent?.SpeakersBio?.Caption}</span> */}
                <h2 className="title">{HomeContent?.SpeakersBio?.Title}</h2>
            </div>
            {HomeContent?.SpeakersBio?.SpeakersBioList?.sort((a, b) =>
                a.description.localeCompare(b.description)
            )?.map((card: Card, i: number) => {
                const isActive = activeIndex === i
                return (
                    <div key={i} className={`py-2 pr-8 ${styles.ContentWrap}`}>
                        <button
                            className="flex items-center justify-between w-full text-left font-semibold py-2"
                            onClick={() => handleToggle(i)}
                            aria-expanded={isActive}
                        >
                            <div className="flex items-center gap-4">
                                <div
                                    className={`flex-shrink-0 ${styles.speakersImageWrapper}`}
                                >
                                    <Image
                                        src={card?.src}
                                        alt="Speaker"
                                        width={120}
                                        height={120}
                                    />
                                </div>
                                <div>
                                    <span
                                        className={`font-nasalization ${styles.speakersTitle}`}
                                    >
                                        {card?.title}
                                    </span>
                                    <span
                                        className={`block ${styles.smallTitle}`}
                                    >
                                        {card?.description}
                                    </span>
                                </div>
                            </div>
                            <svg
                                className={`fill-white shrink-0 ml-8 transition-transform duration-200 ${
                                    isActive ? 'rotate-180' : ''
                                }`}
                                width="16"
                                height="16"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect y="7" width="16" height="2" rx="1" />
                                <rect
                                    y="7"
                                    width="16"
                                    height="2"
                                    rx="1"
                                    className="transform rotate-90"
                                />
                            </svg>
                        </button>
                        <div
                            className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
                                isActive ? 'max-h-screen' : 'max-h-0'
                            }`}
                            style={{ maxHeight: isActive ? '1200px' : '0' }}
                        >
                            <div className="flex items-center"></div>
                            <p className="text-white py-3">
                                {/* Render content as JSX.Element if it's a function, otherwise directly */}
                                {typeof card?.content === 'function'
                                    ? card.content()
                                    : card?.content}
                            </p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Index
