import { RefObject, useCallback } from 'react';
import { Swiper as SwiperType } from 'swiper';
import { ChevronUI } from '@/shared/components/chevron';
import styles from './info-button.module.scss';
import { useSlider } from '@/features/slider';

type InfoSliderButtonUIProps = {
  direction: 'left' | 'right';
  swiperRef: RefObject<SwiperType | null>;
  hidden?: boolean;
  className?: string;
  totalSlides?: number;
};

export function InfoSliderButtonUI({
                                     direction,
                                     hidden = false,
                                     swiperRef,
                                     className = '',
                                     totalSlides = 0,
                                   }: InfoSliderButtonUIProps) {
  const { activeSlide } = useSlider();


  const handleOnClick = useCallback(() => {
    if (!swiperRef.current) return;

    if (direction === 'left' && activeSlide <= 0) return;
    if (direction === 'right' && activeSlide >= totalSlides - 1) return;

    if (direction === 'right') {
      swiperRef.current.slideNext();
    } else {
      swiperRef.current.slidePrev();
    }
  }, [activeSlide, direction, swiperRef, totalSlides]);


  return (
    <button className={`${styles.button} ${hidden && (styles.button__hidden)} ${className}`}
            onClick={handleOnClick}>
      {!hidden && (
        <ChevronUI direction={direction == 'left' ? 'right' : 'left'} isActive={!hidden} color={'#3877EE'} />
      )}
    </button>
  );

}

