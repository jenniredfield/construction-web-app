import { Box } from "@mui/material";
import { useShopContext } from "../../../context/ShopProvider";
import Cart from "../../Common/Cart/Cart";
import Footer from "../../Common/Footer/Footer";
import NavBar from "../../Common/NavBar/NavBar";
import Spinner from "../../Common/Spinner/Spinner";
import { MaxWidthWrapper } from "./PageWrapper.styles";

const PageWrapper = ({ children, loading }) => {
  return (
    <Box position="relative">
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
      {cartOpen && <Cart />}
    </Box>
  );
};

export default PageWrapper;
