import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import SwiperCore from "swiper";

import MainImg from "../../assets/MainImg.png";
import MainImg2 from "../../assets/MainImg2.jpg";
import MainImg3 from "../../assets/MainImg3.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const menuData = [
  {
    title: "SUSTAINABILITY",
    leftItems: [
      "Overview",
      "대외인정 및 발자취",
      "기후변화 대응",
      "건강과 영양 증진",
      "다양성, 공정성, 포용성 준중 · 인권경영",
      "안전보건",
      "사회공헌",
    ],
  },
  {
    title: "ABOUT",
    leftItems: ["회사소개", "인사말", "연혁"],
  },
  {
    title: "PRODUCTS",
    leftItems: ["수입제품", "수출제품"],
  },
  {
    title: "CONTACT",
    leftItems: ["회사 내부", "회사 외부"],
  },
];

const images = [
  {
    src: MainImg,
    title: "Nongwoo to your Trust",
    subtitle: "자연을 담은 신뢰",
  },
  {
    src: MainImg2,
    title: "From Seed to Table",
    subtitle: "처음부터 끝까지 건강하게",
  },
  {
    src: MainImg3,
    title: "Global Nongwoo",
    subtitle: "세계로 뻗어가는 농우",
  },
];

const Top: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const swiperRef = useRef<SwiperCore | null>(null);

  return (
    <div className="relative w-full h-[700px]">
      {/* ✅ 네비게이션 바 */}
      <div className="absolute top-0 left-0 w-full z-30 bg-opacity-30">
        <div
          className="max-w-[1200px] mx-auto px-4 py-5 flex items-center"
          onMouseLeave={() => setActiveIndex(null)}
        >
          {/* 로고 */}
          <div className="text-2xl font-bold text-white">
            <span className="text-green-300">Nong</span>
            <span className="text-orange-300">woo</span>
          </div>

          {/* 메뉴 */}
          <div className="flex items-center space-x-8 ml-[550px] text-white">
            {menuData.map((menu, idx) => (
              <div
                key={idx}
                className="relative"
                onMouseEnter={() => setActiveIndex(idx)}
              >
                <button className="font-bold text-[16px] hover:text-orange-400 transition">
                  {menu.title}
                </button>

                {activeIndex === idx && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-[100%] mt-3 w-[300px] border-t-2 border-orange-400 bg-white shadow-xl z-50 p-6 text-sm text-black">
                    <div className="space-y-2">
                      {menu.leftItems.map((item, i) => (
                        <div
                          key={i}
                          className="hover:text-orange-500 transition"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ✅ 슬라이더 */}
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        autoplay={{ delay: 5000 }}
        loop
        effect="fade"
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
        className="w-full h-full"
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative w-full h-full">
              {/* ✅ 이미지 배경 처리 */}
              <img
                src={img.src}
                alt={img.title}
                className="absolute inset-0 w-full h-full object-cover z-0 bg-gradient-to-b from-purple-500 to-red-500 rounded-br-[350px]"
              />

              {/* ✅ 어두운 오버레이 */}
              <div className="absolute inset-0 bg-black opacity-15 z-10 rounded-br-[350px]"></div>

              {/* ✅ 텍스트 콘텐츠 */}
              <div className="absolute bottom-16 left-12 z-20 text-white drop-shadow-md">
                <p className="text-base mb-1">{img.subtitle}</p>
                <h2 className="text-3xl md:text-5xl font-bold leading-snug">
                  {img.title}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* ✅ 슬라이드 인덱스 점 */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
          {images.map((_, idx) => (
            <div
              key={idx}
              onClick={() => swiperRef.current?.slideToLoop(idx)}
              className={`w-[30px] h-[4px] rounded-full cursor-pointer transition-all duration-300 ${activeSlide === idx
                  ? "bg-white"
                  : "bg-gray-400 bg-opacity-70"
                }`}
            />
          ))}
        </div>

        {/* ✅ 좌우 내비게이션 */}
        <div className="custom-prev absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white text-orange-500 rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-orange-100 cursor-pointer">
          ←
        </div>
        <div className="custom-next absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white text-orange-500 rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-orange-100 cursor-pointer">
          →
        </div>
      </Swiper>
    </div>
  );
};

export default Top;
