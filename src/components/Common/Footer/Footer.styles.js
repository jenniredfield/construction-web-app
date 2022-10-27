import { Box, styled } from "@mui/material";

export const FooterContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "80px",
  borderTop: `1px solid ${theme.palette.common.black}`,
}));

export const FooterWrapper = styled(Box)(({ theme }) => ({
  height: "100%",
  width: "80%",
  maxWidth: "800px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "0 auto",
}));
