import { RefObject, useCallback } from 'react';
import { Swiper as SwiperType } from 'swiper';
import styles from './info-button.module.scss';

type InfoSliderButtonUIProps = {
  direction: 'prev' | 'next';
  swiperRef: RefObject<SwiperType | null>;
  hidden?: boolean;
};

export function InfoSliderButtonUI({
                                     direction,
                                     hidden = false,
                                     swiperRef,
                                   }: InfoSliderButtonUIProps) {


  const handleOnClick = useCallback(() => {
    if (!swiperRef.current) return;

    if (direction === 'next') {
      swiperRef.current.slideNext();
    } else {
      swiperRef.current.slidePrev();
    }
  }, [direction, swiperRef]);

  return (
    <button className={`${styles.button} ${hidden && (styles.button__hidden)}`}
            onClick={handleOnClick}>{direction}</button>
  );

}

