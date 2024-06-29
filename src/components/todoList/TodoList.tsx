import {Box, Grid, Paper} from "@mui/material";
import AddItemForm from "../addItemForm/AddItemForm.tsx";
import EditSpan, {ViewModeType} from "../editSpan/EditSpan.tsx";
import {ChangeEvent, useEffect, useState} from "react";
import CustomBtn from "../customBtn/CustomBtn.tsx";
import {FilterType} from "../../store/todoListStore/todoLists-reducer.ts";
import {AppRootStateType, useAppDispatch, useAppSelector} from "../../store/store.ts";
import Task from "../task/Task.tsx";
import {getTasks, getTodoLists} from "../../store/selectors.ts";
import {addTaskTC, getTasksTC} from "../../store/tasksStore/tasks-thunk.ts";
import {changeFilterAC} from "../../store/todoListStore/todoLists-actions.ts";
import {deleteTodoListTC} from "../../store/todoListStore/todoLists-thunk.ts";

type TodoListPropsType = {
  title: string
  todoId: string
  filter: FilterType
}

function TodoList(props: TodoListPropsType) {
  const [viewMode, setViewMode] = useState<ViewModeType>('span');
  const [inputTask, setInputTask] = useState<string>('')
  const tasks = useAppSelector((state: AppRootStateType) => getTasks(state, props.todoId));
  const filter = useAppSelector(getTodoLists).find(todo => todo.id === props.todoId)?.filter
  const dispatch = useAppDispatch();

  const setSpanMode = () => {
    setViewMode('span')
  }

  const setInputMode = () => {
    setViewMode('input')
  }

  useEffect(() => {
    dispatch(getTasksTC(props.todoId))
  }, []);

  const changefilter = (filter: FilterType) => {
    dispatch(changeFilterAC(props.todoId, filter))
  }

  const filteredTasks = () => {
    if(filter === 'active') {
      return tasks.filter(task => task.status === 0)
    } else if(filter === 'complete') {
      return tasks.filter(task => task.status !== 0)
    } else {
      return tasks;
    }
  }

  const onChangeInputTask = (e: ChangeEvent<HTMLInputElement>) => {
    setInputTask(e.target.value)
  }

  const addTask = () => {
    if(inputTask.trim()){
      dispatch(addTaskTC(props.todoId, inputTask))
      setInputTask('')
    } else {
      return
    }
  }

  const deleteTodoList = () => {
    dispatch(deleteTodoListTC(props.todoId))
  }

  return (
    <Grid item alignItems='stretch'>
      <Paper square={false} style={{padding: '20px 30px', height: '100%'}}>
        <Box display='flex' flexDirection='column' alignItems='center' gap='20px'>
          <EditSpan
              viewMode={viewMode}
              typeText={'todo'}
              title={props.title}
              setSpanMode={setSpanMode}
              setInputMode={setInputMode}
              deleteItem={deleteTodoList}
          />
          <AddItemForm
              label={'add task'}
              value={inputTask}
              onChange={onChangeInputTask}
              onClick={addTask}
          />
          {filteredTasks().map(task => {
            return <Task
                key={task.id}
                title={task.title}
                status={task.status}
                todoId={props.todoId}
                taskId={task.id}
            />
          })}
          <Box display='flex' gap='10px'>
            <CustomBtn title={'all'} onClick={() => changefilter('all')} color={props.filter === 'all' ? 'success' : 'primary'}/>
            <CustomBtn title={'active'} onClick={() => changefilter('active')} color={props.filter === 'active' ? 'success' : 'primary'}/>
            <CustomBtn title={'complete'} onClick={() => changefilter('complete')} color={props.filter === 'complete' ? 'success' : 'primary'}/>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
}

export default TodoList;