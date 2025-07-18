import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const slides = [
  {
    title: "KONGWOO FOODS",
    description: "Nongwoo to your Trust",
    bgColor: "bg-orange-500",
  },
  {
    title: "맛과 기술의 조화",
    description: "새로운 맛의 혁신을 이끌다.",
    bgColor: "bg-orange-400",
  },
];

const MainSlider = () => {
  return (
    <div className="relative w-full h-[500px]">
      {/* ✅ 커스텀 버튼 */}
      <div className="custom-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white text-orange-500 rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-orange-100 cursor-pointer">
        ←
      </div>
      <div className="custom-next absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white text-orange-500 rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-orange-100 cursor-pointer">
        →
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        autoplay={{ delay: 5000 }}
        loop
        className="w-full h-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className={`${slide.bgColor} w-full h-full text-white flex items-center`}>
              <div className="max-w-[1200px] mx-auto px-8">
                <p className="text-sm mb-3">{slide.title}</p>
                <h2 className="text-3xl md:text-5xl font-bold leading-snug mb-6">
                  {slide.description}
                </h2>
                <button className="bg-white text-orange-500 font-semibold rounded-full px-6 py-2 flex items-center gap-2 hover:bg-gray-100 transition">
                  자세히보기 <span className="text-xl">+</span>
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MainSlider;
