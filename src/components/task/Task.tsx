import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import EditSpan from "../editSpan/EditSpan.tsx";
import {useState} from "react";
import BtnGroup from "../btnGroup/BtnGroup.tsx";
import IconsGroup from "../iconsGroup/IconsGroup.tsx";
import {useDispatch} from "react-redux";
import {ChangeCompletedAC, EditTaskAC, RemoveTaskAC} from "../../store/tasks-actions.ts";

type TaskPropsType = {
  taskId: string;
  title: string;
  isDone: boolean;
  todoId: string;
}


function Task(props: TaskPropsType) {
  const [viewMode, setViewMode] = useState<boolean>(false);
  const [editInputValue, setEditInputValue] = useState<string>(props.title)
  const dispatch = useDispatch();

  const setInputMode = () => {
    setViewMode(true);
  }

  const setSpanMode = () => {
    setViewMode(false);
  }

  const removeTask = () => {
    dispatch(RemoveTaskAC(props.todoId, props.taskId))
  }

  const changeCompleted = () => {
    dispatch(ChangeCompletedAC(props.todoId, props.taskId))
  }

  const editTask = () => {
    console.log(editInputValue)
    dispatch(EditTaskAC(props.todoId, props.taskId, editInputValue));
    setViewMode(false)
  }

  const cancelEditTask = () => {
    setSpanMode();
    setEditInputValue(props.title)
  }

  return (
      <Box display='flex' alignItems='center' marginTop='15px'>
        <Box display='flex' alignItems='center'>
          {!viewMode && <Checkbox checked={props.isDone} onChange={changeCompleted}/>}
          <EditSpan
              title={props.title}
              setSpanMode={setSpanMode}
              setInputMode={setInputMode}
              viewMode={viewMode}
              value={editInputValue}
              onChange={setEditInputValue}
          />
        </Box>
        {viewMode ? <BtnGroup confirm={editTask} cancel={cancelEditTask}/> : <IconsGroup setInputMode={setInputMode} removeItem={removeTask}/>}
      </Box>
  );
}

export default Task;
