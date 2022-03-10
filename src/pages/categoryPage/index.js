import { Box, Grid, Skeleton, Typography, Container } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Header from "../../Components/Header";
import Section from "../../Components/Section";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Footer from "../../Components/Footer";
import { setBook } from "../../redux/actions";
import BookCard from "../../Components/BookCard";

export default function CategoryPage() {
  const { book, loading, error } = useSelector((state) => state.book);

  const params = useParams();

  let title = params.category;
  useEffect(() => {
    setBook(params.category);
  }, [title]);

  console.log(params);
  console.log(loading);

  console.log(book, "   boooooook");

  return (
    <Box>
      <Header />
      <Section />
      <Typography variant="h4" color="text.secondary" textAlign="center" py={3}>
        {title.slice(0, 1).toUpperCase() + title.slice(1).toLowerCase()}
      </Typography>
      <Container>
        <Grid container spacing={2}>
          {book?.results?.books.map((item) => {
            return (
              <Grid item xs={12} sm={6} md={4} xl={3}>
                {loading ? (
                  <Skeleton width="100%" height={250} />
                ) : (
                  <BookCard obj={item} />
                )}
              </Grid>
            );
          })}
        </Grid>
      </Container>

      <Footer />
    </Box>
  );
}
