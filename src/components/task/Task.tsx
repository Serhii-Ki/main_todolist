import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import EditSpan from "../editSpan/EditSpan.tsx";
import BtnGroup from "../btnGroup/BtnGroup.tsx";
import IconsGroup from "../iconsGroup/IconsGroup.tsx";
import {useTask} from "./hook/useTask.ts";

type TaskPropsType = {
  taskId: string;
  title: string;
  status: number;
  todoId: string;
}


function Task(props: TaskPropsType) {
  const {
    viewMode,
    editInputValue,
    setEditInputValue,
    setInputMode,
    setSpanMode,
    removeTask,
    changeCompleted,
    editTask,
    cancelEditTask
  } = useTask(props.todoId, props.taskId, props.title)

  return (
      <Box display='flex' alignItems='center' marginTop='15px'>
        <Box display='flex' alignItems='center'>
          {!viewMode && <Checkbox checked={!!props.status} onChange={changeCompleted}/>}
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
