import Box from '@mui/material/Box';
import CustomBtn from "../CustomBtn/CustomBtn.tsx";

function FilterButtons(props) {
  return (
      <Box display='flex' gap='15px' marginTop='30px'>
        <CustomBtn title='all' color='secondary'/>
        <CustomBtn title='active'/>
        <CustomBtn title='completed'/>
      </Box>
  );
}

export default FilterButtons;