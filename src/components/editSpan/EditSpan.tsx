import { useState } from "react";
import Box from "@mui/material/Box";
import CustomInput from "../customInput/CustomInput.tsx";
import CustomBtn from "../customBtn/CustomBtn.tsx";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

type ModeType = "span" | "input";

type Props = {
  title: string;
};

function EditSpan(props: Props) {
  const [viewMode, setViewMode] = useState<ModeType>("span");

  const toggleViewMode = () => {
    setViewMode(viewMode === "span" ? "input" : "span");
  };

  if (viewMode === "span") {
    return (
      <Box display="flex">
        <span onDoubleClick={toggleViewMode}>{props.title}</span>
        <IconButton aria-label="delete item" size="small">
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
