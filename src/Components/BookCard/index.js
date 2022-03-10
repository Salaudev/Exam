import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Link,
} from "@mui/material";
import React from "react";
import MoreModal from "../Modal";

export default function BookCard({ obj }) {
  // const [open, setOpen] = React.useState(false);
  // const handleClose = () => setOpen(false);
  // const handleOpen = () => setOpen(true);
  return (
    <>
      <Card sx={{ maxWidth: 345, minHeight: 400 }}>
        <CardMedia
          component="img"
          height="300"
          image={
            obj.book_image ||
            "https://avatars.mds.yandex.net/i?id=cbadaabc2202cc7797d2fbc542e07942-4351135-images-thumbs&n=13"
          }
          alt="green iguana"
        />
        <Box sx={{ py: 0, px: 1 }}>
          <CardContent>
            <Typography gutterBottom variant="body1" component="div">
              Title : {obj.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Author : {obj.author}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Price : {obj.price}
            </Typography>
          </CardContent>
          <CardActions sx={{ display: "flex", justifyContent: "space-around" }}>
            <Link href={obj.buy_links[0]}>
              <Button
                variant="contained"
                size="medium"
                color="primary"
                sx={{ borderRadius: 7, padding: "5px 10px" }}
              >
                Buy
              </Button>
              {/* <Button>Buy</Button> */}
            </Link>
            <Button
              size="medium"
              color="primary"
              variant="contained"
              sx={{ borderRadius: 10, padding: "5px 10px" }}
              // onClick={handleOpen}
            >
              More
            </Button>
          </CardActions>
        </Box>
      </Card>
      {/* <MoreModal obj={obj} open={open} handleClose={handleClose} /> */}
    </>
  );
}
