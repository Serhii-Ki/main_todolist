import CustomBtn from "../CustomBtn/CustomBtn.tsx";
import Box from "@mui/material/Box";

function BtnGroup() {
  return (
      <Box display='flex' gap={'10px'}>
        <CustomBtn title={'confirm'}/>
        <CustomBtn title={'cancel'}/>
      </Box>
  );
}

export default BtnGroup;