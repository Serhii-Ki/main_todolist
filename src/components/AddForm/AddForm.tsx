import CustomInput from "../CustomInput/CustomInput.tsx";
import CustomBtn from "../CustomBtn/CustomBtn.tsx";
import Box from '@mui/material/Box';

type AddFormPropsType = {
  title?: string;
  label: string;
  inputValue: string;
  setInputValue: (value: string) => void;
  addItem: () => void;
}

function AddForm(props: AddFormPropsType) {


  return (
      <Box display="flex" flexDirection={'column'} alignItems="center" gap={'15px'} marginTop={'30px'}>
        <h2>{props.title}</h2>
        <Box display="flex" alignItems="center" gap={'10px'}>
          <CustomInput
              label={props.label}
              size={'small'}
              value={props.inputValue}
              onChange={(e) => {
                props.setInputValue(e.target.value)
              }}
          />
          <CustomBtn title={'+'} size={'small'} onClick={props.addItem}/>
        </Box>
      </Box>
  );
}

export default AddForm;