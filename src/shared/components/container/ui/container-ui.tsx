import { ReactNode } from 'react';
import styles from './container.module.scss';

export default function ContainerWrapper({ children }: { children: ReactNode }) {
  return (
    <div className={styles.container}>{children}</div>
  );
}