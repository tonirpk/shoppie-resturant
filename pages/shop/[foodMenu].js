import React from "react";
import { useRouter } from "next/router";
import ShopPageWrapper from "../../components/ShopPageWrapper/ShopPageWrapper";
import { useAppContext } from "../../components/Context/Shoppie";
import ItemsList from "../../components/ItemsList/ItemsList";

const FoodMenuPage = () => {
  const { setFoodMenuId } = useAppContext();

  const router = useRouter();
  const { foodMenu } = router.query;
  setFoodMenuId(foodMenu);

  return (
    <ShopPageWrapper>
      <ItemsList />
    </ShopPageWrapper>
  );
};

export default FoodMenuPage;
