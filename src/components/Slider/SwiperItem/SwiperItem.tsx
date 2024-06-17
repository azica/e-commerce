import { Wrap } from "./styles";

export const SwiperItem = ({ title, images }: Model.Product) => {
  return (
    <Wrap>
      <img src={images[0]} alt={title} loading="lazy" />
    </Wrap>
  );
};
