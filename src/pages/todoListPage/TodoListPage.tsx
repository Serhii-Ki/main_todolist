import AddItemForm from "../../components/addItemForm/AddItemForm.tsx";
import Box from "@mui/material/Box";
import { Container, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

const todoLists = [
  {
    id: "1",
    title: "First Todo List",
    items: ["Task 1", "Task 2", "Task 3"],
  },
  {
    id: "2",
    title: "Second Todo List",
    items: ["Task 4", "Task 5", "Task 6"],
  },
  {
    id: "3",
    title: "Third Todo List",
    items: ["Task 7", "Task 8", "Task 9"],
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
        <Grid container spacing={2}></Grid>
      </Box>
    </Container>
  );
}

export default TodoListPage;
