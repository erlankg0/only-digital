import { Banner } from '@/widgets/banner';
import styles from './page.module.scss';
import { TitleUI } from '@/shared/components/title';
import { SliderUI, SliderNavigation } from '@/widgets/slider';
import { CircleSlider } from '@/widgets/circle-slider';
import { InfoSlider } from '@/widgets/info-slider';

export default function Page() {
  return (
    <section className={styles.page}>
      <Banner>
        <div className={styles.bannerContent}>
          {/* top */}
          <div className={styles.top}>
            <TitleUI title="Исторические даты" />
          </div>

          {/* main center */}
          <div className={styles.main}>
            <SliderUI />
            <CircleSlider />
          </div>
          <div className={styles.footer}>
            <SliderNavigation />
            <InfoSlider />
          </div>
          <div className={styles.footer__mobile}>
            <InfoSlider />
          </div>
        </div>
      </Banner>
    </section>
  );
}
