import { Container, Link } from "@mui/material";
import React from "react";
import { FlexBox } from "../FlexBox";
import { FooterWrapper } from "./FooterWrapper";

export default function Footer() {
  return (
    <FooterWrapper component="footer" variant="footer">
      <Container>
        <FlexBox>
          <img src="/images/LogoBooks.png" width="150px" />

          <Link href="https://www.algorismic.uz/">
            <img
              src="https://www.algorismic.uz/images/algorismic-02.svg"
              width="150px"
            />
          </Link>
        </FlexBox>
      </Container>
    </FooterWrapper>
  );
}
