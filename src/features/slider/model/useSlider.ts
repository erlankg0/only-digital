import { create } from 'zustand';
import { Swiper as SwiperType } from 'swiper';
import { RefObject } from 'react';

type SliderState = {
  activeSlide: number;
  setActiveSlide: (activeSlide: number) => void;
  swiper?: RefObject<SwiperType | null> ;
  setSwiper: (swiper: RefObject<SwiperType | null>) => void;
};

export const useSlider = create<SliderState>((set) => ({
  activeSlide: 0,
  setActiveSlide: (activeSlide) => set({ activeSlide }),
  swiper: undefined,
  setSwiper: (swiper) => set({ swiper }),
}));
