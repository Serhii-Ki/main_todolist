import CustomInput from "../CustomInput/CustomInput.tsx";
import CustomBtn from "../CustomBtn/CustomBtn.tsx";
import Box from '@mui/material/Box';
import {ChangeEvent} from "react";

type AddFormPropsType = {
  title?: string;
  label: string;
  inputValue: string;
  setInputValue: (e: ChangeEvent<HTMLInputElement>) => void;
  addItem: () => void;
  isErrorText: boolean;
}

function AddForm(props: AddFormPropsType) {


  return (
      <Box display="flex" flexDirection={'column'} alignItems="center" gap={'15px'} marginTop={'30px'}>
        <h2>{props.title}</h2>
        <Box display="flex" alignItems="center" gap={'10px'}>
          <CustomInput
              label={props.label}
              size={'small'}
              error={props.isErrorText}
              value={props.inputValue}
              onChange={props.setInputValue}
          />
          <CustomBtn title={'+'} size={'small'} onClick={props.addItem}/>
        </Box>
      </Box>
  );
}

export default AddForm;