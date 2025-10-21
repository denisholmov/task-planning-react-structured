import { InputSearch } from "@/src/components/ui/InputSearch";

import styles from "./styles/index.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <InputSearch />
    </header>
  );
};
