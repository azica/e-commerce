import { Navigation, Autoplay, Pagination, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { ArrowLeftIcon, ArrowRightIcon } from "assets/icons";
import { useAppSelector } from "shared/store/hooks";

import { Inner } from "./styles";
import { SwiperItem } from "./SwiperItem";

export const Slider = () => {
  const { products } = useAppSelector((state) => state.product);

  return (
    <Inner>
      {products.length > 0 ? (
        <Swiper
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          effect={"fade"}
          navigation={{
            prevEl: ".custom-prev-button",
            nextEl: ".custom-next-button",
          }}
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
      <button className="custom-prev-button">
        <ArrowLeftIcon />
      </button>
      <button className="custom-next-button">
        <ArrowRightIcon />
      </button>
    </Inner>
  );
};
