import { create } from 'zustand';

type SliderState = {
  activeSlide: number;
  setActiveSlide: (activeSlide: number) => void;
}

export const useSlider = create<SliderState>((set) => ({
  activeSlide: 0,
  setActiveSlide: (activeSlide: number) => set({ activeSlide: activeSlide }),
}));