import { Box } from "@mui/material";

const CenteredLayout = ({ children }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100%"
    >
      {children}
    </Box>
  );
};

export default CenteredLayout;
