import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import EditSpan from "../editSpan/EditSpan.tsx";
import {useState} from "react";
import BtnGroup from "../btnGroup/BtnGroup.tsx";
import IconsGroup from "../iconsGroup/IconsGroup.tsx";

type TaskPropsType = {
  title: string,
  isDone: boolean;
}


function Task(props: TaskPropsType) {
  const [viewMode, setViewMode] = useState<boolean>(false);

  const setInputMode = () => {
    setViewMode(true);
  }

  const setSpanMode = () => {
    setViewMode(false);
  }

  return (
      <Box display='flex' alignItems='center' marginTop='15px'>
        <Box display='flex' alignItems='center'>
          {!viewMode && <Checkbox/>}
          <EditSpan title={props.title} setSpanMode={setSpanMode} setInputMode={setInputMode} viewMode={viewMode}/>
        </Box>
        {viewMode ? <BtnGroup/> : <IconsGroup setInputMode={setInputMode}/>}
      </Box>
  );
}

export default Task;
