import { Group } from "@mantine/core";
import { Link } from "react-router-dom";

import type { NavbarSimpleProps } from "./types";

import classes from "./styles/index.module.css";

export function NavbarSimple({
  data,
  itemLogo,
  itemLogout,
}: NavbarSimpleProps) {
  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Group className={classes.header}>
          <itemLogo.icon className={classes.linkIcon} />
          <span>{itemLogo.label}</span>
        </Group>
        <ul className={classes.menu}>
          {data.map((item) => (
            <li className={classes.item} key={item.id}>
              <Link to={item.link} className={classes.link}>
                <item.icon className={classes.linkIcon} stroke="1.5" />
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className={classes.item}>
        <Link
          to={itemLogout.link}
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <itemLogout.icon className={classes.linkIcon} stroke="1.5" />
          <span>{itemLogout.label}</span>
        </Link>
      </div>
    </nav>
  );
}
