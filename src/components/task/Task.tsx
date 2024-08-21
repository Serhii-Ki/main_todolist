import Box from "@mui/material/Box";
import EditSpan from "../editSpan/EditSpan.tsx";

type Props = {
  taskId: string;
  title: string;
  status: number;
};

function Task(props: Props) {
  return (
    <Box display="flex">
      <EditSpan title={props.title} type="task" taskStatus={props.status} />
    </Box>
  );
}

export default Task;
