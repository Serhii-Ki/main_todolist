import {useState} from "react";
import CustomInput from "../CustomInput/CustomInput.tsx";


function EditSpan() {
  const [viewMode, setViewMode] = useState<boolean>(false);

  const InputMode = () => {
    return (
        <CustomInput/>
    )
  }

  const SpanMode = () => {
    return (
        <span></span>
    )
  }

  return (
      <div>
        {viewMode ? <InputMode/> : <SpanMode/>}
      </div>
  );
}

export default EditSpan;