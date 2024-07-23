'use client'
import Image from 'next/image';
import styles from  './header.module.scss'
import {HeaderContent} from '@/components/JsonFiles/header'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header: React.FC = () => {
    const pathname = usePathname();
    return (
      <>
        <header className={`${styles.siteHeader}`}>
          <div className={`container ${styles.siteContent}`}>
            <div className={`flex items-center justify-between gap-2 ${styles.headerInner}`}>
              <Link href='/' className={`flex-shrink-0 ${styles.headerLogo}`}><Image src={HeaderContent?.Logo} alt='logo' width={139} height={67}/></Link>
              {pathname === "/passes/" ?
                <Link href={HeaderContent?.PassesButtonUrl} className={`inline-flex items-center justify-center ${styles.bookNowBtn}`} target='_blank'>{HeaderContent?.ButtonText}</Link>
                :
                <Link href={HeaderContent?.ButtonUrl} className={`inline-flex items-center justify-center ${styles.bookNowBtn}`}>{HeaderContent?.ButtonText}</Link>
              }
            </div>
          </div>
        </header>
      </>
    );
  }
  
  export default Header;