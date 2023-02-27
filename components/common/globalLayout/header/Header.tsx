import React from 'react';
import styles from '@components/common/globalLayout/header/Header.module.scss';
import Link from 'next/link';
import AutoHeightImage from '@components/common/image';
import useInput from 'hooks/useInput';

const Header = () => {
  const searchText = useInput({ initialValue: '', maxLength: 20 });

  return (
    <header className={styles.root}>
      <Link href="/">POKR Project</Link>
      <div className={styles.searchContainer}>
        <div className={styles.searchIcon}>
          <AutoHeightImage
            src="/images/search.png"
            alt="검색"
            width={20}
            height={20}
          />
        </div>
        <input
          type="text"
          placeholder="목표명, 태그 등을 검색해보세요 :)"
          value={searchText.value}
          onChange={(e) => searchText.onChangeInput(e)}
        />
        {searchText.value.length > 0 && (
          <button
            type="button"
            className={styles.searchBtn}
            onClick={searchText.reset}
          >
            <AutoHeightImage
              src="/images/close.png"
              alt="검색"
              width={18}
              height={18}
            />
          </button>
        )}
      </div>
      <div className={styles.user}>
        김아무개
        <div className={styles.profile} />
      </div>
    </header>
  );
};

export default Header;
