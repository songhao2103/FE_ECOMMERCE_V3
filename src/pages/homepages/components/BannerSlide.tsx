import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../style/banner.css";

import type { IBannerItem } from "../homepage.type";
import { banners } from "../data";

interface IBannerItemProps {
  banner: IBannerItem;
}
const BannerItem: React.FC<IBannerItemProps> = ({ banner }) => {
  const Icon = banner.storeIcon;

  return (
    <div className="flex w-full">
      <div
        key={banner.id}
        className="w-full flex-shrink-0 px-[150px]"
        style={{ background: banner.gradient }}
      >
        <div className="flex items-center justify-between h-[500px] px-12">
          {/* Info */}
          <div className="w-1/2">
            <div className="flex items-center gap-5">
              <div className="text-4xl text-white">
                <Icon />
              </div>
              <p className="text-[24px] font-semibold text-white">
                {banner.store}
              </p>
            </div>

            <div className="mt-2 text-[48px] font-bold text-white">
              {banner.title}
            </div>

            <div className="mt-5 text-[36px] font-semibold text-white">
              {banner.sale}
            </div>

            <div className="flex items-center gap-3 mt-8 cursor-pointer">
              <p className="text-base text-white underline">Shop now</p>
              <div className="text-2xl text-white">
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-end w-1/2">
            <img
              src={banner.img}
              alt={banner.title}
              className="min-w-[350px] max-w-[90%] object-contain"
            />
          </div>
        </div>
      </div>
      a
    </div>
  );
};

const BannerSlide = () => {
  return (
    <div className="w-full h-fit max-h-[947px]">
      <Swiper
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1500}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        loop
        autoplay={{ delay: 10000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        className="h-full overflow-hidden "
      >
        {banners.map((banner, idx) => (
          <SwiperSlide key={idx}>
            <BannerItem banner={banner} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSlide;
