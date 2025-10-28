import type { FC } from "react";

import { Button } from "@mantine/core";

import { PlusIcon } from "@/src/components/ui/icons/PlusIcon";

import classes from "./styles/index.module.css";

export const AddTask: FC = () => {
  return (
    <Button className={classes.btn} variant="default">
      <PlusIcon />
    </Button>
  );
};
