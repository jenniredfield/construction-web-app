import { Box } from "@mui/material";
import Footer from "../../Common/Footer/Footer";
import NavBar from "../../Common/NavBar/NavBar";
import { MaxWidthWrapper } from "./PageWrapper.styles";

const PageWrapper = ({ children }) => {
  return (
    <Box>
      <NavBar />
      <MaxWidthWrapper py={2}>{children}</MaxWidthWrapper>
      <Footer />
    </Box>
  );
};

export default PageWrapper;
