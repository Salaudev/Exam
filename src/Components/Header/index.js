import { Box, Container, IconButton, InputBase } from "@mui/material";
import React from "react";
import { MyHeader } from "./HeaderWrapper";
import { FlexBox } from "../FlexBox";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <MyHeader>
      <Container maxWidth="xl">
        <FlexBox>
          <Link to="/">
            <img src="/images/LogoBooks.png" width="150px" />
          </Link>
          <Box
            component="form"
            sx={{
              borderRadius: 5,
              borderwidth: 1,
              borderStyle: "solid",
              borderColor: "#DDDDDD",
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 400,
              height: 40,
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search Google Maps"
              inputProps={{ "aria-label": "search google maps" }}
            />
            <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Box>
        </FlexBox>
      </Container>
    </MyHeader>
  );
}
