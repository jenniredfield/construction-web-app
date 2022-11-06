import Link from "next/link";
import { Box, Button, Input, Typography, useMediaQuery } from "@mui/material";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import Search from "../Search/Search";
import Notification from "../Notification/Notification";

import { NavBarContainer, NavBarWrapper, LinkStyled } from "./NavBar.styles";

import { useAuth } from "../../../context/AuthProvider";
import { useShopContext } from "../../../context/ShopProvider";

const NavBar = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const { user, logOut } = useAuth();
  const { openCart, toggleCart } = useShopContext();
  const hasUser = Object.keys(user || {}).length;
  return (
    <NavBarContainer>
      <NavBarWrapper>
        <Box p={2}>
          <Link href="/">
            {isMobile ? (
              <Box></Box>
            ) : (
              <Typography variant="h3" color="primary">
                ConstruApp
              </Typography>
            )}
          </Link>
        </Box>
        <Box display="flex" alignItems="center">
          <Search />
          <Box ml={2} display="flex" alignItems="center">
            {!hasUser && (
              <Box mr={2}>
                <Link href="/login">
                  <Button variant="text">Login</Button>
                </Link>
              </Box>
            )}
            {!!hasUser && (
              <Box mr={2}>
                <LinkStyled href="/account">
                  <ManageAccountsIcon />
                </LinkStyled>
              </Box>
            )}
            {!!hasUser && (
              <Box mr={2} position="relative" onClick={toggleCart}>
                <ShoppingBasketIcon />
                <Notification />
              </Box>
            )}
            {!!hasUser && (
              <Box mr={2}>
                <Button variant="text" onClick={logOut}>
                  Logout
                </Button>
              </Box>
            )}
            {!hasUser && (
              <Link href="/register">
                <Button variant="contained">Register</Button>
              </Link>
            )}
          </Box>
        </Box>
      </NavBarWrapper>
    </NavBarContainer>
  );
};

export default NavBar;
