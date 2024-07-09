import { Typography } from "@mui/material";
import { CarIcon, FacebookIcon, InstagramIcon, LockIcon, MoneyIcon, PhoneIcon, YoutubeIcon } from "assets/icons";

export const navMenu = [
  { id: 1, url: "/", title: "Home" },
  { id: 2, url: "/shop", title: "Shop" },
  { id: 3, url: "/blog", title: "Blog" },
  { id: 4, url: "/contact-us", title: "Contact Us" },
];

export const valuesData: Value[] = [
  { id: 1, icon: <CarIcon />, title: "Free Shipping", subtitle: "Order above $200" },
  { id: 2, icon: <MoneyIcon />, title: "Money-back", subtitle: "30 days guarantee" },
  { id: 3, icon: <LockIcon />, title: "Secure Payments", subtitle: "Secured by Stripe" },
  { id: 4, icon: <PhoneIcon />, title: "24/7 Support", subtitle: "Phone and Email support" },
];

export const socialLinks = [
  { id: 0, icon: <InstagramIcon />, link: "" },
  { id: 1, icon: <FacebookIcon />, link: "" },
  { id: 2, icon: <YoutubeIcon />, link: "" },
];

export const prices: CheckboxListItem[] = [
  { id: 0, label: "All Price", checked: false, value: "all" },
  { id: 1, label: "$0.00 - 99.99", checked: false, value: "0.00-99.99" },
  { id: 2, label: "$100.00 - 199.99", checked: false, value: "100-199" },
  { id: 3, label: "$200.00 - 299.99", checked: false, value: "200-299" },
  { id: 4, label: "$300.00 - 399.99", checked: false, value: "300-399" },
];

export const sortOptions = [
  { name: "Title (A-Z)", value: "title-asc" },
  { name: "Title (Z-A)", value: "title-desc" },
  { name: "Price (Low to High)", value: "price-asc" },
  { name: "Price (High to Low)", value: "price-desc" },
];

export const reviewsOptions = [
  { name: "Newest", value: "newest" },
  { name: "Oldest", value: "oldest" },
]

export const tabsMenu = [
  { id: 1, label: "Reviews" },
  { id: 2, label: "Additional Info" },
  { id: 3, label: "Questions" },
];

export const cartTabs: TabsItem[] = [
  { id: 1, title: "Shopping cart", param: "shopping" },
  { id: 2, title: "Checkout details", param: "checkout" },
  { id: 3, title: "Order complete", param: "order" },
];

export const shippingButtons: CheckboxItem[] = [
  {
    id: 1, name: "Free shipping", value: "free",
    afterRadioLabel: <Typography variant="body2" fontFamily="fontfamily.interRegular" color="neutral.700">$0.00</Typography>
  },
  {
    id: 2, name: "Express shipping", value: "express",
    afterRadioLabel: <Typography variant="body2" fontFamily="fontfamily.interRegular" color="neutral.700">+$15.00</Typography>
  },
  {
    id: 3, name: "Pick Up", value: "pick-up",
    afterRadioLabel: <Typography variant="body2" fontFamily="fontfamily.interRegular" color="neutral.700">%21.00</Typography>
  }
]