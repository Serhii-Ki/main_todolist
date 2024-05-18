import CustomInput from "../CustomInput/CustomInput.tsx";
import {ChangeEvent} from "react";

type EditSpanPropsType = {
  title: string;
  viewMode: boolean;
  setSpanMode: () => void;
  setInputMode: () => void;
  value: string;
  onChange: (value: string) => void;
}

function EditSpan(props: EditSpanPropsType) {


  const InputMode = () => {
    return (
        <CustomInput
            sx={{display: 'block', width: '180px', padding: '0px 5px'}}
            autoFocus={true}
            value={props.value}
            onChange={(e: ChangeEvent<HTMLInputElement>) => props.onChange(e.target.value)}
        />
    )
  }

  const SpanMode = () => {
    return (
        <span onDoubleClick={props.setInputMode}>{props.title}</span>
    )
  }

  return (
      <div>
        {props.viewMode ? <InputMode/> : <SpanMode/>}
      </div>
  );
}

export default EditSpan;