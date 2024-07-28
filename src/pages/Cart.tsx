import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import { cartTabs, tabTitles } from "assets/data/mockdata";
import { Preloader } from "components/Preloader";
import { Tabs } from "components/Tabs";
import { useAppSelector, useUser } from "shared/store/hooks";

const initializeTabs = (
  cartList: Model.CartItem[],
  completionStatus: Record<CompletionStatus, boolean>,
  isAuth: boolean,
) => {
  return cartTabs.map((tab) => {
    let isDisabled = false;
    let isChecked = false;

    switch (tab.param) {
      case "shopping":
        isChecked = cartList.length > 0 && isAuth !== null;
        break;
      case "checkout":
        isDisabled = !completionStatus?.shopping;
        isChecked = completionStatus?.checkout;
        break;
      case "order":
        isDisabled = !completionStatus?.checkout;
        break;
    }

    return { ...tab, state: { isDisabled, isChecked } };
  });
};

const Cart = () => {
  const user = useUser();
  const isAuth = user !== null;
  const [activeTab, setActiveTab] = useState("shopping");
  const [isLoading, setIsLoading] = useState(false);

  const { cartList, completionStatus } = useAppSelector((state) => state.cart);
  const [tabs, setTabs] = useState(() => initializeTabs(cartList, completionStatus, isAuth));
  const currentTitle = tabTitles.find((title) => title.param === activeTab);

  useEffect(() => {
    setTabs(initializeTabs(cartList, completionStatus, isAuth));
  }, [completionStatus, cartList, isAuth]);

  return (
    <Box paddingY={10}>
      <Typography variant="h3" color="black.100" align="center" marginBottom={5} className="fade">
        {currentTitle ? currentTitle.name : "Default Title"}
      </Typography>
      <Tabs
        tabs={tabs}
        commonPath="/cart"
        setActiveTab={setActiveTab}
        circled
        activeTab={activeTab}
        setIsLoading={setIsLoading}>
        <Preloader active={isLoading} isStart>
          <Outlet />
        </Preloader>
      </Tabs>
    </Box>
  );
};

export default Cart;
