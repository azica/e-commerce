import { Box, Typography } from "@mui/material";
import { cartTabs } from "assets/data/mockdata";
import { Preloader } from "components/Preloader";
import { Tabs } from "components/Tabs";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const titles = [
    { name: "Cart", param: "shopping" },
    { name: "Checkout Out", param: "checkout" },
    { name: "Order", param: "order" },
]
const Cart = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [activeTab, setActiveTab] = useState("shopping");

    const currentTitle = titles.find(title => title.param === activeTab);

    return (
        <Box paddingY={10}>
            <Typography variant="h3" color="black.100" align="center" marginBottom={5}>
                {currentTitle ? currentTitle.name : "Default Title"}
            </Typography>
            <Tabs
                tabs={cartTabs}
                commonPath="/cart"
                changeParamUrl={setActiveTab}
                setIsLoading={setIsLoading}
                circled
                activeTab={activeTab}
            >
                <Preloader active={isLoading}>
                    <Outlet />
                </Preloader>
            </Tabs>
        </Box>
    )
}

export default Cart