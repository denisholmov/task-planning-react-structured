import type { MainProps } from "./types/interface";

import styles from "./styles/index.module.css";

export const Main = ({ children }: MainProps) => {
  return <main className={styles.main}>{children}</main>;
};
