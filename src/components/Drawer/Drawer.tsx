
import { useIsMobile } from 'hooks/useMobile';
import { Wrapper, Title, IconButton } from './styles'
import { CloseIcon } from 'assets/icons';

export const Drawer = ({ title, toggleDrawer, open, children, isRight, fullWidth }: Drawer) => {
    const isMobile = useIsMobile(580);

    return (
        <Wrapper anchor={isRight ? "right" : "left"} open={open} onClose={toggleDrawer} className={fullWidth ? "fullWidth" : ""}>
            <Title variant="h6" color="black.900">
                {title}
                {
                    isMobile ?
                        <IconButton onClick={toggleDrawer} className="closeButton">
                            <CloseIcon />
                        </IconButton> : null
                }
            </Title>
            {children}
        </Wrapper>
    )
}
