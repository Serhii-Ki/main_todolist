import AddItemForm from "../addItemForm/AddItemForm.tsx";
import Box from "@mui/material/Box";
import { Paper } from "@mui/material";
import EditSpan from "../editSpan/EditSpan.tsx";
import { useAppDispatch } from "../../utils/hooks/useAppDispatch.ts";
import { useAppSelector } from "../../utils/hooks/useAppSelector.ts";
import { selectedTasks, tasksThunks } from "../../store/tasksSlice.ts";
import { useEffect } from "react";
import Task from "../task/Task.tsx";
import FilterButtons from "../filterButtons/FilterButtons.tsx";
import { FilterType } from "../../utils/types/mainTypes.ts";

type Props = {
  todoId: string;
  title: string;
  filter: FilterType;
};

function TodoList({ todoId, title, filter }: Props) {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector(selectedTasks);

  useEffect(() => {
    dispatch(tasksThunks.fetchTasks(todoId));
  }, []);

  const filteredTasks = () => {
    if (tasks[todoId]) {
      if (filter === "active") {
        return tasks[todoId].filter((task) => task.status !== 0);
      } else if (filter === "completed") {
        return tasks[todoId].filter((task) => task.status === 0);
      }
      return tasks[todoId];
    }
    return [];
  };

  return (
    <Paper sx={{ padding: "20px" }}>
      <Box display="flex" flexDirection="column" alignItems="center" gap="10px">
        <EditSpan title={title} type="todo" />
        <AddItemForm label={"add new task"} />
        {filteredTasks().map((task) => (
          <Task
            key={task.id}
            taskId={task.id}
            title={task.title}
            status={task.status}
          />
        ))}
        <FilterButtons todoId={todoId} filter={filter} />
      </Box>
    </Paper>
  );
}

export default TodoList;
