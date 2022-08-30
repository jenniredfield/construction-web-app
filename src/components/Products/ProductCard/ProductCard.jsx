import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const ProductCard = ({ imgSrc, name, description, price, shop }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={imgSrc}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Box>
          <Typography gutterBottom variant="body1">
            {price}
          </Typography>
          <Typography gutterBottom variant="body1">
            {shop}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
