import Fab from "@mui/material/Fab";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {useState} from "react";

type IconPropsType = {
  setInputMode: () => void;
  removeItem: () => Promise<void>;
}

function IconsGroup(props: IconPropsType) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const removeItem = () => {
    setIsLoading(true)
    props.removeItem().then(() => setIsLoading(false))
  }

  return (
      <>
        <Fab color="primary" disabled={isLoading} aria-label="delete" sx={{width: '36px', height: '16px', margin: '0px 10px'}}>
          <DeleteIcon sx={{fontSize: '17px'}} onClick={removeItem}/>
        </Fab>
        <Fab size="small" disabled={isLoading} color="primary" aria-label="edit" sx={{width: '36px', height: '16px'}}>
          <EditIcon sx={{fontSize: '17px'}} onClick={props.setInputMode}/>
        </Fab>
      </>
  );
}

export default IconsGroup;