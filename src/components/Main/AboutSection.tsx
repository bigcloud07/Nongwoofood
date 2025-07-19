import logo from  "../../assets/nongwoofood_logo.png"
import company_img from "../../assets/company_img.jpg";
import freshfood from "../../assets/fresh_food.png";

const aboutData = [
  {
    title: "Brands",
    value: "8",
    description: "국내외 8개 식문화 브랜드",
    image: logo , 
  },
  {
    title: "History",
    value: "1998",
    description: "20년의 역사, 1998년 중국 농우식품유한공사 설립으로 부터의 시작",
    image: company_img,
  },
  {
    title: "Fresh Food",
    value: "No.1",
    description:
      "언제나 깨끗하고 믿을 수 있는 식재료로 소비자의 식탁을 건강하게 만들어갑니다.",
    image: freshfood,
  },
];

const AboutSection = () => {
  return (
    <section className="bg-white py-20 text-center">
      {/* 상단 ABOUT 타이틀 */}
      <h2 className="text-orange-500 text-xl font-bold mb-2 tracking-widest">ABOUT</h2>
      <div className="w-6 h-1 bg-orange-500 mx-auto mb-6"></div>

      {/* 부제목 */}
      <p className="text-2xl md:text-3xl font-medium text-gray-800 mb-8 leading-relaxed">
        체계적인 글로벌소싱을 통해 식재재 생산, 수입, 유통에  <br /> 전념해온 농산물 수입식품 전문업체 입니다.
      </p>

      {/* 버튼 */}
      <button className="border border-orange-400 text-orange-500 px-6 py-2 rounded-full hover:bg-red-50 transition mb-16">
        Find out more →
      </button>

      {/* 3단 정보 블록 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {aboutData.map((item, idx) => (
          <div key={idx} className="text-left">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <p className="text-green-500 text-sm font-semibold">{item.title}</p>
            <p className="text-4xl font-bold text-gray-700 mb-2">{item.value}</p>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
