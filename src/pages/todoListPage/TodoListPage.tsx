import AddItemForm from "../../components/addItemForm/AddItemForm.tsx";
import Box from "@mui/material/Box";
import { Container, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import TodoList from "../../components/todoList/TodoList.tsx";

const todoLists = [
  {
    id: "1",
    title: "First Todo List",
  },
  {
    id: "2",
    title: "Second Todo List",
  },
  {
    id: "3",
    title: "Third Todo List",
  },
];

function TodoListPage() {
  return (
    <Container>
      <Box display="flex" alignItems="center" flexDirection="column" mt="50px">
        <Typography variant="h3" gutterBottom color="text.primary">
          Todo Lists
        </Typography>
        <AddItemForm label={"add new list"} />
        <Grid container spacing={2} mt="30px">
          {todoLists.map((tl) => (
            <Grid item xs={12} md={4} key={tl.id}>
              <TodoList todoId={tl.id} title={tl.title} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default TodoListPage;
