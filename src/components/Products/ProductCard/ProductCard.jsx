import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const ProductCard = ({
  imgSrc,
  name,
  description,
  price,
  shop,
  dimensions,
}) => {
  const img = Array.isArray(imgSrc) ? imgSrc[0] : imgSrc;

  return (
    <Card>
      <CardMedia component="img" height="140" image={img} alt="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Box my={1}>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </Box>
        {dimensions && (
          <Box>
            <Typography gutterBottom variant="body1">
              {`${dimensions.w} x ${dimensions.h} x ${dimensions.d}`}
            </Typography>
          </Box>
        )}
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
