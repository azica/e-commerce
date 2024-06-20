import { EffectFade, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { ProductCard } from "components/ProductCard";
import { SectionTopBlock } from "components/SectionTopBlock";
import { useAppSelector } from "shared/store/hooks";

import { Inner, Section } from "./styles";

export const NewArrivals = () => {
  const { products } = useAppSelector((state) => state.product);

  return (
    <Section>
      <SectionTopBlock title="New Arrivals" linkName="More Products" link="/shop" />
      <Inner>
        {products.length > 0 ? (
          <Swiper
            centeredSlides={true}
            slidesPerView={4.5}
            spaceBetween={24}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            scrollbar={{ draggable: true }}
            modules={[EffectFade, Scrollbar]}>
            {products.map((item) => (
              <SwiperSlide key={item.id}>
                <ProductCard {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : null}
      </Inner>
    </Section>
  );
};
