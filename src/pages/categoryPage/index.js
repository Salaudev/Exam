import { Box, Grid, Skeleton } from "@mui/material";
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

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  useEffect(() => {
    setBook(params.category);
  }, [params.category]);

  console.log(params);

  console.log(book, "   boooooook");

  return (
    <Box>
      <Header />
      <Section />
      <Grid container spacing={2} py={5}>
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

      <Footer />
    </Box>
  );
}
