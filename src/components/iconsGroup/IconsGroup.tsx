import Fab from "@mui/material/Fab";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

type IconPropsType = {
  setInputMode: () => void,
}

function IconsGroup(props: IconPropsType) {
  return (
      <>
        <Fab color="primary" aria-label="delete" sx={{width: '36px', height: '16px', margin: '0px 10px'}}>
          <DeleteIcon sx={{fontSize: '17px'}}/>
        </Fab>
        <Fab size="small" color="primary" aria-label="edit" sx={{width: '36px', height: '16px'}}>
          <EditIcon sx={{fontSize: '17px'}} onClick={props.setInputMode}/>
        </Fab>
      </>
  );
}

export default IconsGroup;