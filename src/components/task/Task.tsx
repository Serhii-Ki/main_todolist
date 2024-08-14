import Box from "@mui/material/Box";
import { Checkbox } from "@mui/material";
import EditSpan from "../editSpan/EditSpan.tsx";

function Task() {
  return (
    <Box display="flex">
      <Checkbox />
      <EditSpan title={"task"} />
    </Box>
  );
}

export default Task;
