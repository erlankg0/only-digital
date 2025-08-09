'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { YearUI } from '@/shared/components/year';
import { useRef } from 'react';
import { Swiper as SwiperType } from 'swiper';
import styles from './slider.module.scss';
import { SliderButton } from '@/widgets/slider/ui/slider.button';
import { CircleSlider } from '@/widgets/circle-slider';
import { InfoSlider } from '@/widgets/info-slider';
import { useSlider } from '@/features/slider';


const years = [
  [1987, 1991],
  [1992, 1996],
  [1997, 2001],
  [2002, 2006],
  [2007, 2011],
  [2012, 2016],
];


export function SliderUI() {
  const swiperRef = useRef<SwiperType | null>(null);
  const { activeSlide, setActiveSlide } = useSlider();

  const totalSlides = years.length; // общее количество слайдов

  const canGoPrev = activeSlide > 0;
  const canGoNext = activeSlide < totalSlides - 1;

  return (
    <div>
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

      <div className={styles.navigation}>
        <p className={styles.navigation__counter}>
          {activeSlide + 1} / {totalSlides}
        </p>
        <div className={styles.navigation__buttons}>
          <SliderButton canMove={canGoPrev} isNext={false} swiperRef={swiperRef} />
          <SliderButton canMove={canGoNext} isNext={true} swiperRef={swiperRef} />
        </div>
      </div>
      <CircleSlider />
      <InfoSlider />
      <div className={styles.info}>

      </div>

    </div>
  );
}
