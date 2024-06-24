import {Box, IconButton} from "@mui/material";
import CustomInput from "../customInput/CustomInput.tsx";
import AddIcon from '@mui/icons-material/Add';

type AddItemPropsType = {
  label: string
}

function AddItemForm(props: AddItemPropsType) {
  return (
    <Box display='flex' gap='5px' alignItems='center'>
      <CustomInput size='small' label={props.label}/>
      <IconButton aria-label="Edit item">
        <AddIcon/>
      </IconButton>
    </Box>
  );
}

export default AddItemForm;