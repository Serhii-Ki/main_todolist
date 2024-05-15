import CustomInput from "../CustomInput/CustomInput.tsx";
import CustomBtn from "../CustomBtn/CustomBtn.tsx";
import Box from '@mui/material/Box';
import {useState} from "react";

type AddFormPropsType = {
  title: string;
  label: string;
}

function AddForm(props: AddFormPropsType) {
  const [inputValue, setInputValue] = useState<string>('');

  return (
      <Box display="flex" flexDirection={'column'} alignItems="center" gap={'15px'} marginTop={'30px'}>
        <h2>{props.title}</h2>
        <Box display="flex" alignItems="center" gap={'10px'}>
          <CustomInput
              label={props.label}
              size={'small'}
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value)
              }}
          />
          <CustomBtn title={'+'} size={'small'}/>
        </Box>
      </Box>
  );
}

export default AddForm;