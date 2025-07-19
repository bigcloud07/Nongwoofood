import logo from "../../assets/nongwoofood_logo.png"
import brandimg from "../../assets/brand_img/1.png";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-500 text-sm py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        {/* 왼쪽 로고 */}
        <div className="flex-shrink-0">
          <img
            src={logo} // 로고 이미지 경로
            alt="Nongwoo Foods Logo"
            className="w-40"
          />
        </div>

        {/* 가운데 회사 정보 */}
        <div className="flex-1">
          {/* 상단 링크 */}
          <div className="flex flex-wrap gap-4 mb-4 text-gray-700 font-medium">
            <a href="#">회사소개</a>
            <a href="#">고객지원</a>
            <a href="#">IR</a>
            <a href="#">인재채용</a>
            <a href="#">찾아오시는 길</a>
            <a href="#">개인정보처리방침</a>
          </div>

          {/* 주소 및 기타 정보 */}
          <p className="leading-relaxed">
            농우식품(주) 경기도 성남시 분당구 장미로 42, 218호 (야탑동, 야탑리더스)
            <br />
            대표이사: 김원욱<br />
            사업자등록번호: 102-81-05450 |
            통신판매신고번호: 2016-서울성북-0790<br />
            고객센터: 080-940-3333(무료상담전화) | 대표전화: 02-940-3000
          </p>

          <p className="text-xs text-gray-400 mt-4">
            Copyright © Nongwoo Food Inc. All Rights Reserved.
          </p>
        </div>

        {/* 오른쪽 드롭다운 & 수상 마크 */}
        <div className="flex flex-col gap-4">
          {/* Family Site */}
          <select className="border border-gray-300 rounded px-4 py-2 text-sm text-gray-700">
            <option>Family Site</option>
            <option>Nongwoo USA</option>
            <option>Nongwoo China</option>
          </select>

          {/* 수상 이미지 */}
          {/* <img
            src={brandimg} // 수상 이미지 경로
            alt="temporary image"
            className="w-40"
          /> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
