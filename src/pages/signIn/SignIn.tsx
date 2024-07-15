import CustomInput from "../../components/customInput/CustomInput.tsx";
import CustomBtn from "../../components/customBtn/CustomBtn.tsx";
import {Box, Checkbox, FormControlLabel, FormGroup, Paper} from "@mui/material";
import {useFormik} from "formik";
import {Link, Navigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../store/store.ts";
import {signInTC} from "../../store/authStore/auth-thunk.ts";
import {getAuthStatus} from "../../store/selectors.ts";

type ErrorsValidateType = {
  email?: string
  password?: string
}


function SignIn() {
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(getAuthStatus)

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    validate: (values) => {
      const errors: ErrorsValidateType = {};

      if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }

      if (!values.password) {
        errors.password = 'Required';
      } else if(values.password.length < 5) {
        errors.password = 'Password must be at least 5 characters long';
      }

      return errors;
    },
    onSubmit: values => {
      dispatch(signInTC(values))
      formik.resetForm();
    },
  });

  if(authStatus) {
    return <Navigate to={'/todolist'}/>
  }

  return (
      <Box display='flex' justifyContent='center' marginTop='200px'>
        <Paper style={{padding: '30px 50px'}} elevation={3}>
          <form onSubmit={formik.handleSubmit}>
            <FormGroup sx={{gap: '20px'}}>
              <CustomInput
                  type={'email'}
                  label="Email"
                  error={!!formik.errors.email}
                  helperText={formik.errors.email}
                  {...formik.getFieldProps('email')}
              />
              <CustomInput
                  type={'password'}
                  label="Password"
                  error={!!formik.errors.password}
                  helperText={formik.errors.password}
                  {...formik.getFieldProps('password')}
              />
              <FormControlLabel
                  label="Remember me"
                  control={
                    <Checkbox
                        checked={formik.values.rememberMe}
                        {...formik.getFieldProps('rememberMe')}
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