import React from "react";
import { Box } from "@mui/material";

import { useShopContext } from "../../../context/ShopProvider";
import { NotificationStyled } from "./Notification.styles";

const Notification = () => {
  const { cart } = useShopContext();
  const cartTotal = cart.length;
  if (!cartTotal) return null;
  return <NotificationStyled>{cartTotal}</NotificationStyled>;
};

export default Notification;
