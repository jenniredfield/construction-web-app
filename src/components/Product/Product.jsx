import { Box, Typography } from "@mui/material";
import { ImageStyled } from "./Product.styles";

const ProductComponent = ({ product }) => {
  const { imgSrc, name, description, price, shop, dimensions } = product;
  const img = Array.isArray(imgSrc) ? imgSrc[0] : imgSrc;

  return (
    <Box display="flex">
      <Box>
        <ImageStyled src={img} alt="product" />
      </Box>
      <Box>
        <Box>
          <Typography>{name}</Typography>
        </Box>
        <Box>
          <Typography>{description}</Typography>
        </Box>
        <Box>
          <Typography>{price}</Typography>
        </Box>

        <Box>
          <Typography>{shop}</Typography>
        </Box>
        <Box>{/* <Typography>{dimensions}</Typography> */}</Box>
      </Box>
    </Box>
  );
};

export default ProductComponent;
