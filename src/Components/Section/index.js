import { Box, Typography } from "@mui/material";
import React from "react";

export default function Section() {
  return (
    <Box
      variant="section"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "90vh",
        objectFit: "cover",
        color: "white",
        backgroundImage: `url(https://avatars.mds.yandex.net/i?id=d23802d1db9d40421e65ecebf7204979-4120924-images-thumbs&n=13)`,
      }}
    >
      <Typography
        component="h1"
        sx={{
          fontSize: "70px",
          maxWidth: "70%",
          textAlign: "center",
        }}
      >
        BookShop - easy buy books online
      </Typography>
    </Box>
  );
}
