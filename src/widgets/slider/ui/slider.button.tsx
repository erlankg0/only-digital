'use client';

import { Swiper as SwiperType } from 'swiper';
import { RefObject, useCallback } from 'react';
import styles from './slider-button.module.scss';
import { ChevronUI } from '@/shared/components/chevron';

interface SliderButtonProps {
  isNext: boolean;
  canMove: boolean;
  swiperRef: RefObject<SwiperType | null> | undefined;
}

export function SliderButton({ isNext, swiperRef, canMove }: SliderButtonProps) {
  const handleOnClick = useCallback(() => {
    if (!swiperRef) {
      return;
    } else {
      if (!swiperRef.current) return;

      if (isNext) {
        swiperRef.current.slideNext();
      } else {
        swiperRef.current.slidePrev();
      }
    }
  }, [isNext, swiperRef]);

  return <button className={`${styles.button} ${canMove ? (styles.active) : (styles.disabled)}`}
                 onClick={handleOnClick}>{isNext ? (<ChevronUI isActive={canMove} direction={'left'} />) : (
    <ChevronUI isActive={canMove} />)}</button>;
}
