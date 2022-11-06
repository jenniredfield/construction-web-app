import { styled, Box } from "@mui/material";

export const NotificationStyled = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: 0,
  right: 0,
  width: 15,
  height: 15,
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  borderRadius: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "0.750em",
}));
