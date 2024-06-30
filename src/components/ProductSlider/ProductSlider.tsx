import { useState } from "react";
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Badge } from "components/Badge";

import { Wrapper, Image, ImageThumb, Badges } from "./styles";

export const ProductSlider = ({ images, discountPercentage }: { images: string[]; discountPercentage?: number }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <Wrapper>
      {images.length < 1 ? (
        <Image>
          <img src={images[0]} alt="" />
          <Badges>
            <Badge size="medium">New</Badge>
            {discountPercentage ? (
              <Badge greenBg={true} size="medium">
                -{discountPercentage.toFixed(0)}%
              </Badge>
            ) : null}
          </Badges>
        </Image>
      ) : (
        <>
          <Swiper
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            className="mySwiper2"
            spaceBetween={15}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs, Autoplay]}>
            {images.map((image, idx) => (
              <SwiperSlide key={idx}>
                <Image>
                  <img src={image} alt="" />
                  <Badges>
                    <Badge size="medium">New</Badge>
                    {discountPercentage ? (
                      <Badge greenBg={true} size="medium">
                        -{discountPercentage.toFixed(0)}%
                      </Badge>
                    ) : null}
                  </Badges>
                </Image>
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={15}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="swiperThumbs">
            {images.map((image, idx) => (
              <SwiperSlide key={idx}>
                <ImageThumb>
                  <img src={image} alt="Product" />
                </ImageThumb>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      )}
    </Wrapper>
  );
};
