import styles from './banner.module.scss';
import { TitleUI } from '@/shared/components/title';
import { SliderUI } from '@/widgets/slider';

export function Banner() {
  return (
    <section className={styles.banner}>
      <TitleUI title={'Исторические даты'} />
      <SliderUI />

    </section>
  );
}