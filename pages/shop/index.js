import React, { useEffect } from "react";
import { useAppContext } from "../../components/Context/Shoppie";
import ItemsList from "../../components/ItemsList/ItemsList";
import ShopPageWrapper from "../../components/ShopPageWrapper/ShopPageWrapper";

const ShopPage = () => {
  return (
    <ShopPageWrapper>
      <ItemsList />
    </ShopPageWrapper>
  );
};

export default ShopPage;
