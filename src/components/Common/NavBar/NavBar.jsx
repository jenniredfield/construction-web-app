import Link from "next/link";
import { Box, Button, Input, Typography } from "@mui/material";
import { NavBarContainer, NavBarWrapper } from "./NavBar.styles";
import Search from "../Search/Search";
import { useAuth } from "../../../context/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useAuth();
  const hasUser = Object.keys(user || {}).length;
  console.log("🚀 ~ file: NavBar.jsx ~ line 9 ~ NavBar ~ profile", user);
  return (
    <NavBarContainer>
      <NavBarWrapper>
        <Box>
          <Typography variant="h1"></Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <Search />
          <Box mr={2}>
            <Link href="/login">
              <Button variant="text">Login</Button>
            </Link>
          </Box>
          {!!hasUser && (
            <Box mr={2}>
              <Button variant="text" onClick={logOut}>
                Logout
              </Button>
            </Box>
          )}
          <Link href="/register">
            <Button variant="contained">Register</Button>
          </Link>
        </Box>
      </NavBarWrapper>
    </NavBarContainer>
  );
};

export default NavBar;
