import React from 'react';
import styles from '@components/dashboard/header/DashBoardHeader.module.scss';

const DashBoardHeader = () => {
  return (
    <div className={styles.root}>
      <h2>김아무개의 2023년은</h2>
      <input type="text" value="올해의 다짐 작성" readOnly />
      <p>362일 9시간 42분 남음</p>
      <button type="button">+목표 추가하기</button>
    </div>
  );
};

export default DashBoardHeader;
