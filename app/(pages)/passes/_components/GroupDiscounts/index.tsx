import React from "react";
import styles from './groupDiscounts.module.scss';
import { PassesContent } from '@/components/JsonFiles/passes';

const GroupDiscounts: React.FC = () => {
  return (
    <>
      <section className={`ptb-160 ${styles.groupDiscountsWrapper}`}>
        <div className="container">
            <div className="title-wrapper">
                <h2 className="title text-center">{PassesContent?.GroupDiscounts?.Title}</h2>
            </div>
            <div className={`${styles.GDtablewraper}`}>
                <table>
                    <tbody>
                        <tr>
                            {PassesContent?.GroupDiscounts?.Table?.TableHead?.map((list,i)=>{
                                return(
                                    <React.Fragment key={i}>
                                        <td style={{ width: PassesContent?.GroupDiscounts?.Table?.ColSize }}>{list?.data}</td>
                                    </React.Fragment>
                                )
                            })}
                        </tr>
                        <tr>
                            {PassesContent?.GroupDiscounts?.Table?.TableBody?.map((list,i)=>{
                                return(
                                    <React.Fragment key={i}>
                                        <td style={{ width: PassesContent?.GroupDiscounts?.Table?.ColSize }}>{list?.data}</td>
                                    </React.Fragment>
                                )
                            })}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
      </section>
    </>
  );
};

export default GroupDiscounts;
