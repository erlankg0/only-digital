import styles from './banner.module.scss';
import { ReactNode } from 'react';

export function Banner({ children }: { children: ReactNode }) {
  return (
    <section className={styles.banner}>
      {children}
    </section>
  );
}