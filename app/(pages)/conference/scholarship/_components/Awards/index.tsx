import React from "react";
import styles from "./Awards.module.scss";
import { ScholarshipContent } from "@/components/JsonFiles/scholarship";
import Image from "next/image";
import { BentoGrid, BentoGridItem } from '../BentoGridDemo'


const Awards: React.FC = () => {
  return (
    <>
    <section className={`${styles.awardsWrapper} ptb-160`}>
        <div className="container">
          {/* <div className={`title-wrapper ${styles.titleWrapper}`} style={{display:"flex",gap:"8"}}>
         {
            ScholarshipContent?.Awards?.scholarshipslist.map((scholLost,i)=>{
              return(
                <div className="center-image" key={i}>
                <Image src={scholLost?.imagePath}  alt="Scholarship image" className="object-none object-center" height={540} width={540} />
                <br/>
                { 
                  scholLost?.BookNowButtonURL !=="" ? 
                  (
                    <div className="text-center mt-4">
                    <a className={` comonBtn`}  href={scholLost?.BookNowButtonURL} target="_blank">Submit Your Nomination</a>
                    </div>
                  )
                  :
                  (
                <div className="text-center mt-4">
                <span className={` comonBtn`} >Comming Soon</span>
                </div>
                  )
                }
            </div>
              )
            })
         }
          </div> */}
          <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {ScholarshipContent?.Awards?.scholarshipslist.map((item, i) => (
        <BentoGridItem
          key={i}
          title="hello title"
          header="hello header"
          btnurl={item?.BookNowButtonURL}
          imgPath={item?.imagePath}
          // extraTitle={item?.extraTitle}
          // className={item.className}
          // icon={item.imagePath}
        />
      ))}
    </BentoGrid>
        </div>
      
    </section>
    </>
  );
};

export default Awards;