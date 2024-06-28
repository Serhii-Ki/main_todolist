import {Box, Container, Grid, LinearProgress} from "@mui/material";
import AddItemForm from "./components/addItemForm/AddItemForm.tsx";
import {ChangeEvent, useEffect, useState} from "react";
import {addTodoListTC, getTodoListsTC} from "./store/todoListStore/todoLists-thunk.ts";
import {useAppDispatch, useAppSelector} from "./store/store.ts";
import {getAppState, getTodoLists} from "./store/selectors.ts";
import TodoList from "./components/todoList/TodoList.tsx";
import CustomAppBar from "./components/appBar/AppBar.tsx";

function App() {
  const [inputTodo, setInputTodo] = useState<string>('');
  const dispatch = useAppDispatch();
  const todoLists = useAppSelector(getTodoLists);
  const appState = useAppSelector(getAppState);

  useEffect(() => {
    dispatch(getTodoListsTC())
  }, []);

  const onChangeTodoInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputTodo(e.target.value);
  }

  const addTodoList = () => {
    dispatch(addTodoListTC(inputTodo))
  }

  return (
    <>
      <CustomAppBar/>
      <Box position='relative'>
        {appState.loadStatus === 'loading' && <LinearProgress color="success" style={{position: 'absolute', bottom: '0', left: '0', right: '0'}}/>}
      </Box>
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
        </Container>
      </Box>
    </>
  )
}

export default App
