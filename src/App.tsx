import {Box} from "@mui/material";
import AddItemForm from "./components/addItemForm/AddItemForm.tsx";


function App() {

  return (
    <Box display='flex' flexDirection='column' alignItems='center' gap='20px' paddingTop='30px'>
      <h1>Add todo list</h1>
      <AddItemForm label='add todo'/>
    </Box>
  )
}

export default App
