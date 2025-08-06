import styles from './info.module.scss';

type InfoUIProps = {
  year: string;
  text: string;
}

export function InfoUI(props: InfoUIProps) {
  const { text, year } = props;
  return (
    <article className={styles.info}>
      <h3 className={styles.info__year}>{year}</h3>
      <p className={styles.info__text}>{text}</p>
    </article>
  );
}