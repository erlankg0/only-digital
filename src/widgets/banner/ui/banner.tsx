import styles from './banner.module.scss';
import { TitleUI } from '@/shared/components/title';

export function Banner() {
  return (
    <section className={styles.banner}>
      <TitleUI title={'Исторические даты'} />
    </section>
  );
}