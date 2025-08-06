'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { YearUI } from '@/shared/components/year';
import { useRef, useState } from 'react';
import { Swiper as SwiperType } from 'swiper';
import { SliderButton } from '@/widgets/slider/ui/slider.button';
import { InfoUI } from '@/shared/components/info';
import styles from './slider.module.scss';

export function SliderUI() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0); // индекс текущего слайда

  const totalSlides = 3; // общее количество слайдов

  return (
    <div>
      <Swiper
        className={styles.slider}
        slidesPerView={1}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setCurrentIndex(swiper.activeIndex); // инициализация индекса
        }}
        onSlideChange={(swiper) => {
          setCurrentIndex(swiper.activeIndex); // обновляем индекс при смене слайда
        }}
      >
        <SwiperSlide>
          <div className={styles.slide}>
            <YearUI year="2021" />
            <YearUI year="2022" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slide}>
            <YearUI year="2023" />
            <YearUI year="2024" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slide}>
            <YearUI year="2024" />
            <YearUI year="2026" />
          </div>
        </SwiperSlide>
      </Swiper>

      <div className={styles.navigation}>
        <p className={styles.navigation__counter}>
          {currentIndex + 1} / {totalSlides}
        </p>
        <div className={styles.navigation__buttons}>
          <SliderButton isNext={false} swiperRef={swiperRef} />
          <SliderButton isNext={true} swiperRef={swiperRef} />
        </div>
      </div>
      <div className={styles.info}>
        <InfoUI year={'2017'}
                text={'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11'} />
        <InfoUI year={'2017'}
                text={'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11'} />
        <InfoUI year={'2017'}
                text={'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11'} />
        <InfoUI year={'2017'}
                text={'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11'} />

      </div>

    </div>
  );
}
