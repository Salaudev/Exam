import { Box, Container, IconButton, InputBase } from "@mui/material";
import React from "react";
import { MyHeader } from "./HeaderWrapper";
import { FlexBox } from "../FlexBox";
import SearchIcon from "@mui/icons-material/Search";

export default function Header() {
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <MyHeader>
      <Container>
        <FlexBox>
          <img
            src="https://avatars.mds.yandex.net/i?id=2d25c02b2fce9f15fc7f5a77d2629833-5724346-images-thumbs&n=13"
            width="150px"
          />
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
              onChange={handleChange}
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
