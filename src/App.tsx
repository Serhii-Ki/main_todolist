import Container from '@mui/material/Container';
import AddForm from "./components/AddForm/AddForm.tsx";
import TodoList from "./components/todolist/TodoList.tsx";
import {useSelector} from "react-redux";
import {AppRootStateType} from "./store/store.ts";
import {TodoListType} from "./types/types.ts";

function App() {
  const todoLists = useSelector<AppRootStateType, TodoListType[]>(state => state.todoList)

  return (
        <Container>
          <AddForm label='add todo list' title='Add yor todo list'/>
          {todoLists.map((todoList) =>
              <TodoList
                  key={todoList.id}
                  id={todoList.id}
                  title={todoList.title}
              />
          )}
        </Container>
  )
}

export default App
