export type FilterType = "all" | "active" | "completed";

export type TodoListType = {
  id: string;
  title: string;
  addedDate: Date;
  order: number;
};

export type TodolistDomainType = TodoListType & {
  filter: FilterType;
};
