import { FormProvider, useForm } from "react-hook-form";
import { object } from "yup";

import { Box, Button, TextField } from "@mui/material";
import CenteredLayout from "../Layout/CenteredLayout/CenteredLayout";
import ControlledTextField from "../Inputs/Controlled/ControlledTextField/ControlledTextField";

import { validation } from "../../utils/validation";

import { useYupValidationResolver } from "../../hooks/useYupValidationResolver";

import { useAuth } from "../../context/AuthProvider";

const validationSchema = object({
  ...validation.login,
});

const LoginComponent = ({ children }) => {
  const resolver = useYupValidationResolver(validationSchema);
  const methods = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver,
  });

  const { logIn } = useAuth();

  const onHandleLogin = async (data) => {
    await logIn(data);
  };

  return (
    <CenteredLayout>
      <Box mb={2} width="100%" maxWidth="400px">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onHandleLogin)}>
            <Box mb={2} width="100%">
              <ControlledTextField name="email" label="Email" />
            </Box>
            <Box mb={2} width="100%">
              <ControlledTextField name="password" label="Password" />
            </Box>
            <Button variant="contained" type="submit">
              Login
            </Button>
          </form>
        </FormProvider>
      </Box>
    </CenteredLayout>
  );
};

export default LoginComponent;
