import styles from './year.module.scss';

export function YearUI({ year }: { year: string }) {
  return (
    <p className={styles.year}>{year}</p>
  );
}