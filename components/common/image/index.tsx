import React from 'react';
import Image, { ImageProps } from 'next/image';
import styles from '@components/common/image/Image.module.scss';

const AutoHeightImage = ({ src, alt, ...props }: ImageProps) => {
  return (
    <div className={styles.root}>
      <Image className={styles.autoImage} src={src} alt={alt} {...props} />
    </div>
  );
};

export default AutoHeightImage;
