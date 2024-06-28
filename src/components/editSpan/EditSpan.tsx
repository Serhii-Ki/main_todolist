import {Box, Checkbox, IconButton, Typography} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CustomInput from "../customInput/CustomInput.tsx";
import CustomBtn from "../customBtn/CustomBtn.tsx";

export type ViewModeType = 'span' | 'input';

type TextType = 'task' | 'todo';

type EditSpanPropsType = {
  viewMode: ViewModeType
  typeText: TextType
  title: string
  setSpanMode: () => void
  setInputMode: () => void
  status?: number
}

function EditSpan(props: EditSpanPropsType) {

  const spanMode = () => {
    return (
      <Box display='flex' alignItems='center'>
        {props.typeText === 'task' ?
            <Box display='flex' alignItems='center'>
              <Checkbox checked={!!props.status}/>
              <Typography variant="h6" onDoubleClick={props.setInputMode}>{props.title}</Typography>
            </Box>
            : <Typography variant="h4" onDoubleClick={props.setInputMode}>{props.title}</Typography>}
        <IconButton aria-label="Edit item" onClick={props.setInputMode}>
          <EditIcon/>
        </IconButton>
        <IconButton aria-label="Delete item">
          <DeleteIcon/>
        </IconButton>
      </Box>
    )
  }

  const inputMode = () => {
    return (
      <Box>
        <CustomInput size={"small"} fullWidth={true}/>
        <Box display='flex' justifyContent='center' gap='30px' marginY='10px'>
          <CustomBtn title={'confirm'}/>
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