'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './header.module.scss';
import { HeaderContent } from '@/components/JsonFiles/header';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SubMenuType {
  Menu: string;
  Url: string;
  target?: string;
}

interface MListType {
  HeadMenu: string;
  HeadMenuURL: string;
  SubMenuList?: SubMenuType[];
  target?: string;
}

const Header: React.FC = () => {
  const pathname = usePathname();
  const [menu, setMenu] = useState(false);

  const [scroll, setScroll] = useState(false);


  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);
  

  useEffect(() => {
    if (menu) {
      document.body.classList.add('open-menu');
    } else {
      document.body.classList.remove('open-menu');
    }
  }, [menu]);

  return (
    <>
      <header className={`${styles.siteHeader} ${scroll===true ? styles.headerActive : "" } `}>
        <div className={`container ${styles.siteContent}`}>
          <div className={`flex items-center justify-between gap-2 ${styles.headerInner}`}>
            <div className={`flex items-center gap-4 md:gap-6 xl:gap-8 ${styles.headerActionGroup}`}>
              <div className={`relative ${styles.menuBtnWrap} ${menu ? styles.active : ''}`} onClick={() => setMenu(!menu)}>
                <span className={`${styles.Icon}`}></span>
                <span className={styles.menuText}>Menu</span>
              </div>
              <Link href='/' className={`flex-shrink-0 ${styles.headerLogo}`}>
                <Image src={HeaderContent?.Logo} alt='logo' width={139} height={67} />
              </Link>
            </div>
            {pathname === '/passes/' ? (
              <Link
                href={HeaderContent?.PassesButtonUrl}
                className={`inline-flex items-center justify-center ${styles.bookNowBtn}`}
                target='_blank'
              >
                {HeaderContent?.ButtonText}
              </Link>
            ) : (
              <Link href={HeaderContent?.ButtonUrl} className={`inline-flex items-center justify-center ${styles.bookNowBtn}`}>
                {HeaderContent?.ButtonText}
              </Link>
            )}
            <div className={`fixed left-0 h-full w-full ${styles.menuWrap} ${menu ? styles.showMenu : ''}`}>
              <div className={`absolute top-2 right-2 md:top-4 md:right-4 ${styles.menuBtnWrap} ${menu ? styles.active : ''}`} onClick={() => setMenu(!menu)}>
                <span className={`${styles.Icon}`}></span>
              </div>
              <div className="container">
                <div className={`flex items-stretch flex-wrap gap-y-8 sm:gap-y-10 xl:gap-y-12 ${styles.menuInnerBody}`}>
                  {HeaderContent?.MegaMenu?.map((MList: MListType, i: number) => (
                    <div key={i} className={`w-full sm:w-1/2 md:w-1/3 sm:px-4 ${styles.menuInnerItem}`}>
                      <h3 className={`${styles.headLink}`}>
                        {MList.HeadMenuURL ? (
                          <Link
                            href={MList.HeadMenuURL}
                            onClick={() => setMenu(false)}
                            target={MList.target ?? '_self'}
                          >
                            {MList.HeadMenu}
                          </Link>
                        ) : (
                          <>{MList.HeadMenu}</>
                        )}
                      </h3>
                      {MList.SubMenuList && (
                        <ul>
                          {MList.SubMenuList.map((SMList, j) => (
                            <li key={j}>
                              {SMList.Url ? (
                                <Link href={SMList.Url} onClick={() => setMenu(false)} target={SMList.target ?? '_self'}>
                                  {SMList.Menu}
                                </Link>
                              ) : (
                                <>{SMList.Menu}</>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              {HeaderContent?.BuyNow && (
                <div className='flex items-center justify-center mt-8 sm:mt-10 xl:mt-12'>
                  <Link href={HeaderContent.ButtonUrl} onClick={() => setMenu(false)} className={`${styles.menuBuyBtn}`}>
                    {HeaderContent.BuyNow}
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;