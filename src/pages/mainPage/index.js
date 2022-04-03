import {
  Box,
  Container,
  Grid,
  Pagination,
  Skeleton,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Header from "../../Components/Header";
import { setBooks } from "../../redux/actions";
import Section from "../../Components/Section";
import CategoryBox from "../../Components/CategoryCard/categoryBox";
import Footer from "../../Components/Footer";

export default function MainPage() {
  useEffect(() => {
    setBooks();
  }, []);
  const { books, loading, error } = useSelector((state) => state.books);
  useEffect(() => {
    setCurrentBooks(books);
  }, [books]);

  const [currentBooks, setCurrentBooks] = useState(books);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage, setbooksPerPage] = useState(12);

  const indexOfLastOrder = currentPage * booksPerPage;
  const indexOfFirstOrder = indexOfLastOrder - booksPerPage;
  const presentBooks = currentBooks.slice(indexOfFirstOrder, indexOfLastOrder);
  const pageNumbers = Math.ceil(currentBooks.length / booksPerPage);

  return (
    <Box>
      {!error ? (
        <>
          <Header />
          <Section />
          <Container maxWidth="xl" variant="section" sx={{ paddingTop: 4 }}>
            <Typography
              sx={{ textAlign: "center", fontSize: "36px", fontWeight: "bold" }}
            >
              Categories
            </Typography>

            <Grid container spacing={2} py={5}>
              {presentBooks.map((book) => {
                return (
                  <Grid key={book.id} item xs={12} sm={6} md={4} xl={3}>
                    {loading ? (
                      <Skeleton width="100%" height={228} />
                    ) : (
                      <CategoryBox obj={book} />
                    )}
                  </Grid>
                );
              })}
            </Grid>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <Typography
                className="text-slate-400 text-base"
                sx={{ mx: "auto", py: 3 }}
              >
                Showing {(currentPage - 1) * booksPerPage}-
                {currentPage * booksPerPage} of {currentBooks.length} Shops
              </Typography>
              <Pagination
                onChange={(e, page) => setCurrentPage(page)}
                variant="outlined"
                count={pageNumbers}
                sx={{ mx: "auto" }}
              />
            </Box>
            <Footer />
          </Container>
        </>
      ) : (
        <Box
          sx={{
            width: "100%",
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography component="h1" variant="h1">
            Something went wrong
          </Typography>
        </Box>
      )}
    </Box>
  );
}
