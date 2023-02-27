import React, { ReactNode } from 'react';
import cn from 'classnames';
import styles from './Text.module.scss';

interface TextProps {
  variant:
    | 'H1'
    | 'H2'
    | 'H3'
    | 'H4'
    | 'SUBTITLE'
    | 'BODY'
    | 'LABEL'
    | 'BUTTON'
    | 'TAG';
  weight?: 'NORMAL' | 'BOLD';
  children: ReactNode;
}

const Text = (props: TextProps) => {
  const { variant, weight = 'NORMAL', children, ...rest } = props;
  const tags = {
    H1: 'h1',
    H2: 'h2',
    H3: 'h3',
    H4: 'h4',
    SUBTITLE: 'h6',
    BODY: 'p',
    LABEL: 'label',
    BUTTON: 'span',
    TAG: 'span',
  };
  const TextTag = `${tags[variant]}` as keyof JSX.IntrinsicElements;

  return (
    <TextTag
      className={cn(styles.typo, {
        [styles.normal]: weight === 'NORMAL',
        [styles.bold]: weight === 'BOLD',
        [styles.button]: variant === 'BUTTON',
        [styles.tag]: variant === 'TAG',
      })}
      {...rest}
    >
      {children}
    </TextTag>
  );
};

export default Text;
