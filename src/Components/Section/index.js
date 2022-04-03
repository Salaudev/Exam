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
          fontSize: { xs: "30px", md: "50px", lg: "70px" },
          textAlign: "center",
        }}
      >
        BookShop - easy buy books online
      </Typography>
    </Box>
  );
}
