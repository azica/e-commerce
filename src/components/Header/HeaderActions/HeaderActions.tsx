import { useEffect, useState } from "react"
import { IconButton } from '@mui/material';

import { SearchIcon, ShopBagIcon, UserCircleIcon } from "assets/icons"
import { Wrapper, ProductQuantity } from "./styles"


export const HeaderActions = () => {
    const [showCart, setShowCart] = useState(false)
    const [showSearchBar, setShowSearchBar] = useState(false)
    const [productQuantity, setProductQuantity] = useState(0)
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    useEffect(() => {
        const cartList = localStorage.getItem("cartList")
        if (cartList) {
            const parsedCartList: Model.Product & { quantity: number }[] = JSON.parse(cartList)
            const totalQuantity = parsedCartList.reduce((acc, el) => acc + el.quantity, 0)
            setProductQuantity(totalQuantity)
        }
    }, [])

    const searchHandle = () => {
        setShowSearchBar(!showSearchBar)
    }

    const wishlistHandle = () => {
        alert("Wishlist clicked")
    }

    const toggleDrawer = () => {
        setShowCart(!showCart)
    }

    const actions = [
        {
            icon: <SearchIcon />,
            handle: () => searchHandle(),
            name: "search"
        },
        {
            icon: <UserCircleIcon />,
            handle: () => wishlistHandle(),
            name: "user"
        },
        {
            icon: <ShopBagIcon />,
            handle: () => wishlistHandle(),
            name: "shop"
        },
    ]

    return (
        <Wrapper>
            {actions.map((button) => (
                <>
                    <IconButton key={button.name} onClick={button.handle}>
                        {button.icon}
                    </IconButton>
                    {
                        button.name === "shop" ?
                            <ProductQuantity>
                                <span>{productQuantity || 0}</span>
                            </ProductQuantity>
                            : null
                    }
                </>
            ))}
        </Wrapper>
    )
}
