import Paper from '@mui/material/Paper';
import Box from "@mui/material/Box";
import AddForm from "../AddForm/AddForm.tsx";
import Task from "../task/Task.tsx";
import FilterButtons from "../filterButtons/FilterButtons.tsx";
import {FilterType} from "../../utils/types.ts";
import EditSpan from "../editSpan/EditSpan.tsx";
import BtnGroup from "../btnGroup/BtnGroup.tsx";
import IconsGroup from "../iconsGroup/IconsGroup.tsx";
import {useTodoList} from "./hook/useTodoList.ts";
import {useEffect} from "react";

type TodoListType = {
  id: string;
  title: string;
  filter: FilterType;
}

function TodoList(props: TodoListType) {
  const {
    tasks,
    filteredTasks,
    viewMode,
    setInputMode,
    setSpanMode,
    inputValue,
    onChangeInput,
    getTasks,
    removeTodoList,
    changeFiler,
    addTask,
    editInputValue,
    setEditInputValue,
    editTodo,
    cancelEditTodo,
    isErrorText
  } = useTodoList(props.id, props.title, props.filter);

  useEffect(() => {
    getTasks()
  }, []);

  return (
      <Paper sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '400px', padding: '20px'}}>
        <Box display='flex' alignItems='center' gap='5px' fontSize='26px' fontWeight='700'>
          <EditSpan
              title={props.title}
              viewMode={viewMode}
              setSpanMode={setSpanMode}
              setInputMode={setInputMode}
              value={editInputValue}
              onChange={setEditInputValue}
          />
          {viewMode ? <BtnGroup confirm={editTodo} cancel={cancelEditTodo}/> : <IconsGroup setInputMode={setInputMode} removeItem={removeTodoList}/>}
        </Box>
        <AddForm
            label='add task'
            inputValue={inputValue}
            setInputValue={onChangeInput}
            addItem={addTask}
            isErrorText={isErrorText}
        />
        {tasks[props.id] ? filteredTasks().map((task) =>
            <Task
                key={task.id}
                taskId={task.id}
                title={task.title}
                status={task.status}
                todoId={props.id}
            />) : <div>Empty</div>}
        <FilterButtons changeFiler={changeFiler} filter={props.filter}/>
      </Paper>
  );
}

export default TodoList;