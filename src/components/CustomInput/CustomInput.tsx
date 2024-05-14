import TextField, {TextFieldProps} from '@mui/material/TextField';

type InputPropsType = {
  label?: string
} & TextFieldProps

function CustomInput(props: InputPropsType) {
  return (
      <TextField variant="outlined" {...props}/>
  );
}

export default CustomInput;