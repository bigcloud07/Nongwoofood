import { useState } from "react";
import foodimg1 from "../../assets/food_img/home_instant/1.jpg"
import foodimg2 from "../../assets/food_img/home_instant/2.jpg"
import foodimg3 from "../../assets/food_img/home_instant/3.jpg"

import fryimg1 from "../../assets/food_img/3/1.jpg"
import fryimg2 from "../../assets/food_img/3/2.jpg"
import fryimg3 from "../../assets/food_img/3/3.jpg"

import foodimg4 from "../../assets/food_img/2/1.jpg"
import foodimg5 from "../../assets/food_img/2/2.jpg"
import foodimg6 from "../../assets/food_img/2/3.jpg"

import vage1 from "../../assets/vege_img/1.jpg"
import vage2 from "../../assets/vege_img/2.jpg"
import vage3 from "../../assets/vege_img/3.jpg"

const tabs = ["식자재", "조미료", "튀김", "야채·과일"];

const brandData: Record<string, { name: string; image: string }[]> = {
  식자재: [
    { name: "간편뚝딱", image: foodimg1 },
    { name: "간편뚝딱2", image: foodimg2 },
    { name: "간편뚝딱3", image: foodimg3 },
  ],
  조미료: [
    { name: "다진마늘", image: foodimg4 },
    { name: "냉동파", image: foodimg5 },
    { name: "냉동양파", image: foodimg6 },
  ],
  "튀김": [
    { name: "트윙클", image: fryimg1 },
    { name: "스윗허그", image: fryimg2 },
    { name: "스윗어니언", image: fryimg3 },
    
  ],
  "야채·과일": [
    { name: "헬로굿", image: vage1 },
    { name: "리틀쿡", image: vage2 },
    { name: "요리요리", image: vage3 },
  ],
};

const BrandSection = () => {
  const [activeTab, setActiveTab] = useState("식자재");

  return (
    <section className="bg-white py-20 text-center">
      <h2 className="text-orange-500 text-xl font-bold mb-2 tracking-widest">BRANDS</h2>
      <div className="w-6 h-1 bg-orange-500 mx-auto mb-6"></div>

      <p className="text-2xl md:text-3xl font-medium text-gray-800 mb-8 leading-relaxed">
        소비자의 식탁 위에 건강한 먹거리를<br />
        농우푸드의 식품 브랜드를 소개합니다.
      </p>

      <button className="border border-orange-500 text-orange-500 px-6 py-2 rounded-full hover:bg-orange-50 transition mb-10">
        Find out more →
      </button>

      {/* 탭 메뉴 */}
      <div className="flex justify-center space-x-8 border-b border-gray-200 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 font-medium ${
              activeTab === tab
                ? "text-green-700 border-b-2 border-green-600"
                : "text-gray-500 hover:text-green-600 transition"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* 브랜드 카드 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
        {brandData[activeTab].map((brand, idx) => (
          <div key={idx} className="overflow-hidden rounded-lg shadow hover:shadow-lg transition">
            <img
              src={brand.image}
              alt={brand.name}
              className="w-full h-[500px] object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandSection;
