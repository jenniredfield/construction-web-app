import { Grid } from "@mui/material";
import ProductCard from "../ProductCard/ProductCard";

const ProductsGrid = ({ products }) => {
  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid item xs={6} md={4} key={product.id}>
          <ProductCard {...product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductsGrid;
