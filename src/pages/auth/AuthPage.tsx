import Box from "@mui/material/Box";
import { useFormik } from "formik";
import CustomInput from "../../components/customInput/CustomInput.tsx";
import CustomBtn from "../../components/customBtn/CustomBtn.tsx";
import { Paper } from "@mui/material";

function AuthPage() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
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
            <CustomInput label="Email" name="email" />
            <CustomInput label="Password" name="password" />
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
