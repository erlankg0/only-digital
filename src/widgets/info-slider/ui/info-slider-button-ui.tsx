import { RefObject, useCallback } from 'react';
import { Swiper as SwiperType } from 'swiper';
import styles from './info-button.module.scss';
import { ChevronUI } from '@/shared/components/chevron';

type InfoSliderButtonUIProps = {
  direction: 'left' | 'right';
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

    if (direction === 'right') {
      swiperRef.current.slideNext();
    } else {
      swiperRef.current.slidePrev();
    }
  }, [direction, swiperRef]);

  return (
    <button className={`${styles.button} ${hidden && (styles.button__hidden)}`}
            onClick={handleOnClick}>
      {!hidden && (
        <ChevronUI direction={direction == 'left' ? 'right' : 'left'} isActive={!hidden} color={"#3877EE"} />
      )}
    </button>
  );

}

