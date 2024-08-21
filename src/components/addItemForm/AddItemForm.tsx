import Box from "@mui/material/Box";
import CustomInput from "../customInput/CustomInput.tsx";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { ChangeEvent, useState } from "react";

type Props = {
  label: string;
  addItem: (title: string) => void;
};

function AddItemForm({ label, addItem }: Props) {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onAddItem = () => {
    if (inputValue.trim() !== "") {
      addItem(inputValue);
      setInputValue("");
    }
  };

  return (
    <Box>
      <CustomInput
        size="small"
        label={label}
        value={inputValue}
        onChange={handleInputValue}
      />
      <IconButton aria-label="add item" size="small" onClick={onAddItem}>
        <AddIcon />
      </IconButton>
    </Box>
  );
}

export default AddItemForm;
