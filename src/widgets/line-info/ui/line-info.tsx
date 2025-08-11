'use client';

import { useSlider } from '@/features/slider';
import { circleInfo } from '@/shared/const';

import styles from './line.module.scss';

export function LineInfo() {
  const { activeSlide } = useSlider();
  const { text } = circleInfo[activeSlide];
  return (
    <div className={styles.info}>
      <p className={styles.info__text}>{text}</p>
      <div className={styles.info__line} />
    </div>
  );
}