import Link from "next/link";
import { Box, Button } from "@mui/material";
import { NavBarContainer, NavBarWrapper } from "./NavBar.styles";

const NavBar = () => {
  return (
    <NavBarContainer>
      <NavBarWrapper>
        <Box></Box>
        <Box display="flex" alignItems="center">
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
