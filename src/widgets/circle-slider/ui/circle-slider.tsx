'use client';

import { useEffect, useRef, useState } from 'react';
import { useSlider } from '@/features/slider';
import { CircleDot } from './circle-dot';
import { circleInfo } from '@/shared/const';
import gsap from 'gsap';

import styles from './circle-slider.module.scss';

export function CircleSlider() {
  const circleRef = useRef<HTMLDivElement>(null);
  const { activeSlide, setActiveSlide } = useSlider();
  const [positions, setPositions] = useState<{ x: number; y: number }[]>([]);
  const radius = 265;

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

  useEffect(() => {
    const round = (n: number) => Math.round(n * 1000) / 1000;
    const newPositions = circleInfo.map((_, i) => {
      const angle = anglePerItem * i;
      const x = round(radius * Math.cos((angle * Math.PI) / 180));
      const y = round(radius * Math.sin((angle * Math.PI) / 180));
      return { x, y };
    });
    setPositions(newPositions);
  }, []);

  if (positions.length === 0) return null; // Пока координаты не готовы, ничего не рендерим

  return (
    <div className={styles.wrapper}>
      <div className={styles.circle} ref={circleRef}>
        {circleInfo.map((info, i) => (
          <div
            key={i}
            className={`${styles.item} ${i === activeSlide ? styles.active : ''}`}
            style={{
              left: '50%',
              top: '50%',
              transform: `translate(${positions[i].x}px, ${positions[i].y}px) translate(-50%, -50%)`,
            }}
            onClick={() => setActiveSlide(i)}
          >
            <div style={{ transform: `rotate(${-rotation}deg)` }}>
              <CircleDot sliderIndex={i + 1} title={info.text} isActive={activeSlide === i} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
