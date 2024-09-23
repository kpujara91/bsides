import React from "react";
import styles from './pricingTable.module.scss';
import { PassesContent } from '@/components/JsonFiles/passes';

const PricingTable: React.FC = () => {
  return (
    <>
      <section className={`ptb-160 ${styles.pricingTableWrapper}`}>
        <div className="container">
            <div className="title-wrapper">
                <h2 className="title text-center">{PassesContent?.PricingTable?.Title}</h2>
                <p className={`text-center ${styles.Notes}`}>{PassesContent?.PricingTable?.Note}</p>
            </div>
            <div className={`${styles.PTWrapper}`}>
                <table>
                    <tbody>
                        <tr>
                            <td></td>
                            <td className={`${styles.TSWrapp}`} colSpan={2}>Early BIRD - 24 july to 10 august 2024</td>

                            <td className={`${styles.TSWrapp}`} colSpan={2}>Standard Sale - 10 aug to until sold out</td>

                            {/* <td className={`${styles.TSWrapp}`} colSpan={2}>Last Min - 10 sep to until sold out</td> */}
                            <td className={`${styles.MinWidth}`}></td>
                        </tr>
                        <tr>
                            <td>PASS TYPE</td>
                            <td>INR</td>
                            <td>USD</td>

                            <td>INR</td>
                            <td>USD</td>
                            
                            {/* <td>INR</td>
                            <td>USD</td> */}
                            <td className={`${styles.MinWidth}`}>DELIVERABLES</td>
                        </tr>
                        <tr>
                            <td>Student Pass</td>
                            <td>3500 INR</td>
                            <td>50 USD</td>

                            <td>4000 INR</td>
                            <td>60 USD</td>

                            {/* <td>5000 INR</td>
                            <td>70 USD</td> */}

                            <td className={`${styles.TSWrapp} ${styles.MinWidth}`}>
                                <ul>
                                    <li>Representation of active student id card is mandatory.</li>
                                    <li>Access to the Conference for two days</li>
                                    <li>Breakfast-Lunch-High Tea</li>
                                    <li>Certificate of Participation (Digital)</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>Individual Pass</td>
                            <td>6500 INR</td>
                            <td>85 USD</td>

                            <td>8000 INR</td>
                            <td>100 USD</td>

                            {/* <td>10,000 INR</td>
                            <td>140 USD</td> */}

                            <td className={`${styles.TSWrapp} ${styles.MinWidth}`}>
                                <ul>
                                    <li>Access to the conference for two days</li>
                                    <li>Breakfast, lunch, and high tea</li>
                                    <li>BSides Ahmedabad Hacker Coffee Cup</li>
                                    <li>Certificate of Participation (digital)</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>Professional Pass</td>
                            <td>9000 INR</td>
                            <td>120 USD</td>

                            <td>10,500 INR</td>
                            <td>140 USD</td>

                            {/* <td>12,000 INR</td>
                            <td>180 USD</td> */}

                            <td className={`${styles.TSWrapp} ${styles.MinWidth}`}>
                                <ul>
                                    <li>Access to the conference</li>
                                    <li>Breakfast, lunch, and high tea</li>
                                    <li>Access to networking dinner</li>
                                    <li>BSides Ahmedabad limited edition swag</li>
                                    <li>Certificate of Participation (digital)</li>
                                    <li>Access to award night show</li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
      </section>
    </>
  );
};

export default PricingTable;
