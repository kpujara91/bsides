import React from "react";
import styles from './termsAndConditions.module.scss';
import { PassesContent } from '@/components/JsonFiles/passes';

const TermsAndConditions: React.FC = () => {
  return (
    <>
      <section className={`pt-80 pb-160 ${styles.termsAndConditionsWrapper}`}>
        <div className="container">
            <div className="title-wrapper">
                <h2 className="title text-center">{PassesContent?.TermsAndConditions?.Title}</h2>
            </div>
            {PassesContent?.TermsAndConditions?.TermsAndConditionList &&
                <ul className={`${styles.termsAndConditionList}`}>
                    {PassesContent?.TermsAndConditions?.TermsAndConditionList?.map((list,i)=>{
                        return(
                            <React.Fragment key={i}>
                                <li className={`${styles.termsAndConditionItem}`}>
                                  {list?.Data}

                                  {list?.SubList &&
                                    <ol>
                                      {list?.SubList?.map((sList,j)=>{
                                        return(
                                          <React.Fragment key={j}>
                                            <li>{sList?.SubData}</li>
                                          </React.Fragment>
                                        )
                                      })}
                                    </ol>
                                  }
                                </li>
                            </React.Fragment>
                        )
                    })}
                </ul>
            }
        </div>
      </section>
    </>
  );
};

export default TermsAndConditions;
