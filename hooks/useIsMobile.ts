import { isRN } from '@utils/device';
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

/**
 * 반응형 pc, mobile 체크
 */
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isApp, setIsApp] = useState(false);

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  useEffect(() => {
    setIsMobile(isTabletOrMobile);
    setIsApp(isRN());
  }, [isTabletOrMobile]);

  return { isMobile, isApp };
};

export default useIsMobile;
