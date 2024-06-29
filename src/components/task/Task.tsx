import EditSpan, {ViewModeType} from "../editSpan/EditSpan.tsx";
import {useState} from "react";
import {useAppDispatch} from "../../store/store.ts";
import {deleteTaskTC} from "../../store/tasksStore/tasks-thunk.ts";

type TaskPropsType = {
  title: string
  status: number
  todoId: string
  taskId: string
}

function Task(props: TaskPropsType) {
  const [viewMode, setViewMode] = useState<ViewModeType>('span');
  const dispatch = useAppDispatch();

  const setSpanMode = () => {
    setViewMode('span')
  }

  const setInputMode = () => {
    setViewMode('input')
  }

  const deleteTask = () => {
    dispatch(deleteTaskTC(props.todoId, props.taskId))
  }

  return (
      <EditSpan
          title={props.title}
          viewMode={viewMode}
          typeText={'task'}
          setSpanMode={setSpanMode}
          setInputMode={setInputMode}
          status={props.status}
          deleteItem={deleteTask}
      />
  );
}

export default Task;