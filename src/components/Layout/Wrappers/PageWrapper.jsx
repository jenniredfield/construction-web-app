import { Box } from "@mui/material";
import NavBar from "../../Common/NavBar/NavBar";

const PageWrapper = ({ children }) => {
  return (
    <Box>
      <NavBar />
      {children}
    </Box>
  );
};

export default PageWrapper;
