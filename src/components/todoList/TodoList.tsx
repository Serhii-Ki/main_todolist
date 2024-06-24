import {Box, Paper, Typography} from "@mui/material";
import AddItemForm from "../addItemForm/AddItemForm.tsx";

type TodoListPropsType = {
  title: string
}

function TodoList(props: TodoListPropsType) {
  return (
      <Paper>
        <Box>
          <Typography variant="h3">
            {props.title}
          </Typography>
          <AddItemForm label={'add task'}/>
        </Box>
      </Paper>
  );
}

export default TodoList;