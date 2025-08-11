'use client';

import { SliderButton } from './slider.button';
import { years } from '@/shared/const';
import { useSlider } from '@/features/slider';

import styles from './slider.module.scss';

export function SliderNavigation() {
  const { activeSlide, swiper } = useSlider();

  const totalSlides = years.length;

  const canGoPrev = activeSlide > 0;
  const canGoNext = activeSlide < totalSlides - 1;

  return (
    <div className={styles.navigation}>
      <p className={styles.navigation__counter}>
        {activeSlide + 1} / {totalSlides}
      </p>
      <div className={styles.navigation__buttons}>
        <SliderButton canMove={canGoPrev} isNext={false} swiperRef={swiper} />
        <SliderButton canMove={canGoNext} isNext={true} swiperRef={swiper} />
      </div>
    </div>

  );
}