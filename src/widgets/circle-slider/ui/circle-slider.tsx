'use client';

import { useRef, useState } from 'react';
import gsap from 'gsap';
import { CircleDot } from './circle-dot';
import styles from './circle-slider.module.scss';

const ITEMS = Array.from({ length: 8 });

export function CircleSlider() {
  const circleRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(ITEMS.length - 1);
  const [rotation, setRotation] = useState(0); //  состояние для текущего поворота что бы комписировать повороты дочерних данных

  const anglePerItem = 360 / ITEMS.length;

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
        setRotation(updatedRotation); // обновляем поворот
      },
    });

    setActiveIndex(index);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.circle} ref={circleRef}>
        {ITEMS.map((_, i) => {
          const angle = anglePerItem * i;
          const radius = 265;

          const x = radius * Math.cos((angle * Math.PI) / 180);
          const y = radius * Math.sin((angle * Math.PI) / 180);

          return (
            <div
              key={i}
              className={`${styles.item} ${i === activeIndex ? styles.active : ''}`}
              style={{
                left: '50%',
                top: '50%',
                transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
              }}
              onClick={() => rotateTo(i)}
            >
              <div style={{ transform: `rotate(${-rotation}deg)` }}>
                <CircleDot sliderIndex={i} title={'Наука'} isActive={activeIndex === i} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
