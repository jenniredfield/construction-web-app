import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { object } from "yup";

import { Box, Button, TextField } from "@mui/material";
import CenteredLayout from "../Layout/CenteredLayout/CenteredLayout";
import ControlledTextField from "../Inputs/Controlled/ControlledTextField/ControlledTextField";
import withUnAuth from "../../context/auth/withUnAuth";
import Spinner from "../Common/Spinner/Spinner";

import { useYupValidationResolver } from "../../hooks/useYupValidationResolver";
import { validation } from "../../utils/validation";
import { useAuth } from "../../context/AuthProvider";

const validationSchema = object({
  ...validation.register,
});

const RegisterComponent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { signUp } = useAuth();
  const resolver = useYupValidationResolver(validationSchema);
  const methods = useForm({
    defaultValues: {
      name: "",
      last_name: "",
      email: "",
      password: "",
      confirm_password: "",
    },
    resolver,
  });

  const onHandleRegister = async ({ email, password, name, last_name }) => {
    setIsLoading(true);
    await signUp({ email, password, name, last_name });
    setIsLoading(false);
  };

  return (
    <CenteredLayout>
      <Box display="flex" flexDirection="column" width="400px">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onHandleRegister)}>
            <Box mb={2} width="100%">
              <ControlledTextField name="name" label="Name" />
            </Box>
            <Box mb={2} width="100%">
              <ControlledTextField name="last_name" label="Last Name" />
            </Box>
            <Box mb={2} width="100%">
              <ControlledTextField name="email" label="Email" />
            </Box>
            <Box mb={2} width="100%">
              <ControlledTextField name="password" label="Password" />
            </Box>
            <Box mb={2} width="100%">
              <ControlledTextField
                name="confirm_password"
                label="Confirm Password"
              />
            </Box>
            {isLoading ? (
              <Spinner />
            ) : (
              <Button variant="contained" type="submit">
                Register
              </Button>
            )}
          </form>
        </FormProvider>
      </Box>
    </CenteredLayout>
  );
};

export default withUnAuth(RegisterComponent);
