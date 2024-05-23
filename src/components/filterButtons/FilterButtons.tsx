import Box from '@mui/material/Box';
import CustomBtn from "../CustomBtn/CustomBtn.tsx";
import {FilterType} from "../../utils/types.ts";

type FilterButtonsPropsType = {
  filter: FilterType;
  changeFiler: (filter: FilterType) => void
}

function FilterButtons(props : FilterButtonsPropsType) {
  return (
      <Box display='flex' gap='15px' marginTop='30px'>
        <CustomBtn title='all' color={props.filter === "all" ? "secondary" : "primary"} onClick={() => props.changeFiler('all')}/>
        <CustomBtn title='active' color={props.filter === "active" ? "secondary" : "primary"} onClick={() => props.changeFiler('active')}/>
        <CustomBtn title='completed' color={props.filter === "completed" ? "secondary" : "primary"} onClick={() => props.changeFiler('completed')}/>
      </Box>
  );
}

export default FilterButtons;