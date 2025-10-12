import type { MainProps } from "./types/interface";

import styles from "./styles/Main.module.css";

export const Main = ({ children }: MainProps) => {
  return <main className={styles.main}>
		{children}</main>;
};
