'use client';

import { useRef, useState, ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';
import { InfoUI } from '@/shared/components/info';
import { InfoSliderButtonUI } from '@/widgets/info-slider/ui/info-slider-button-ui';
import styles from './info.module.scss';
import { circleInfo } from '@/shared/const';
import { useSlider } from '@/features/slider';
import { InfoPagination } from '@/widgets/info-slider/ui/info-pagination';

export function InfoSlider({ slot }: { slot?: ReactNode }) {
  const swiperRef = useRef<SwiperType | null>(null);
  const [navState, setNavState] = useState({ isBeginning: true, isEnd: false });
  const { activeSlide } = useSlider();
  const [activeIndex, setActiveIndex] = useState(0);

  const { info } = circleInfo[activeSlide];
  const handleSlideChange = (swiper: SwiperType) => {
    setNavState({
      isBeginning: swiper.isBeginning,
      isEnd: swiper.isEnd,
    });
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <div className={styles.info}>

      <InfoSliderButtonUI
        className={`${styles.sliderButton} ${styles['sliderButton--left']}`}
        hidden={navState.isBeginning}
        direction="left"
        swiperRef={swiperRef}
      />
      {/* Сам слайдер */}
      <div className={styles.sliderWrapper}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={handleSlideChange}
          breakpoints={{
            768: {
              slidesPerView: 3.5,
              spaceBetween: 30,
            },
            425: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
          }}
        >
          {info.map((info, i) => (
            <SwiperSlide key={i}>
              <InfoUI
                year={info.year}
                text={info.text}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <InfoSliderButtonUI
        className={`${styles.sliderButton} ${styles['sliderButton--right']}`}
        hidden={navState.isEnd}
        direction="right"
        swiperRef={swiperRef}
      />

      <div className={styles.navigation}>
        {slot}
        <InfoPagination swiperType={swiperRef} activeIndex={activeIndex} totalSlides={info.length} />
      </div>
    </div>
  );
}
