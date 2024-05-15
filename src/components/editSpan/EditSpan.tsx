import CustomInput from "../CustomInput/CustomInput.tsx";

type EditSpanPropsType = {
  title: string;
  viewMode: boolean
  setSpanMode: () => void;
  setInputMode: () => void;
}

function EditSpan(props: EditSpanPropsType) {


  const InputMode = () => {
    return (
        <CustomInput sx={{display: 'block', width: '180px', padding: '0px 5px'}} autoFocus={true} onBlur={props.setSpanMode}/>
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