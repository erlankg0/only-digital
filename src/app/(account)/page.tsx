import { Banner } from '@/widgets/banner';
import { CircleSlider } from '@/widgets/circle-slider';
import { InfoSlider } from '@/widgets/info-slider';
import { SliderNavigation, SliderUI } from '@/widgets/slider';
import { LineInfo } from '@/widgets/line-info';

import { TitleUI } from '@/shared/components/title';

import styles from './page.module.scss';


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
          <div className={styles.main_mobile}>
            <SliderUI />
            <LineInfo />
          </div>

          <div className={styles.footer}>
            <SliderNavigation />
            <InfoSlider />
          </div>
          <div className={styles.footer__mobile}>
            <InfoSlider slot={<SliderNavigation />} />
          </div>
        </div>
      </Banner>
    </section>
  );
}
