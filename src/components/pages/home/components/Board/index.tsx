import { Title } from "@mantine/core";
import { type FC } from "react";

import { TaskColumn } from "./components/TaskColumn";
import { itemsTaskColumn } from "./constants";
import classes from "./styles/index.module.css";

export const Board: FC = () => {
  return (
    <div className={classes.board}>
      <Title order={2} className={classes.title}>
        Board
      </Title>

      <ul className={classes.tasksList}>
        {itemsTaskColumn.map((taskColumn) => (
          <TaskColumn key={taskColumn.id} taskColumn={taskColumn} />
        ))}
      </ul>
    </div>
  );
};
