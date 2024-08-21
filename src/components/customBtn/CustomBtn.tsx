import Button, { ButtonProps } from "@mui/material/Button";

type Props = {
  title: string;
} & ButtonProps;

function CustomButton(props: Props) {
  return (
    <Button {...props} size="small">
      {props.title}
    </Button>
  );
}

export default CustomButton;
