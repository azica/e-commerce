import type { ReactNode, FunctionComponent, SVGProps, FC } from "react";

export declare global {
  interface SideMenuItem {
    id: number;
    title: string;
    url: string;
    icon: FunctionComponent<
      SVGProps<SVGSVGElement> & {
        title?: string | undefined;
      }
    >;
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
    afterSubmit: (data: any) => void;
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
}
