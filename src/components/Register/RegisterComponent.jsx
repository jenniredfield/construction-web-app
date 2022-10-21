import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { object } from "yup";

import { Box, Button, TextField } from "@mui/material";
import CenteredLayout from "../Layout/CenteredLayout/CenteredLayout";
import ControlledTextField from "../Inputs/Controlled/ControlledTextField/ControlledTextField";

import { useYupValidationResolver } from "../../hooks/useYupValidationResolver";
import { validation } from "../../utils/validation";
import { useAuth } from "../../context/AuthProvider";

import { register } from "../../api";

const validationSchema = object({
  ...validation.register,
});

const RegisterComponent = ({ children }) => {
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
    await signUp({ email, password, name, last_name });
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
            <Button variant="contained" type="submit">
              Register
            </Button>
          </form>
        </FormProvider>
      </Box>
    </CenteredLayout>
  );
};

export default RegisterComponent;
