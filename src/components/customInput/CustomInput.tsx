import TextField, { TextFieldProps } from "@mui/material/TextField";

type Props = TextFieldProps;

function CustomInput(props: Props) {
  return <TextField variant="outlined" {...props} size="small" />;
}

export default CustomInput;
