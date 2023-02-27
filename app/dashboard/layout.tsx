import React from 'react';
import styles from '@app/dashboard/Layout.module.scss';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.root}>{children}</div>;
};

export default Layout;
