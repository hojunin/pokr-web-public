import React from 'react';
import styles from '@components/dashboard/main/DashBoardMain.module.scss';
import DashBoardPeriod from '../period';
import dynamic from 'next/dynamic';

const DynamicGraph = dynamic(() => import('./../graph'), {
  loading: () => <>그래프 로딩중</>,
});

const DashboardMain = () => {
  return (
    <section className={styles.root}>
      <DashBoardPeriod />
      <DynamicGraph />
    </section>
  );
};

export default DashboardMain;
