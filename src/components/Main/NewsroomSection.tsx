import React from "react";
import img1 from "../../assets/news_img/news1.jpg";
import img2 from "../../assets/news_img/news2.jpg";
import img3 from "../../assets/news_img/news3.jpg";

interface NewsItem {
  image: string;
  title: string;
  date: string;
}


const newsItems: NewsItem[] = [
  {
    image: img1,
    title: "농우 푸드 뉴스1",
    date: "2025.07.14",
  },
  {
    image: img2,
    title: "농우 푸드 뉴스2",
    date: "2025.07.11",
  },
  {
    image: img3,
    title: "농우 푸드 뉴스3",
    date: "2025.07.02",
  },
];

const NewsroomSection: React.FC = () => {
  return (
    <section className="bg-white py-20 text-center">
      {/* 상단 타이틀 */}
      <h2 className="text-orange-500 text-xl font-bold mb-2 tracking-widest">NEWSROOM</h2>
      <div className="w-6 h-1 bg-orange-500 mx-auto mb-6"></div>

      {/* 부제목 */}
      <p className="text-2xl md:text-3xl font-medium text-gray-800 mb-8 leading-relaxed">
        농우의 다양한 소식들을 <br /> 만나볼 수 있습니다.
      </p>

      {/* 버튼 */}
      <button className="border border-orange-400 text-orange-500 px-6 py-2 rounded-full hover:bg-red-50 transition mb-16">
        Find out more →
      </button>

      {/* 뉴스 카드 목록 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 text-left">
        {newsItems.map((item, idx) => (
          <div key={idx}>
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <p className="text-gray-700 font-medium text-[15px] leading-snug mb-2">{item.title}</p>
            <p className="text-sm text-gray-500">{item.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsroomSection;
