import { Box } from "@mui/material";
import Footer from "../../Common/Footer/Footer";
import NavBar from "../../Common/NavBar/NavBar";

const PageWrapper = ({ children }) => {
  return (
    <Box>
      <NavBar />
      <Box py={2}>{children}</Box>
      <Footer />
    </Box>
  );
};

export default PageWrapper;
