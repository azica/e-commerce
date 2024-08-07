import type { ReactNode, FC } from "react";

export declare global {
  interface SideMenuItem {
    title: string;
    url: string;
    state?: { preloader?: boolean; commonPath?: string };
  }

  type FormWrapper = FC<{
    title: string;
    children: ReactNode;
    link?: string;
    width?: number;
    padding?: string;
  }>;

  type Form = FC<{
    children: JSX.Element | JSX.Element[];
    linksAfterButton?: JSX.Element;
    noAccounts?: JSX.Element;
    layout?: string;
    afterSubmit: (data: T) => void;
    beforeSubmit?: () => void;
    mainButton: {
      preloader?: ButtonPreloader;
      disabled?: boolean;
      fullWidth?: boolean;
      name: string;
    };
    noSend?: boolean;
    autoComplete?: string;
  }>;

  interface Avatar {
    image: string | null;
    name: string | null;
    color?: string;
    size?: "small" | "medium";
  }

  type Container = {
    children: ReactNode;
    fullWidth?: boolean;
    className?: string;
  };

  interface CardWrapper {
    background?: "violet" | "yellow";
    bordered?: string;
    children: ReactNode;
  }

  interface InputWrapper {
    type?: string;
    helperText?: string;
    invalid?: boolean;
    disabled?: boolean;
    children: ReactNode;
    id: string;
    className?: string;
  }

  interface ListLayout {
    title: string;
    children: ReactNode;
    buttonName: string;
    clickHandle: () => void;
  }

  interface ListItem {
    title: string;
    beforeNode?: ReactNode;
    afterNode?: ReactNode;
    layout: string;
  }

  interface Badge {
    greenBg?: boolean;
    children: ReactNode;
    size?: "medium" | "large";
  }

  interface Value {
    icon: ReactNode;
    id: number;
    title: string;
    subtitle: string;
  }

  interface SectionTopBlock {
    title: string;
    linkName: string;
    link: string;
  }

  interface PageHeader {
    title: string;
    backgroundImage?: string;
    subtitle: string;
    breadcrumbs: ReactNode;
  }

  interface Drawer {
    title: string;
    toggleDrawer: () => void;
    open?: boolean;
    children: ReactNode;
    isRight?: boolean;
    fullWidth?: boolean;
  }

  interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }

  interface Sort {
    options: Option[];
    placeholder: string;
    bordered?: boolean;
    searchNames: string[];
  }

  interface WishlistButton {
    small?: boolean;
    product?: Model.Product;
    isMobileMenu?: boolean;
    size: Size;
  }

  interface Delivery {
    label: string;
    checked: boolean;
    number: number;
    numberLabel: string;
  }

  type TimeLeft = {
    days?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
  };

  type ButtonGroup = FC<{
    buttons: TabItem[];
    searchParam: string;
  }>;

  interface WishlistButtonProps {
    small?: boolean;
    product: Model.Product;
    size?: Size;
  }

  interface ProductTable {
    products: Model.CartItem[];
    showMenu?: boolean;
    smallTable?: boolean;
    maxHeight?: number;
  }
}
