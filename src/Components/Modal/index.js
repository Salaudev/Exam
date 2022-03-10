import * as React from "react";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
} from "@mui/material";
import { red } from "@mui/material/colors";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  //   bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function MoreModal({ obj, open, handleClose }) {
  return (
    <div>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        {/* <Box sx={style}> */}
        <Card sx={{ ...style }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
          />
          <CardMedia
            component="img"
            height="194"
            image={obj.book_image}
            alt={obj.title}
          />
          <CardContent>
            <Typography variant="body1" color="text.secondary">
              {obj.author}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {obj.description}
            </Typography>
          </CardContent>
          {/* <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions> */}
        </Card>
        {/* </Box> */}
      </Modal>
    </div>
  );
}
