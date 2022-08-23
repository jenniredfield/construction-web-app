import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#3f0637",
    },
    secondary: {
      main: "#f50057",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#f5f5f5",
    },
  },
});

export default theme;
