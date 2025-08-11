'use client';

import { ReactNode, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';

import { circleInfo } from '@/shared/const';
import { InfoUI } from '@/shared/components/info';
import { useSlider } from '@/features/slider';

import { InfoSliderButtonUI } from './info-slider-button-ui';
import { InfoPagination } from './info-pagination';
import styles from './info.module.scss';


export function InfoSlider({ slot }: { slot?: ReactNode }) {
  const swiperRef = useRef<SwiperType | null>(null);
  const { activeSlide } = useSlider();

  const [navState, setNavState] = useState({ isBeginning: true, isEnd: false });
  const [activeIndex, setActiveIndex] = useState(0);


  const currentSlide = circleInfo[activeSlide];
  const info = currentSlide?.info ?? null;

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

          {info && info.map((info, i) => (
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
        {info && (<InfoPagination swiperType={swiperRef} activeIndex={activeIndex} totalSlides={info.length} />)}
      </div>
    </div>
  );
}
