
'use client'
import React from 'react';
import styles from './CFPContent.module.scss'
import {CallForPappersContent} from '@/components/JsonFiles/call-for-paper'
import Link from 'next/link';
const CFPContent: React.FC = () => {
    return (
      <section className={`${styles.CFPContentWrapper} ptb-160`}>
        <div className='container'>
            <div className={`title-wrapper ${styles.CfpDetailsWrapper}`}>
                <h2 className='title mb-8'>{CallForPappersContent?.CfpContents?.MainTitle}</h2>
                <p className='mb-10'>{CallForPappersContent?.CfpContents?.description}</p>
                <h3 className='title mb-8'>{CallForPappersContent?.CfpContents?.TopicsCovered?.title}</h3>
                <ul className='mb-10'>{CallForPappersContent?.CfpContents?.TopicsCovered?.topicLists?.map((topic, index) => (
                  <li key={index} className={styles.bulletPoint}>{`${topic}`}</li>
                ))}</ul>
                <h3  className='title mb-8'>{CallForPappersContent?.CfpContents?.TechnicalTalks?.title}</h3>
                <p  className='mb-10'>{CallForPappersContent?.CfpContents?.TechnicalTalks?.description}</p>
                <h3  className='title mb-8'>{CallForPappersContent?.CfpContents?.Workshops?.title}</h3>
                <p  className='mb-10'>{CallForPappersContent?.CfpContents?.Workshops?.description}</p>
                <h3  className='title mb-8'>{CallForPappersContent?.CfpContents?.TopicOfInterest?.title}</h3>
                <ul className='mb-10'>{CallForPappersContent?.CfpContents?.TopicOfInterest?.interestTopicLists?.map((topic, index) => (
                  <li key={index} className={styles.bulletPoint}>{topic}</li>
                ))}</ul>
                <h3  className='title mb-8'>{CallForPappersContent?.CfpContents?.CfpGuidelines?.title}</h3>
                <p  className='mb-10'>{CallForPappersContent?.CfpContents?.CfpGuidelines?.description}</p>
            </div>
            <div className={styles.formBox}>
              {/* <h3>BSides Ahmedabad 2021 Call for Papers</h3>
              <p>The form BSides Ahmedabad 2021 Call for Papers is no longer accepting responses.
              Try contacting the owner of the form if you think this is a mistake.</p> */}

              {/* <Link href={CallForPappersContent?.CfpContents?.CfpGoogleForm?.formLink}></Link> */}
              <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfHui1DBAXi8vDptLWlwDAe9QbAvpIQpjkrHUWYVybIQsr72g/viewform" width="100%" height="800" >Loading…</iframe>
            </div>
        </div>
      </section>
    );
  }

  export default CFPContent;