import { Box, styled, Link } from "@mui/material";

export const NavBarContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "80px",
}));

export const NavBarWrapper = styled(Box)(({ theme }) => ({
  height: "100%",
  width: "100%",
  maxWidth: "1200px",
  display: "flex",
  justifyContent: "space-between",
  margin: "0 auto",
}));

export const LinkStyled = styled(Link)(({ theme }) => ({
  cursor: "pointer",
}));
