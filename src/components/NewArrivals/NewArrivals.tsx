import { EffectFade, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { ProductCard } from "components/ProductCard";
import { SectionTopBlock } from "components/SectionTopBlock";
import { Container } from "components/Wrappers/Container";
import { useAppSelector } from "shared/store/hooks";

import { Inner, Section } from "./styles";

const breakpoints = {
  420: {
    slidesPerView: 1.5,
    spaceBetween: 0,
  },
  640: {
    slidesPerView: 3.5,
    spaceBetween: 24,
  },
  1024: {
    slidesPerView: 4.5,
    spaceBetween: 24,
  },
};

export const NewArrivals = () => {
  const { products } = useAppSelector((state) => state.product);

  return (
    <Section>
      <Container>
        <SectionTopBlock title="New Arrivals" linkName="More Products" link="/shop" />
      </Container>
      <Inner>
        {products.length > 0 ? (
          <Swiper
            centeredSlides={true}
            breakpoints={{
              ...breakpoints,
            }}
            slidesPerView={1.5}
            spaceBetween={0}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            scrollbar={{ draggable: true }}
            modules={[EffectFade, Scrollbar]}>
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : null}
      </Inner>
    </Section>
  );
};
