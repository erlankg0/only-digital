import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';
import { InfoUI } from '@/shared/components/info';
import { InfoSliderButtonUI } from '@/widgets/info-slider/ui/info-slider-button-ui';
import styles from './info.module.scss';

export function InfoSlider() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [navState, setNavState] = useState({ isBeginning: true, isEnd: false });

  const handleSlideChange = (swiper: SwiperType) => {
    setNavState({
      isBeginning: swiper.isBeginning,
      isEnd: swiper.isEnd,
    });
  };

  return (
    <div className={styles.info}>
      <InfoSliderButtonUI hidden={navState.isBeginning} direction="prev" swiperRef={swiperRef} />
      {/* Сам слайдер */}
      <div className={styles.sliderWrapper}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={handleSlideChange}
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <SwiperSlide key={i}>
              <InfoUI
                year="2000"
                text="Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <InfoSliderButtonUI hidden={navState.isEnd} direction="next" swiperRef={swiperRef} />
    </div>
  );
}
