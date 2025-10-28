import { Title } from "@mantine/core";
import { type FC } from "react";

import { ToggleMenu } from "@/src/components/pages-content/ToggleMenu";

import type { TaskColumnProps } from "./types";

import { AddTask } from "./components/AddTask";
import { Task } from "./components/Task";
import classes from "./styles/index.module.css";

export const TaskColumn: FC<TaskColumnProps> = ({ taskColumn }) => {
  return (
    <li className={classes.taskColumnItem}>
      <div className={classes.head}>
        <Title order={3} className={classes.title}>
          {taskColumn.title}
        </Title>
        <div className={classes.icons}>
          <AddTask />
          <ToggleMenu />
        </div>
      </div>
      <ul className={classes.tasksMenu}>
        {taskColumn.tasks?.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </li>
  );
};
