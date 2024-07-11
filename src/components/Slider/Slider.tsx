import { Navigation, Autoplay, Pagination, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { useAppSelector } from "shared/store/hooks";
import { SwiperItem } from "./SwiperItem";

import { Inner, NextButton, PrevButton } from "./styles";
import { ArrowLeftIcon, ArrowRightIcon } from "assets/icons";

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
            prevEl: '.custom-prev-button',
            nextEl: '.custom-next-button',
          }}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Autoplay, Pagination]}
        >
          {products.map((item) => (
            <SwiperSlide key={item.id}>
              <SwiperItem {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : null}
      <PrevButton className="custom-prev-button">
        <ArrowRightIcon />
      </PrevButton>
      <NextButton className="custom-next-button">
        <ArrowLeftIcon />
      </NextButton>
    </Inner>
  );
};
