import Paper from '@mui/material/Paper';
import Box from "@mui/material/Box";
import AddForm from "../AddForm/AddForm.tsx";
import Task from "../task/Task.tsx";
import FilterButtons from "../filterButtons/FilterButtons.tsx";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store.ts";
import {FilterType, TasksType, TaskType} from "../../types/types.ts";
import {useState} from "react";
import EditSpan from "../editSpan/EditSpan.tsx";
import BtnGroup from "../btnGroup/BtnGroup.tsx";
import IconsGroup from "../iconsGroup/IconsGroup.tsx";
import {ChangeFilterAC, RemoveTodoAC} from "../../store/todolists-actions.ts";

type TodoListType = {
  id: string;
  title: string;
  filter: FilterType;
}

function TodoList(props: TodoListType) {
  const tasks = useSelector<AppRootStateType, TasksType>(state => state.task);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState<string>('');
  const [viewMode, setViewMode] = useState<boolean>(false);

  let filterTasks: TaskType[];

  const filterTasksFn = () => {
    if(props.filter === 'completed'){
      return filterTasks = tasks[props.id].filter(task => task.completed)
    } else if(props.filter === 'active') {
      return filterTasks = tasks[props.id].filter(task => !task.completed)
    } else {
      return filterTasks = tasks[props.id];
    }
  }

  const setInputMode = () => {
    setViewMode(true);
  }

  const setSpanMode = () => {
    setViewMode(false);
  }

  const removeTodoList = () => {
    dispatch(RemoveTodoAC(props.id))
  }

  const changeFiler = (filter: FilterType) => {
    dispatch(ChangeFilterAC(props.id, filter));
  }

  return (
      <Paper sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '400px', padding: '20px'}}>
        <Box display='flex' alignItems='center' gap='5px' fontSize='26px' fontWeight='700'>
          <EditSpan title={props.title} viewMode={viewMode} setSpanMode={setSpanMode} setInputMode={setInputMode}/>
          {viewMode ? <BtnGroup/> : <IconsGroup setInputMode={setInputMode} removeItem={removeTodoList}/>}
        </Box>
        <AddForm
            label='add task'
            inputValue={inputValue}
            setInputValue={setInputValue}
            addItem={() => {}}
        />
        {filterTasksFn().map((task) =>
            <Task
                key={task.id}
                taskId={task.id}
                title={task.title}
                isDone={task.completed}
                todoId={props.id}
            />)}
        <FilterButtons changeFiler={changeFiler} filter={props.filter}/>
      </Paper>
  );
}

export default TodoList;