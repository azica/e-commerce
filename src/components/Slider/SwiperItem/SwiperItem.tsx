import { Wrap } from './styles'

export const SwiperItem = ({ title, image }: Model.Product) => {
    return (
        <Wrap>
            <img src={image} alt={title} loading="lazy" />
        </Wrap>

    )
}
