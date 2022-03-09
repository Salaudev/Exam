import {
  Box,
  Container,
  Divider,
  IconButton,
  InputBase,
  Paper,
} from "@mui/material";
import React from "react";
import { MyHeader } from "./HeaderWrapper";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";

export default function Header() {
  return (
    <Container>
      <MyHeader>
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
          />
          <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Box>
      </MyHeader>
    </Container>
  );
}
