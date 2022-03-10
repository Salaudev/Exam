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
        backgroundSize: "cover",
        color: "white",
        backgroundImage: `url(/images/HomeBack.png)`,
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
