import React from 'react';
import AutoHeightImage from '@components/common/image';
import styles from '@components/common/globalLayout/navbar/Navbar.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const currentPath = usePathname();

  return (
    <nav className={styles.root}>
      {TABS.map((tab) => (
        <Link
          href={tab.route}
          className={currentPath === tab.route ? styles.selected : undefined}
          key={tab.title}
        >
          <AutoHeightImage
            src={tab.icon}
            alt={`${tab.title} 아이콘`}
            width={24}
            height={24}
          />
          {tab.title}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;

const TABS = [
  {
    route: '/dashboard',
    title: '대시보드',
    icon: '/images/dash-board.png',
  },
  {
    route: '/goal-management',
    title: '목표관리',
    icon: '/images/goal-management.png',
  },
  {
    route: '/memoir',
    title: '회고록',
    icon: '/images/memoir.png',
  },
];
