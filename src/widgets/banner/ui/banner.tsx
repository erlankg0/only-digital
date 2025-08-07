import styles from './banner.module.scss';
import { TitleUI } from '@/shared/components/title';
import { CircleSlider } from '@/widgets/circle-slider';

export function Banner() {
  return (
    <section className={styles.banner}>
      <TitleUI title={'Исторические даты'} />
      <CircleSlider />
    </section>
  );
}