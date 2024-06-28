import {Box, IconButton} from "@mui/material";
import CustomInput from "../customInput/CustomInput.tsx";
import AddIcon from '@mui/icons-material/Add';
import {ChangeEvent} from "react";

type AddItemPropsType = {
  value?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  onClick?: () => void
  label: string
}

function AddItemForm(props: AddItemPropsType) {
  return (
    <Box display='flex' gap='5px' alignItems='center'>
      <CustomInput size='small' label={props.label} value={props.value} onChange={props.onChange}/>
      <IconButton aria-label="Edit item" onClick={props.onClick}>
        <AddIcon/>
      </IconButton>
    </Box>
  );
}

export default AddItemForm;