import Link from "next/link";
import React from "react";
import { UrlObject } from "url";
import styles from './breadcrumb.module.scss'

interface BreadcrumbProps {
  Data: {
    url?: string | UrlObject;
    title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | Promise<React.ReactElement<any, string | React.JSXElementConstructor<any>>> | null | undefined;
  }[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ Data }) => {
  return (
    <>
      <ul className={`flex items-center justify-center ${styles.breadcrumbWrapp}`}>
        {Data?.map((list, i) => (
          <React.Fragment key={i}>
            {list.url ? (
              <li>
                <Link href={list.url}>{list.title}</Link>
              </li>
            ) : (
              <li>{list.title}</li>
            )}
          </React.Fragment>
        ))}
      </ul>
    </>
  );
};

export default Breadcrumb;
