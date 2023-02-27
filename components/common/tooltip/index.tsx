import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import styles from '@components/common/tooltip/ToolTip.module.scss';

interface ToolTipProps {
  text: string;
  open: boolean;
  clasName?: string;
}

const ToolTip = ({ text, open, clasName = '' }: ToolTipProps) => {
  const [animate, setAnimate] = useState<Boolean>(false);
  const [visible, setVisible] = useState<Boolean>(open);

  useEffect(() => {
    if (visible && !open) {
      setAnimate(true);
      setTimeout(() => setAnimate(open), 300);
    }
    setVisible(open);
  }, [visible, open]);

  if (!animate && !visible) return null;

  return (
    <div
      className={cn(styles.root, clasName, {
        [styles.open]: open,
        [styles.close]: !open,
      })}
    >
      {text}
    </div>
  );
};

export default ToolTip;
