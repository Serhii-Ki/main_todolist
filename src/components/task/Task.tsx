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
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const dispatch = useAppDispatch();

  const setSpanMode = () => {
    setViewMode('span')
  }

  const setInputMode = () => {
    setViewMode('input')
  }

  const deleteTask = () => {
    setIsLoading(true)
    dispatch(deleteTaskTC(props.todoId, props.taskId)).finally(() => {
      setIsLoading(false)
    })
  }

  const updateTask = (title: string) => {

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
          isLoading={isLoading}
          updateItem={updateTask}
      />
  );
}

export default Task;