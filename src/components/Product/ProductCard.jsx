import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { productContext } from "../Contexts/ProductContext";

const ProductCard = ({ item }) => {
  const { toggleLike } = React.useContext(productContext);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={item.image}
        alt={item.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
        <Typography variant="caption" color="error">
          {item.author}
        </Typography>
        <div>
          <Typography variant="body" color="error">
            {item.likes}
          </Typography>
        </div>
      </CardContent>
      {item.is_author ? (
        <CardActions>
          <Button size="small">Delete</Button>
          <Button size="small" onClick={() => toggleLike(item.id)}>
            Like
          </Button>
        </CardActions>
      ) : null}
    </Card>
  );
};

export default ProductCard;
