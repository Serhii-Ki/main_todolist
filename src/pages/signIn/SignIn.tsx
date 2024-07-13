import CustomInput from "../../components/customInput/CustomInput.tsx";
import CustomBtn from "../../components/customBtn/CustomBtn.tsx";
import {Box, Checkbox, FormControlLabel, FormGroup, Paper} from "@mui/material";
import {useFormik} from "formik";
import {Link} from "react-router-dom";


function SignIn() {

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    onSubmit: values => {
      alert(JSON.stringify(values))
    },
  })

  return (
      <Box display='flex' justifyContent='center' marginTop='200px'>
        <Paper style={{padding: '30px 50px'}} elevation={3}>
          <form onSubmit={formik.handleSubmit}>
            <FormGroup sx={{gap: '20px'}}>
              <CustomInput
                  type={'email'}
                  label="Email"
                  name="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
              />
              <CustomInput
                  type={'password'}
                  label="Password"
                  name="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
              />
              <FormControlLabel
                  label="Remember me"
                  control={
                    <Checkbox
                        onChange={formik.handleChange}
                        checked={formik.values.rememberMe}
                        name="rememberMe"
                    />
                  }
              />
              <CustomBtn title={'sign up'} type='submit'/>
              <Link to='/signup'>I dont have account</Link>
            </FormGroup>
          </form>
        </Paper >
      </Box>
  );
}

export default SignIn;