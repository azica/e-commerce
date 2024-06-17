import { Navigation, Autoplay, Pagination, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { useAppSelector } from "shared/store/hooks";

import { Inner } from "./styles";
import { SwiperItem } from "./SwiperItem";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const Slider = () => {
  const { products } = useAppSelector((state) => state.product);

  return (
    <Inner>
      {products.length > 0 ? (
        <Swiper
          slidesPerView={1}
          // loop={true}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}
          effect={"fade"}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Autoplay, Pagination]}>
          {products.map((item) => (
            <SwiperSlide key={item.id}>
              <SwiperItem {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : null}
    </Inner>
  );
};
