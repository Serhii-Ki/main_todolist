import TextField, {TextFieldProps} from '@mui/material/TextField';

function CustomInput(props: TextFieldProps) {
  return (
      <TextField variant="outlined" {...props}/>
  );
}

export default CustomInput;