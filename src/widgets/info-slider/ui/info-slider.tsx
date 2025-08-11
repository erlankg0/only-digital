'use client';

import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';
import { InfoUI } from '@/shared/components/info';
import { InfoSliderButtonUI } from '@/widgets/info-slider/ui/info-slider-button-ui';
import styles from './info.module.scss';
import { circleInfo } from '@/shared/const';
import { useSlider } from '@/features/slider';

export function InfoSlider() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [navState, setNavState] = useState({ isBeginning: true, isEnd: false });
  const { activeSlide } = useSlider();

  const { info } = circleInfo[activeSlide];
  const handleSlideChange = (swiper: SwiperType) => {
    setNavState({
      isBeginning: swiper.isBeginning,
      isEnd: swiper.isEnd,
    });
  };

  return (
    <div className={styles.info}>
      <InfoSliderButtonUI hidden={navState.isBeginning} direction="left" swiperRef={swiperRef} />
      {/* Сам слайдер */}
      <div className={styles.sliderWrapper}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={handleSlideChange}
        >
          {info.map((info, i)=> (
            <SwiperSlide key={i}>
              <InfoUI
                year={info.year}
                text={info.text}
              />
            </SwiperSlide>
          ))}

        </Swiper>
      </div>

      <InfoSliderButtonUI hidden={navState.isEnd} direction="right" swiperRef={swiperRef} />
    </div>
  );
}
