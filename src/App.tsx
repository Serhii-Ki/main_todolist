import {Box} from "@mui/material";
import AddItemForm from "./components/addItemForm/AddItemForm.tsx";
import {useEffect} from "react";

import {getTodoListsTC} from "./store/todoListStore/todoLists-thunk.ts";
import {useAppDispatch} from "./store/store.ts";
import {useSelector} from "react-redux";
import {getTodoLists} from "./store/selectors.ts";


function App() {
  const dispatch = useAppDispatch();
  const todoLists = useSelector(getTodoLists)

  useEffect(() => {
    dispatch(getTodoListsTC())
  }, []);

  useEffect(() => {
    console.log(todoLists)
  }, [todoLists]);

  return (
    <Box display='flex' flexDirection='column' alignItems='center' gap='20px' paddingTop='30px'>
      <h1>Add todo list</h1>
      <AddItemForm label='add todo'/>
    </Box>
  )
}

export default App
