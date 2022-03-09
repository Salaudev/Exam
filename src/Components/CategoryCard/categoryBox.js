import { Box, Card, CardContent, Typography } from "@mui/material";
import { GiWhiteBook } from "react-icons/gi";
import React, { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getDataByCategoryName } from "../../axios";
import { setBook } from "../../redux/actions";

export default function CategoryBox({ obj }) {
  const navigate = useNavigate();

  // const { category } = params;
  const changeCategory = () => {
    // setBook(category);
    navigate(`/category/${obj.list_name_encoded}`);
  };

  return (
    <Card
      sx={{ textAlign: "center", width: "100%", minHeight: 220 }}
      onClick={() => changeCategory()}
    >
      <Box
        py={4}
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 30,
          color: "#FF8736",
        }}
      >
        <GiWhiteBook />
      </Box>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {obj.list_name}
        </Typography>
      </CardContent>
    </Card>
  );
}
