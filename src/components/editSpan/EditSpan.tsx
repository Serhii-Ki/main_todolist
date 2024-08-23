import { useState } from "react";
import Box from "@mui/material/Box";
import CustomInput from "../customInput/CustomInput.tsx";
import CustomBtn from "../customBtn/CustomBtn.tsx";
import { Checkbox, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

type ModeType = "span" | "input";

type ItemType = "todo" | "task";

type Props = {
  title: string;
  type: ItemType;
  taskStatus?: number;
  deleteItem?: () => void;
};

function EditSpan(props: Props) {
  const [viewMode, setViewMode] = useState<ModeType>("span");

  const toggleViewMode = () => {
    setViewMode(viewMode === "span" ? "input" : "span");
  };

  if (viewMode === "span") {
    return (
      <Box display="flex" alignItems="center" gap="5px">
        {props.type === "task" && <Checkbox checked={props.taskStatus === 0} />}
        <span onDoubleClick={toggleViewMode}>{props.title}</span>
        <IconButton
          aria-label="delete item"
          size="small"
          onClick={props.deleteItem}
        >
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="edit item" size="small">
          <EditIcon />
        </IconButton>
      </Box>
    );
  }
  return (
    <Box>
      <CustomInput />
      <Box>
        <CustomBtn title="confirm" />
        <CustomBtn title="cancel" onClick={toggleViewMode} />
      </Box>
    </Box>
  );
}

export default EditSpan;
