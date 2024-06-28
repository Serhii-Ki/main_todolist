import EditSpan, {ViewModeType} from "../editSpan/EditSpan.tsx";
import {useState} from "react";

type TaskPropsType = {
  title: string
  status: number
}

function Task(props: TaskPropsType) {
  const [viewMode, setViewMode] = useState<ViewModeType>('span');

  const setSpanMode = () => {
    setViewMode('span')
  }

  const setInputMode = () => {
    setViewMode('input')
  }

  return (
      <EditSpan
          title={props.title}
          viewMode={viewMode}
          typeText={'task'}
          setSpanMode={setSpanMode}
          setInputMode={setInputMode}
          status={props.status}
      />
  );
}

export default Task;