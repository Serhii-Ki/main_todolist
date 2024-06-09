import Container from '@mui/material/Container';
import Box from "@mui/material/Box";
import AddForm from "./components/AddForm/AddForm.tsx";
import TodoList from "./components/todolist/TodoList.tsx";
import {useAppSelector} from "./store/store.ts";
import {ChangeEvent, useEffect, useState} from "react";
import {selectAllTodoLists} from "./store/selectors.ts";
import Header from "./components/header/Header.tsx";
import {useTodoList} from "./components/todolist/hook/useTodoList.ts";
import SnackbarError from "./components/snackbar/Snackbar.tsx";

function App() {
  const todoLists = useAppSelector(selectAllTodoLists)
  const [inputValue, setInputValue] = useState<string>('');
  const [isErrorText, setIsErrorText] = useState<boolean>(false);


  const {getTodoLists, addTodoListReq} = useTodoList();

  useEffect(() => {
    getTodoLists();
  }, [])

  const addTodoList = () => {
    if(inputValue) {
      addTodoListReq(inputValue)
      setInputValue('');
    } else {
      setIsErrorText(true)
    }
  }

  const onChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setIsErrorText(false)
  }

  return (
      <>
        <SnackbarError/>
        <Header/>
        <Container>
          <AddForm
              label='add todo list'
              title='Add yor todo list'
              inputValue={inputValue}
              setInputValue={onChangeInputValue}
              addItem={addTodoList}
              isErrorText={isErrorText}
          />
          <Box display='flex' flexWrap='wrap' gap='40px' marginTop='50px'>
            {todoLists.map((todoList) =>
                <TodoList
                    key={todoList.id}
                    id={todoList.id}
                    title={todoList.title}
                    filter={todoList.filter}
                />
            )}
          </Box>
        </Container>
      </>
  )
}

export default App
