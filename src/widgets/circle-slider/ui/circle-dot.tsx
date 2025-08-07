import styles from './circle-dot.module.scss';

type CircleDotProps = {
  sliderIndex: number;
  title: string;
  isActive: boolean;
};

export function CircleDot({ sliderIndex, title, isActive }: CircleDotProps) {
  return (
    <div className={styles.circle}>
      <div
        className={`${styles.dot} ${isActive ? styles.active : ''}`}
      >
        <div>{sliderIndex}</div>
      </div>
      {isActive && <p className={styles.circle__title}>{title.toUpperCase()}</p>}
    </div>
  );
}
