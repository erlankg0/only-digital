'use client';

import { Swiper as SwiperType } from 'swiper';
import { RefObject } from 'react';
import styles from './slider-button.module.scss';

interface SliderButtonProps {
  isNext: boolean;
  swiperRef: RefObject<SwiperType | null>;
}

export function SliderButton({ isNext, swiperRef }: SliderButtonProps) {
  const handleOnClick = () => {
    if (!swiperRef.current) return;

    if (isNext) {
      swiperRef.current.slideNext();
    } else {
      swiperRef.current.slidePrev();
    }
  };

  return <button className={styles.button} onClick={handleOnClick}>{isNext ? '>' : '<'}</button>;
}
