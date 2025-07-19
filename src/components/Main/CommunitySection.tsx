import React from "react";

const communityItems = [
  {
    title: "홍보영상",
    description: "농우식품의 다채로운 스토리를 영상으로 보여드립니다.",
  },
  {
    title: "맛있는 나눔",
    description: "모두가 행복한 맛있는 세상",
  },
  {
    title: "공지사항",
    description: "농우식품 개인정보취급방침 개정 안내",
  },
  {
    title: "고객 문의",
    description: "농우식품에게 여러분의 다양한 의견을 남겨주세요.",
  },
  {
    title: "농우식품 공식몰",
    description: "농우의 다양한 제품을 만나보세요.",
  },
];

const CommunitySection: React.FC = () => {
  return (
    <section className="bg-white py-20 text-center">
      {/* 타이틀 */}
      <h2 className="text-orange-500 text-xl font-bold mb-2 tracking-widest">COMMUNITY</h2>
      <div className="w-6 h-1 bg-orange-500 mx-auto mb-6"></div>

      {/* 설명 */}
      <p className="text-2xl md:text-3xl font-medium text-gray-800 mb-8 leading-relaxed">
        농우식품은 혁신적인 기술과 포용적인 사고로 <br />
        여러분과 함께 새로운 식문화를 만들어갑니다.
      </p>

      {/* 본문: 좌측 Facebook 영역 + 우측 카드들 */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6 mt-12 text-left">
        {/* 좌측 Facebook 영역 (대체 텍스트용 블록) */}
        <div className="bg-orange-100 h-full p-6 rounded-lg">
          <p className="text-gray-800 font-bold mb-2">Instagram 연동 영역</p>
          <p className="text-sm text-gray-600">※ 실제 적용 시 인스타그램 플러그인 삽입</p>
        </div>

        {/* 오른쪽 카드 5개 */}
        <div className="md:col-span-2 grid sm:grid-cols-2 gap-6">
          {communityItems.map((item, idx) => (
            <div key={idx} className="border border-gray-200 p-5 rounded-md shadow-sm hover:shadow-md transition">
              <h3 className="text-gray-800 font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{item.description}</p>
              <button className="text-orange-500 border border-orange-400 px-4 py-1 text-sm rounded-full hover:bg-red-50 transition">
                자세히 보기 →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
