import { Banner } from '@/widgets/banner';
import styles from './page.module.scss';

export default function Page() {
  return (
    <section className={styles.page}>
      <Banner />
    </section>
  );
}