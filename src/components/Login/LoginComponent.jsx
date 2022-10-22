import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { object } from "yup";

import { Box, Button, TextField } from "@mui/material";
import CenteredLayout from "../Layout/CenteredLayout/CenteredLayout";
import ControlledTextField from "../Inputs/Controlled/ControlledTextField/ControlledTextField";
import Spinner from "../Common/Spinner/Spinner";

import { validation } from "../../utils/validation";

import { useYupValidationResolver } from "../../hooks/useYupValidationResolver";

import { useAuth } from "../../context/AuthProvider";
import withUnAuth from "../../context/auth/withUnAuth";

const validationSchema = object({
  ...validation.login,
});

const LoginComponent = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
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
    setIsLoading(true);
    await logIn(data);
    setIsLoading(false);
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
            {isLoading ? (
              <Spinner />
            ) : (
              <Button variant="contained" type="submit">
                Login
              </Button>
            )}
          </form>
        </FormProvider>
      </Box>
    </CenteredLayout>
  );
};

export default withUnAuth(LoginComponent);
