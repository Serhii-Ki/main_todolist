import {Box, Grid, Paper} from "@mui/material";
import AddItemForm from "../addItemForm/AddItemForm.tsx";
import EditSpan, {ViewModeType} from "../editSpan/EditSpan.tsx";
import {useState} from "react";
import CustomBtn from "../customBtn/CustomBtn.tsx";
import {FilterType} from "../../store/todoListStore/todoLists-reducer.ts";

type TodoListPropsType = {
  title: string
  filter: FilterType
}

function TodoList(props: TodoListPropsType) {
  const [viewMode, setViewMode] = useState<ViewModeType>('span');

  const setSpanMode = () => {
    setViewMode('span')
  }

  const setInputMode = () => {
    setViewMode('input')
  }

  return (
    <Grid item>
      <Paper square={false} style={{padding: '20px 30px'}}>
        <Box display='flex' flexDirection='column' alignItems='center' gap='20px'>
          <EditSpan viewMode={viewMode} typeText={'todo'} title={props.title} setSpanMode={setSpanMode} setInputMode={setInputMode}/>
          <AddItemForm label={'add task'}/>
          <Box display='flex' gap='10px'>
            <CustomBtn title={'all'} color={props.filter === 'all' ? 'success' : 'primary'}/>
            <CustomBtn title={'active'} color={props.filter === 'active' ? 'success' : 'primary'}/>
            <CustomBtn title={'complete'} color={props.filter === 'complete' ? 'success' : 'primary'}/>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
}

export default TodoList;