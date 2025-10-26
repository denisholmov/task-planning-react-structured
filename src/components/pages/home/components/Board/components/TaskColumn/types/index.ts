export type TaskType = {
  id: number;
  title: string;
  text: string;
};

export type TaskColumnProps = {
  taskColumn: {
    id: number;
    title: string;
    tasks?: TaskType[];
  };
};
