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

  console.log(books, "  books");
  console.log(loading, "  loading");
  console.log(error, "  error");

  const [currentBooks, setCurrentBooks] = useState(books);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage, setbooksPerPage] = useState(8);

  const indexOfLastOrder = currentPage * booksPerPage;
  const indexOfFirstOrder = indexOfLastOrder - booksPerPage;
  const presentBooks = currentBooks.slice(indexOfFirstOrder, indexOfLastOrder);
  const pageNumbers = Math.ceil(currentBooks.length / booksPerPage);

  console.log(currentBooks, "  presentBooks");

  return (
    <Box>
      <Header />
      <Section />
      <Container variant="section" sx={{ paddingTop: 4 }}>
        <Typography
          sx={{ textAlign: "center", fontSize: "30px", fontWeight: "bold" }}
        >
          Categories
        </Typography>

        <Grid container spacing={2} py={5}>
          {presentBooks.map((book) => {
            return (
              <Grid item xs={12} sm={6} md={4} xl={3}>
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
          }}
        >
          <Typography className="text-slate-400 text-base">
            Showing {(currentPage - 1) * booksPerPage}-
            {currentPage * booksPerPage} of {currentBooks.length} Shops
          </Typography>
          <Pagination
            onChange={(e, page) => setCurrentPage(page)}
            variant="outlined"
            count={pageNumbers}
          />
        </Box>
        <Footer />
      </Container>
    </Box>
  );
}
