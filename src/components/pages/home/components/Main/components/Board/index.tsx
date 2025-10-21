import { type FC } from "react";

import classes from "./styles/index.module.css";

export const Board: FC = () => {
  return (
    <div className={classes.board}>
      <h2 className={classes.title}>Board</h2>

      <ul></ul>
    </div>
  );
};
