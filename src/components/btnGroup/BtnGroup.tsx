import CustomBtn from "../CustomBtn/CustomBtn.tsx";
import Box from "@mui/material/Box";

type BtnGroupType = {
  confirm: () => void;
  cancel: () => void;
}

function BtnGroup(props: BtnGroupType) {
  return (
      <Box display='flex' gap={'10px'}>
        <CustomBtn title={'confirm'} onClick={props.confirm}/>
        <CustomBtn title={'cancel'} onClick={props.cancel}/>
      </Box>
  );
}

export default BtnGroup;