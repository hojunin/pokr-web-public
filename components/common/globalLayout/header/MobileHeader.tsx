import React from 'react';
import AutoHeightImage from '@components/common/image';
import styles from './MobileHeader.module.scss';

const MobileHeader = () => {
  return (
    <header className={styles.root}>
      <button type="button">
        <AutoHeightImage
          src="/images/left-arrow.png"
          alt="검색"
          width={28}
          height={28}
        />
      </button>
      <h1>대시보드</h1>
      <button type="button">
        <AutoHeightImage
          src="/images/search-black.png"
          alt="검색"
          width={28}
          height={28}
        />
      </button>
    </header>
  );
};

export default MobileHeader;
