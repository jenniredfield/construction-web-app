import React from "react";
import { Box } from "@mui/material";

import { useShopContext } from "../../../context/ShopProvider";
import { Close } from "@mui/icons-material";

const Cart = () => {
  const { cart, toggleCart } = useShopContext();
  console.log("🚀 ~ file: Cart.jsx ~ line 9 ~ Notification ~ cart", cart);
  const cartTotal = cart.length;
  if (!cartTotal) return null;
  return (
    <Box height="100vh" width="100vw" position="absolute" top={0}>
      HELLO
      <Box width="400px" backgroundColor="white">
        <Box>
          <Close onClick={toggleCart} />
        </Box>
      </Box>
    </Box>
  );
};

export default Cart;
