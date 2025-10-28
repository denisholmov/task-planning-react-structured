import type { FC } from "react";

import { Button, Menu } from "@mantine/core";

import { ThreePointsIcon } from "../../ui/icons/ThreePointsIcon";
import classes from "./styles/index.module.css";

export const ToggleMenu: FC = () => {
  return (
    <Menu>
      <Menu.Target>
        <Button className={classes.btn} variant="default">
          <ThreePointsIcon />
        </Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item>Upload</Menu.Item>
        <Menu.Item color="red">Delete</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};
