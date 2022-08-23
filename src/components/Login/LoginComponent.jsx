import { Box, Button, TextField } from "@mui/material";
import CenteredLayout from "../CenteredLayout/CenteredLayout";

const LoginComponent = ({ children }) => {
  return (
    <CenteredLayout>
      <Box display="flex" flexDirection="column" width="400px">
        <Box mb={2} width="100%">
          <TextField name="username" value="" label="Username" fullWidth />
        </Box>
        <Box mb={2} width="100%">
          <TextField name="password" value="" label="Password" fullWidth />
        </Box>
        <Button variant="contained">Login</Button>
      </Box>
    </CenteredLayout>
  );
};

export default LoginComponent;
