import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from './year.module.scss';

interface YearUIProps {
  year: number;
  animateTrigger: number; // тригер для анимации так как при измения индекста в swipper будет пререндинг через useEffect
}

export function YearUI({ year, animateTrigger }: YearUIProps) {
  const numberRef = useRef<HTMLParagraphElement>(null);
  const obj = useRef({ value: year - 10 });

  useEffect(() => {
    if (!numberRef.current) return;

    obj.current.value = year - 10; // сброс значения перед анимацией
    gsap.to(obj.current, {
      value: year,
      duration: .8,
      ease: 'power1.out',
      onUpdate: () => {
        if (numberRef.current) {
          numberRef.current.textContent = Math.floor(obj.current.value).toString();
        }
      },
    });
  }, [year, animateTrigger]); // следим за изменением года и триггера анимации

  return <p ref={numberRef} className={styles.year}>{year - 10}</p>;
}
