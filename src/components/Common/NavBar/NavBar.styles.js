import { Box, styled } from "@mui/material";

export const NavBarContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "80px",
}));

export const NavBarWrapper = styled(Box)(({ theme }) => ({
  height: "100%",
  width: "80%",
  maxWidth: "800px",
  display: "flex",
  justifyContent: "space-between",
  margin: "0 auto",
}));
