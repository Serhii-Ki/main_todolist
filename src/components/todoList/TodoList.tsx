import AddItemForm from "../addItemForm/AddItemForm.tsx";
import Box from "@mui/material/Box";
import { Paper } from "@mui/material";
import Task from "../task/Task.tsx";
import EditSpan from "../editSpan/EditSpan.tsx";

type Props = {
  todoId: string;
  title: string;
};

type Task = {
  id: string;
  title: string;
  completed: boolean;
};

type Tasks = {
  [key: string]: Task[];
};

const tasks: Tasks = {
  "1": [
    {
      id: "1",
      title: "Task 1",
      completed: false,
    },
    {
      id: "2",
      title: "Task 2",
      completed: false,
    },
  ],
  "2": [
    {
      id: "3",
      title: "Task 3",
      completed: true,
    },
    {
      id: "4",
      title: "Task 4",
      completed: false,
    },
  ],
};

function TodoList(props: Props) {
  return (
    <Paper sx={{ padding: "20px" }}>
      <Box display="flex" flexDirection="column" alignItems="center" gap="10px">
        <EditSpan title={props.title} type="todo" />
        <AddItemForm label={"add new task"} />
        {tasks[props.todoId]?.map((task) => (
          <Task key={task.id} taskId={task.id} title={task.title} />
        ))}
      </Box>
    </Paper>
  );
}

export default TodoList;
