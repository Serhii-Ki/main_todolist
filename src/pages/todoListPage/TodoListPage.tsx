import AddItemForm from "../../components/addItemForm/AddItemForm.tsx";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";

function TodoListPage() {
  return (
    <Container>
      <Box display="flex" alignItems="center" flexDirection="column" mt="50px">
        <Typography variant="h3" gutterBottom>
          Todo Lists
        </Typography>
        <AddItemForm label={"add new list"} />
      </Box>
    </Container>
  );
}

export default TodoListPage;
