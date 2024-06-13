import { Navigation, Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Container } from 'components/Wrappers/Container';
import { SwiperItem } from './SwiperItem';

import { Inner } from './styles';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface SwiperProps {
    list: Model.Product[]
}

export const Slider = ({ list }: SwiperProps) => {
    return (
        <Container>
            <Inner>
                <Swiper
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    effect={"fade"}
                    navigation={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[EffectFade, Navigation, Autoplay, Pagination]}
                >
                    {list.map((item) => (
                        <SwiperSlide key={item.id}>
                            <SwiperItem {...item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Inner>
        </Container>
    );
};
