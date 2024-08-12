import Box from "@mui/material/Box";
import { useFormik } from "formik";
import CustomInput from "../../components/customInput/CustomInput.tsx";
import CustomBtn from "../../components/customBtn/CustomBtn.tsx";
import { Checkbox, FormControlLabel, Paper } from "@mui/material";
import { useState } from "react";
import { LoginPayloadType } from "../../utils/types/requestTypes.ts";

function AuthPage() {
  const [formValues, setFormValues] = useState<LoginPayloadType>({
    email: "",
    password: "",
    rememberMe: false,
  });

  const formik = useFormik({
    initialValues: formValues,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      setFormValues(values);
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
            <CustomInput {...formik.getFieldProps("email")} label="Email" />
            <CustomInput
              {...formik.getFieldProps("password")}
              label="Password"
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
            />
          </Box>
        </Paper>
      </form>
    </Box>
  );
}

export default AuthPage;
