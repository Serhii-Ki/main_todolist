import Box from "@mui/material/Box";
import CustomInput from "../customInput/CustomInput.tsx";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

type Props = {
  label: string;
};

function AddItemForm({ label }: Props) {
  return (
    <Box>
      <CustomInput size="small" label={label} />
      <IconButton aria-label="add item" size="small">
        <AddIcon />
      </IconButton>
    </Box>
  );
}

export default AddItemForm;
