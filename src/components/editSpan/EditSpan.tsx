import {Box, Checkbox, IconButton, Typography} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CustomInput from "../customInput/CustomInput.tsx";
import CustomBtn from "../customBtn/CustomBtn.tsx";
import {ChangeEvent, useEffect, useState} from "react";

export type ViewModeType = 'span' | 'input';

type TextType = 'task' | 'todo';

type EditSpanPropsType = {
  viewMode: ViewModeType
  typeText: TextType
  title: string
  setSpanMode: () => void
  setInputMode: () => void
  deleteItem: () => void
  updateItem: (title: string) => void
  onChangeStatus?: () => void
  status?: number
  isLoading: boolean
}

function EditSpan(props: EditSpanPropsType) {
  const [inputValue, setInputValue] = useState<string>(props.title);

  useEffect(() => {
    setInputValue(props.title)
  }, [props.viewMode]);

  const onChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }

  const spanMode = () => {
    return (
      <Box display='flex' alignItems='center'>
        {props.typeText === 'task' ?
            <Box display='flex' alignItems='center'>
              <Checkbox checked={!!props.status} disabled={props.isLoading} onClick={props.onChangeStatus}/>
              <Typography variant="h6" onDoubleClick={props.setInputMode}>{props.title}</Typography>
            </Box>
            : <Typography variant="h4" onDoubleClick={props.setInputMode}>{props.title}</Typography>}
        <IconButton aria-label="Edit item" onClick={props.setInputMode} disabled={props.isLoading}>
          <EditIcon/>
        </IconButton>
        <IconButton aria-label="Delete item" onClick={props.deleteItem} disabled={props.isLoading}>
          <DeleteIcon/>
        </IconButton>
      </Box>
    )
  }

  const inputMode = () => {
    return (
      <Box>
        <CustomInput size={"small"} fullWidth={true} value={inputValue} onChange={onChangeInputValue} autoFocus={true}/>
        <Box display='flex' justifyContent='center' gap='30px' marginY='10px'>
          <CustomBtn title={'confirm'} onClick={() => props.updateItem(inputValue)}/>
          <CustomBtn title={'cancel'} onClick={props.setSpanMode}/>
        </Box>
      </Box>
    )
  }

  return (
      props.viewMode === 'span' ? spanMode() : inputMode()
  );
}

export default EditSpan;