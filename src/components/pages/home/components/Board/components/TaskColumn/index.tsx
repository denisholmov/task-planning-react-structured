import { Title } from "@mantine/core";
import { type FC } from "react";

import { PlusIcon } from "@/src/components/ui/icons/PlusIcon";
import { ThreePointsIcon } from "@/src/components/ui/icons/ThreePointsIcon";

import type { TaskColumnProps } from "./types";

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
          <PlusIcon />
          <ThreePointsIcon />
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
