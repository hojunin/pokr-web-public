import React from 'react';
import styles from '@components/dashboard/aside/DashBoardAside.module.scss';

const AsideLoading = () => {
  return (
    <aside className={styles.root}>
      <div className={styles.header}>
        <h1>어사이드 컴포넌트 로딩중이다</h1>
      </div>

      <div className={styles.card}></div>
    </aside>
  );
};

export default AsideLoading;
