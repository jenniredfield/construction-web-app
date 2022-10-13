import { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import CenteredLayout from "../Layout/CenteredLayout/CenteredLayout";
import { register } from "../../api";

const RegisterComponent = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onHandleRegister = async () => {
    const res = await register({ email, password });
  };

  return (
    <CenteredLayout>
      <Box display="flex" flexDirection="column" width="400px">
        <Box mb={2} width="100%">
          <TextField
            name="email"
            value={email}
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
          />
        </Box>
        <Box mb={2} width="100%">
          <TextField
            name="password"
            value={password}
            label="Password"
            fullWidth
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>
        <Box mb={2} width="100%">
          <TextField
            name="confimPassword"
            value=""
            label="Confirm Password"
            fullWidth
          />
        </Box>
        <Button variant="contained" onClick={onHandleRegister}>
          Register
        </Button>
      </Box>
    </CenteredLayout>
  );
};

export default RegisterComponent;
