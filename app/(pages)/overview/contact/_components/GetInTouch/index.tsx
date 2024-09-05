import React from "react";
import styles from "./GetInTouch.module.scss";
import { OverviewContent } from "@/components/JsonFiles/overview";
import Image from "next/image";
const GetInTouch: React.FC = () => {
  return (
    <>
      <section className={`ptb-160 ${styles.contactUsDetailsWrapp}`}>
        <div className="container">
          <div className="text-center title-wrapper">
            <h2 className="title">
              {OverviewContent?.contact?.GetInTouchDetails?.Title}
            </h2>
          </div>
          {OverviewContent?.contact?.GetInTouchDetails?.GetInTouchDetailList && (
            <ul
              className={`grid grid-cols-1 sm:grid-cols-2 gap-6 xl:gap-10 ${styles.getInTouchLists}`}
            >
              {OverviewContent?.contact?.GetInTouchDetails?.GetInTouchDetailList?.map(
                (list, k) => {
                  return (
                    <React.Fragment key={k}>
                      <li>
                        <Image src={list?.icon} alt={list?.title} />
                        <h3>{list?.title}</h3>
                        {list?.url ? (
                          <p>
                            <a href={list?.url} target="_blank">
                              {list?.subtitle}
                            </a>
                          </p>
                        ) : (
                          <p>{list?.subtitle}</p>
                        )}
                      </li>
                    </React.Fragment>
                  );
                }
              )}
            </ul>
          )}
        </div>
        <div className={`AnimateCircle ${styles.animateCircle}`}>
                <Image src={OverviewContent?.GlobalAnimateCircleImage} alt="circleImage" width={999} height={900} />
            </div>
      </section>
    </>
  );
};

export default GetInTouch;
