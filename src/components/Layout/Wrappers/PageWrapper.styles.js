import { styled, Box } from "@mui/material";

export const MaxWidthWrapper = styled(Box)(({ theme }) => ({
  maxWidth: "800px",
  margin: "0 auto",
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(1),
  },
}));
