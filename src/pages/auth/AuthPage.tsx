import Box from "@mui/material/Box";
import { useFormik } from "formik";
import CustomInput from "../../components/customInput/CustomInput.tsx";
import CustomBtn from "../../components/customBtn/CustomBtn.tsx";
import { Checkbox, FormControlLabel, Paper } from "@mui/material";
import { useAppDispatch } from "../../utils/hooks/useAppDispatch.ts";
import { authThunks } from "../../store/authSlice.ts";
import * as Yup from "yup";

function AuthPage() {
  const dispatch = useAppDispatch();

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(5, "Password must be at least 5 characters")
      .required("Required"),
    rememberMe: Yup.boolean(),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch(authThunks.login(values));
    },
  });

  return (
    <Box
      height="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <form onSubmit={formik.handleSubmit}>
        <Paper sx={{ padding: "30px" }}>
          <Box
            display="flex"
            flexDirection="column"
            gap="30px"
            alignItems="center"
          >
            <CustomInput
              {...formik.getFieldProps("email")}
              label="Email"
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <CustomInput
              {...formik.getFieldProps("password")}
              label="Password"
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <FormControlLabel
              control={<Checkbox {...formik.getFieldProps("rememberMe")} />}
              label="rememberMe"
            />
            <CustomBtn
              title={"confirm"}
              variant="contained"
              size="small"
              type="submit"
              disabled={formik.isSubmitting || !formik.isValid}
            />
          </Box>
        </Paper>
      </form>
    </Box>
  );
}

export default AuthPage;
