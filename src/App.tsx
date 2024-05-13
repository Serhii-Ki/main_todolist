import './App.css'
import CustomBtn from "./components/CustomBtn/CustomBtn.tsx";
import CustomInput from "./components/CustomInput/CustomInput.tsx";

function App() {


  return (
    <>
      <CustomBtn title={'Name'} onClick={() => {}}/>
      <CustomInput label={'input'} size={'small'}/>
    </>
  )
}

export default App
