import React from "react";
import { Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import PropTypes from "prop-types";

const Spinner = (props) => {
  return (
    <Box display="flex" justifyContent="center">
      <CircularProgress />
    </Box>
  );
};

Spinner.propTypes = {};

export default Spinner;
