import Container from '@mui/material/Container';
import Box from "@mui/material/Box";
import { v4 as uuidv4 } from 'uuid';
import AddForm from "./components/AddForm/AddForm.tsx";
import TodoList from "./components/todolist/TodoList.tsx";
import {useSelector} from "react-redux";
import {AppRootStateType, useAppDispatch} from "./store/store.ts";
import {TodoListType} from "./utils/types.ts";
import {AddTodoAC} from "./store/todolists-actions.ts";
import {ChangeEvent, useEffect, useState} from "react";
import {AddNewArrayAC} from "./store/tasks-actions.ts";
import useRequest from "./utils/hooks/useRequest.ts";
import {fetchTodolistsTC} from "./store/todolists-thunks.ts";

function App() {
  const todoLists = useSelector<AppRootStateType, TodoListType[]>(state => state.todoList);
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState<string>('');
  const [isErrorText, setIsErrorText] = useState<boolean>(false);

  const {addTodoListReq} = useRequest();

  useEffect(() => {
    dispatch(fetchTodolistsTC());
  }, [])

  const addTodoList = () => {
    if(inputValue) {
      const todoListId = uuidv4()
      dispatch(AddTodoAC(todoListId, inputValue));
      dispatch(AddNewArrayAC(todoListId));
      setInputValue('');
      addTodoListReq(inputValue).then(res => console.log(res));
    } else {
      setIsErrorText(true)
    }
  }

  const onChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setIsErrorText(false)
  }

  return (
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
  )
}

export default App
