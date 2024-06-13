
import logo from "assets/images/logo.jpg";
import { LogoWrap } from "./styles";

export const Logo = ({ link = "/" }: { link?: string }) => {
    return (
        <LogoWrap to={link}>
            <img src={logo} alt="logo" />
        </LogoWrap>
    )
}
