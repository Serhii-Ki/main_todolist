import Button, { ButtonProps } from '@mui/material/Button';

type ButtonPropsType = {
  title: string,
} & ButtonProps

function CustomBtn(props: ButtonPropsType) {
  return (
      <Button variant="contained" {...props}>
        {props.title}
      </Button>
  );
}

export default CustomBtn;