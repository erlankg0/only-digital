import { useCallback, RefObject } from 'react';
import { Swiper as SwiperType } from 'swiper';
import styles from './info-pagination.module.scss';

type InfoPaginationProps = {
  swiperType: RefObject<SwiperType | null>;
  totalSlides: number;
  activeIndex: number;
};

export function InfoPagination({ swiperType, totalSlides, activeIndex }: InfoPaginationProps) {
  const handleOnClickPagination = useCallback(
    (index: number) => {
      swiperType.current?.slideTo(index);
    },
    [swiperType]
  );

  return (
    <div className={styles.pagination}>
      {Array.from({ length: totalSlides }).map((_, i) => (
        <button
          key={i}
          className={`${styles.bullet} ${i === activeIndex ? styles.active : ''}`}
          onClick={() => handleOnClickPagination(i)}
        />
      ))}
    </div>
  );
}
