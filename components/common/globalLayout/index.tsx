import React from 'react';
import Navbar from '@components/common/globalLayout/navbar';
import { Header, MobileHeader } from '@components/common/globalLayout/header';
import useIsMobile from '@hooks/useIsMobile';
import styles from '@components/common/globalLayout/GlobalLayout.module.scss';

interface GlobalLayoutProps {
  children: React.ReactNode;
}

const GlobalLayout = ({ children }: GlobalLayoutProps) => {
  // const { isMobile, isApp } = useIsMobile();
  return (
    <main className={styles.root}>
      {/* {isMobile ? isApp ? <></> : <MobileHeader /> : <Header />}
      {!isMobile && <Navbar />} */}
      <Header />
      <Navbar />
      {children}
    </main>
  );
};

export default GlobalLayout;
