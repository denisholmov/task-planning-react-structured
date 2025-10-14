export type NavigationItem = {
  id: string;
  path: string;
  name: string;
  icon: React.ReactNode;
};

export type NavigationProps = {
  items: NavigationItem[];
};
