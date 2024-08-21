import AddItemForm from "../../components/addItemForm/AddItemForm.tsx";
import Box from "@mui/material/Box";
import { Container, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import TodoList from "../../components/todoList/TodoList.tsx";
import { useAppDispatch } from "../../utils/hooks/useAppDispatch.ts";
import { useEffect } from "react";
import { selectTodoLists, todoListsThunks } from "../../store/todoSlice.ts";
import { useAppSelector } from "../../utils/hooks/useAppSelector.ts";

function TodoListPage() {
  const dispatch = useAppDispatch();
  const todoLists = useAppSelector(selectTodoLists);

  useEffect(() => {
    dispatch(todoListsThunks.fetchTodoLists());
  }, []);

  const addTodoList = (title: string) => {
    dispatch(todoListsThunks.fetchAddTodoList(title));
  };

  return (
    <Container>
      <Box display="flex" alignItems="center" flexDirection="column" mt="50px">
        <Typography variant="h3" gutterBottom color="text.primary">
          Todo Lists
        </Typography>
        <AddItemForm label={"add new list"} addItem={addTodoList} />
        <Grid container spacing={2} mt="30px">
          {todoLists.map((tl) => (
            <Grid item xs={12} md={4} key={tl.id}>
              <TodoList todoId={tl.id} title={tl.title} filter={tl.filter} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default TodoListPage;
