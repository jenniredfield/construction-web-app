import React from "react";
import PropTypes from "prop-types";
import { FooterContainer, FooterWrapper } from "./Footer.styles";
import { Typography } from "@mui/material";

const Footer = (props) => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Typography variant="p">2022 ConstruApp</Typography>
      </FooterWrapper>
    </FooterContainer>
  );
};

Footer.propTypes = {};

export default Footer;
