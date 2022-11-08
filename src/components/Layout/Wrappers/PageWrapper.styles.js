import { styled, Box } from "@mui/material";

export const MaxWidthWrapper = styled(Box)(({ theme }) => ({
  maxWidth: "1200px",
  margin: "0 auto",
  [theme.breakpoints.down("lg")]: {
    padding: theme.spacing(1),
  },
}));
