import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import EditSpan from "../editSpan/EditSpan.tsx";
import {useState} from "react";
import BtnGroup from "../btnGroup/BtnGroup.tsx";
import IconsGroup from "../iconsGroup/IconsGroup.tsx";
import {useDispatch} from "react-redux";
import {ChangeCompletedAC, RemoveTaskAC} from "../../store/tasks-actions.ts";

type TaskPropsType = {
  taskId: string;
  title: string;
  isDone: boolean;
  todoId: string;
}


function Task(props: TaskPropsType) {
  const [viewMode, setViewMode] = useState<boolean>(false);
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

  return (
      <Box display='flex' alignItems='center' marginTop='15px'>
        <Box display='flex' alignItems='center'>
          {!viewMode && <Checkbox checked={props.isDone} onChange={changeCompleted}/>}
          <EditSpan title={props.title} setSpanMode={setSpanMode} setInputMode={setInputMode} viewMode={viewMode}/>
        </Box>
        {viewMode ? <BtnGroup/> : <IconsGroup setInputMode={setInputMode} removeItem={removeTask}/>}
      </Box>
  );
}

export default Task;
