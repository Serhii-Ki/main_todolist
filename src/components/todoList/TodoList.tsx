import AddItemForm from "../addItemForm/AddItemForm.tsx";
import Box from "@mui/material/Box";
import { Paper } from "@mui/material";
import EditSpan from "../editSpan/EditSpan.tsx";
import { useAppDispatch } from "../../utils/hooks/useAppDispatch.ts";
import { useAppSelector } from "../../utils/hooks/useAppSelector.ts";
import { selectedTasks, tasksThunks } from "../../store/tasksSlice.ts";
import { useEffect } from "react";

type Props = {
  todoId: string;
  title: string;
};

function TodoList(props: Props) {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector(selectedTasks);

  useEffect(() => {
    dispatch(tasksThunks.fetchTasks(props.todoId));
  }, []);

  console.log(tasks);
  return (
    <Paper sx={{ padding: "20px" }}>
      <Box display="flex" flexDirection="column" alignItems="center" gap="10px">
        <EditSpan title={props.title} type="todo" />
        <AddItemForm label={"add new task"} />
        {/*{tasks[props.todoId]?.map((task) => (*/}
        {/*  <Task key={task.id} taskId={task.id} title={task.title} />*/}
        {/*))}*/}
      </Box>
    </Paper>
  );
}

export default TodoList;
