import Paper from '@mui/material/Paper';
import AddForm from "../AddForm/AddForm.tsx";
import Task from "../task/Task.tsx";
import FilterButtons from "../filterButtons/FilterButtons.tsx";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store.ts";
import {TasksType} from "../../types/types.ts";

type TodoListType = {
  id: string;
  title: string;
}

function TodoList(props: TodoListType) {
  const tasks = useSelector<AppRootStateType, TasksType>(state => state.task)
  return (
      <Paper sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '400px', paddingBottom: '20px'}}>
        <AddForm label='add task' title={props.title}/>
        {tasks[props.id].map((task) =>
            <Task
                title={task.title}
                isDone={task.completed}
            />)}
        <FilterButtons/>
      </Paper>
  );
}

export default TodoList;