import React from "react";

import type { Task } from "./types/interface";

export const Board = () => {
  const [tasks, setTasks] = React.useState<Task[] | null>(null);

  fetch("https://68eb647e76b3362414cd8cc7.mockapi.io/tasks")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
    })
    .catch((error) => alert(error)); // подготовил запрос на бэкенд

  return <div className="board">Board</div>;
};
