'use client';

import { useEffect, useRef, useState } from 'react';
import { useSlider } from '@/features/slider';
import { CircleDot } from './circle-dot';

import gsap from 'gsap';

import styles from './circle-slider.module.scss';

const circleInfo = [
  {
    index: 0,
    text: 'Кино',
    info: Array.from({ length: 12 }, (_, i) => ({
      year: 1987 + i,
      text: `Фильм ${i + 1}`,
    })),
  },
  {
    index: 1,
    text: 'Музыка',
    info: Array.from({ length: 12 }, (_, i) => ({
      year: 1992 + i,
      text: `Альбом ${i + 1}`,
    })),
  },
  {
    index: 2,
    text: 'Игры',
    info: Array.from({ length: 12 }, (_, i) => ({
      year: 1997 + i,
      text: `Игра ${i + 1}`,
    })),
  },
  {
    index: 3,
    text: 'Технологии',
    info: Array.from({ length: 12 }, (_, i) => ({
      year: 2002 + i,
      text: `Технология ${i + 1}`,
    })),
  },
  {
    index: 4,
    text: 'Мода',
    info: Array.from({ length: 12 }, (_, i) => ({
      year: 2007 + i,
      text: `Тренд ${i + 1}`,
    })),
  },
  {
    index: 5,
    text: 'Спорт',
    info: Array.from({ length: 12 }, (_, i) => ({
      year: 2012 + i,
      text: `Событие ${i + 1}`,
    })),
  },
];

export function CircleSlider() {
  const circleRef = useRef<HTMLDivElement>(null);
  const { activeSlide, setActiveSlide } = useSlider();

  const [rotation, setRotation] = useState(0);
  const anglePerItem = 360 / circleInfo.length;

  const rotateTo = (index: number) => {
    const currentRotation = gsap.getProperty(circleRef.current, 'rotation') as number;
    const targetAngle = -anglePerItem * index - 45;

    let angleDiff = targetAngle - currentRotation;
    while (angleDiff > 180) angleDiff -= 360;
    while (angleDiff < -180) angleDiff += 360;

    const newRotation = currentRotation + angleDiff;

    gsap.to(circleRef.current, {
      rotation: newRotation,
      duration: 0.6,
      ease: 'power2.inOut',
      onUpdate: () => {
        const updatedRotation = gsap.getProperty(circleRef.current, 'rotation') as number;
        setRotation(updatedRotation);
      },
    });
  };

  useEffect(() => {
    rotateTo(activeSlide);
  }, [activeSlide]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.circle} ref={circleRef}>
        {circleInfo.map((info, i) => {
          const angle = anglePerItem * i;
          const radius = 265;

          const x = radius * Math.cos((angle * Math.PI) / 180);
          const y = radius * Math.sin((angle * Math.PI) / 180);

          return (
            <div
              key={i}
              className={`${styles.item} ${i === activeSlide ? styles.active : ''}`}
              style={{
                left: '50%',
                top: '50%',
                transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
              }}
              onClick={() => setActiveSlide(i)}
            >
              <div style={{ transform: `rotate(${-rotation}deg)` }}>
                <CircleDot sliderIndex={i + 1} title={info.text} isActive={activeSlide === i} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
