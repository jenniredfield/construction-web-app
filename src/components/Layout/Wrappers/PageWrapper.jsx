import { Box } from "@mui/material";
import Footer from "../../Common/Footer/Footer";
import NavBar from "../../Common/NavBar/NavBar";
import Spinner from "../../Common/Spinner/Spinner";
import { MaxWidthWrapper } from "./PageWrapper.styles";

const PageWrapper = ({ children, loading }) => {
  return (
    <Box>
      <NavBar />
      {loading ? (
        <Box
          diplay="flex"
          justifyContent="center"
          alignItems="center"
          height="calc(100vh - 160px)"
          py={2}
        >
          <Spinner />
        </Box>
      ) : (
        <MaxWidthWrapper py={2}>{children}</MaxWidthWrapper>
      )}
      <Footer />
    </Box>
  );
};

export default PageWrapper;
