import { ButtonPreloader } from "./ButtonPreloader";
import { ButtonCustom, Content, ButtomWrapper } from "./styles";

export const Button: Button = ({
  type,
  variant,
  disabled,
  children,
  color,
  secondary,
  link,
  uploader,
  uploaderProps,
  icon,
  onClick,
  preloader,
  fullWidth,
  className,
  size,
}) => {
  const component = uploader ? "label" : undefined;
  const startIcon = icon;

  return (
    <ButtomWrapper style={fullWidth ? { width: "100%" } : undefined}>
      <ButtonCustom
        variant={`${variant ? variant : "contained"}`}
        type={type}
        disabled={disabled}
        secondary={secondary ? `${secondary}` : undefined}
        onClick={onClick}
        href={link}
        size={size}
        color={color ? color : "primary"}
        inside={preloader && `${!preloader.outside}`}
        // @ts-ignore
        component={component}
        startIcon={startIcon}
        fullWidth={fullWidth}
        className={className}>
        <Content>
          {children}
          {preloader && !preloader.outside ? <ButtonPreloader {...preloader} disabled={disabled} /> : null}
        </Content>
        {uploader ? <input hidden accept="*" {...uploaderProps} type="file" /> : null}
      </ButtonCustom>
      {preloader && preloader.outside ? <ButtonPreloader {...preloader} disabled={disabled} /> : null}
    </ButtomWrapper>
  );
};
