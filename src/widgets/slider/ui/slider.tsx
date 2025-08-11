'use client';

import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';

import { years } from '@/shared/const';
import { YearUI } from '@/shared/components/year';
import { useSlider } from '@/features/slider';

import styles from './slider.module.scss';

export function SliderUI() {
  const swiperRef = useRef<SwiperType | null>(null);
  const { activeSlide, setActiveSlide, setSwiper } = useSlider();

  useEffect(() => {
    setSwiper(swiperRef);
  }, [setSwiper]);

  return (
    <div className={styles.content}>
      <Swiper
        className={styles.slider}
        slidesPerView={1}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setActiveSlide(swiper.activeIndex); // инициализация индекса
        }}
        onSlideChange={(swiper) => {
          setActiveSlide(swiper.activeIndex); // обновляем индекс при смене слайда
        }}
      >
        {years.map((year, index) => (
          <SwiperSlide key={index}>
            <div className={styles.slide}>
              <YearUI year={year[0]} isRose animateTrigger={activeSlide} />
              <YearUI year={year[1]} animateTrigger={activeSlide} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
