
import AddItemForm from "../components/addItemForm/AddItemForm.tsx";
import {Box, Container, Grid} from "@mui/material";
import TodoList from "../components/todoList/TodoList.tsx";
import CustomSnackbar from "../components/snackbar/CustomSnackBar.tsx";
import {ChangeEvent, useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../store/store.ts";
import {getTodoLists} from "../store/selectors.ts";
import {addTodoListTC, getTodoListsTC} from "../store/todoListStore/todoLists-thunk.ts";

function TodoPage() {
  const [inputTodo, setInputTodo] = useState<string>('');
  const dispatch = useAppDispatch();
  const todoLists = useAppSelector(getTodoLists);

  useEffect(() => {
    dispatch(getTodoListsTC())
  }, []);

  const onChangeTodoInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputTodo(e.target.value);
  }

  const addTodoList = () => {
    if(inputTodo.trim()){
      dispatch(addTodoListTC(inputTodo))
      setInputTodo('')
    } else {
      return
    }
  }
  return (
      <Box display='flex' flexDirection='column' alignItems='center' gap='20px' paddingTop='30px'>
        <h1>Add todo list</h1>
        <AddItemForm label='add todo' value={inputTodo} onChange={onChangeTodoInput} onClick={addTodoList}/>
        <Container>
          <Grid container spacing={2} marginTop='30px' direction="row" alignItems="stretch">
            {todoLists.map((todo) => {
              return <TodoList
                  key={todo.id}
                  title={todo.title}
                  todoId={todo.id}
                  filter={todo.filter}
              />
            })}
          </Grid>
          <CustomSnackbar/>
        </Container>
      </Box>
  );
}

export default TodoPage;