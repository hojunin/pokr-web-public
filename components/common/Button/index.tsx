import React from 'react';
import cn from 'classnames';
import styles from '@components/common/button/Button.module.scss';

interface ButtonProps {
  label: string;
  buttonStyle?: 'PAINTED' | 'BORDER' | 'BLACK';
  size?: 'LARGE' | 'MEDIUM' | 'SMALL' | 'XLARGE';
  disabled?: boolean;
  onClick: () => void;
}

const Button = (props: ButtonProps) => {
  const {
    label,
    buttonStyle = 'BORDER',
    size = 'MEDIUM',
    disabled,
    onClick,
    ...rest
  } = props;

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={cn(styles.root, {
        [styles.xlarge]: size === 'XLARGE',
        [styles.large]: size === 'LARGE',
        [styles.medium]: size === 'MEDIUM',
        [styles.small]: size === 'SMALL',
        [styles.painted]: buttonStyle === 'PAINTED',
        [styles.border]: buttonStyle === 'BORDER',
        [styles.black]: buttonStyle === 'BLACK',
      })}
      {...rest}
    >
      {label}
    </button>
  );
};

export default Button;
