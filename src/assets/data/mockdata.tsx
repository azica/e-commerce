import { CarIcon, FacebookIcon, InstagramIcon, LockIcon, MoneyIcon, PhoneIcon, YoutubeIcon } from "assets/icons";

export const navmenu = [
  { id: 1, url: "/", title: "Home" },
  { id: 2, url: "/shop", title: "Shop" },
  { id: 3, url: "/product", title: "Product" },
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
  { id: 0, label: "All Price", checked: false, value: "" },
  { id: 1, label: "$0.00 - 99.99", checked: false, value: 99 },
  { id: 2, label: "$100.00 - 199.99", checked: false, value: 199 },
  { id: 3, label: "$200.00 - 299.99", checked: false, value: 299 },
  { id: 4, label: "$300.00 - 399.99", checked: false, value: 300 },
];
