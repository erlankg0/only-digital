import styles from './title.module.scss';

export function TitleUI({ title }: { title: string }) {
  return (
    <h1 className={styles.title}>{title}</h1>
  );
}