import Link from "next/link";
import { Box, Button, Input, Typography } from "@mui/material";
import { NavBarContainer, NavBarWrapper } from "./NavBar.styles";
import Search from "../Search/Search";

const NavBar = () => {
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
          <Link href="/register">
            <Button variant="contained">Register</Button>
          </Link>
        </Box>
      </NavBarWrapper>
    </NavBarContainer>
  );
};

export default NavBar;
