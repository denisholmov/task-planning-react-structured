import type { FC } from "react";

import { Text, Title } from "@mantine/core";

import { ThreePointsIcon } from "@/src/components/ui/icons/ThreePointsIcon";

import type { TaskProps } from "./types";

import classes from "./styles/index.module.css";

export const Task: FC<TaskProps> = ({ task }) => {
  return (
    <li className={classes.task}>
      <div className={classes.head}>
        <Title>{task.title}</Title>
        <ThreePointsIcon />
      </div>
      <Text
        className={classes.text}
        style={{
          width: "100%",
          wordBreak: "break-word",
          whiteSpace: "normal",
        }}
      >
        {task.text}
      </Text>
    </li>
  );
};
