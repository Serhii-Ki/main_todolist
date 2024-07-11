import CustomInput from "../../components/customInput/CustomInput.tsx";
import CustomBtn from "../../components/customBtn/CustomBtn.tsx";
import {Box, Checkbox, FormControlLabel, FormGroup, Paper} from "@mui/material";
import {useFormik} from "formik";
import {Link} from "react-router-dom";


function SignUp() {

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirm_password: '',
      rememberMe: false,
    },
    onSubmit: values => {
      alert(JSON.stringify(values))
    },
  })

  return (
      <Box display='flex' justifyContent='center' alignItems='center' height='100vh'>
        <Paper style={{padding: '30px'}}>
          <form onSubmit={formik.handleSubmit}>
            <FormGroup>
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
              <CustomInput
                  type={'password'}
                  label="Confirm Password"
                  name="confirm_password"
                  onChange={formik.handleChange}
                  value={formik.values.confirm_password}
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
              <Link to='/signin'>I`ve already have account</Link>
            </FormGroup>
          </form>
        </Paper >
      </Box>
  );
}

export default SignUp;