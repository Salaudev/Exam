import { Box, Container } from "@mui/material";
import React from "react";
import { FooterWrapper } from "./FooterWrapper";

export default function Footer() {
  return (
    <FooterWrapper component="footer" variant="footer">
      <img src="/images/LogoBooks.png" width="150px" />

      <img
        src="https://www.algorismic.uz/images/algorismic-02.svg"
        width="150px"
      />
    </FooterWrapper>
  );
}
