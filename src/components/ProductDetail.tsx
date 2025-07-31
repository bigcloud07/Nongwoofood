import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaInfoCircle, FaHeart, FaCalendarAlt, FaClock } from "react-icons/fa";

// 상단 네비게이션 메뉴
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

interface Product {
    id: number;
    name: string;
    image: string;
    introLink: string;
    buyLink: string;
    weight?: string;
    calorie?: string;
    shelfLife?: string;
    releasedAt?: string;
    type?: string;
    material?: string;
    factory?: string;
}

const ProductDetail: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const location = useLocation();
    const navigate = useNavigate();
    const product = location.state as Product;

    if (!product) return <div className="p-10">제품 정보를 불러올 수 없습니다.</div>;

    return (
        <div className="w-full min-h-screen bg-white">
            {/* 상단 네비게이션 바 */}
            <div className="sticky top-0 left-0 w-full z-30 bg-white bg-opacity-30 backdrop-blur-sm">
                <div
                    className="max-w-[1200px] mx-auto px-4 py-5 flex items-center"
                    onMouseLeave={() => setActiveIndex(null)}
                >
                    {/* 로고 */}
                    <div className="text-2xl font-bold cursor-pointer" onClick={() => navigate("/")}>
                        <span className="text-green-500">Nong</span>
                        <span className="text-orange-500">woo</span>
                    </div>

                    {/* 메뉴 */}
                    <div className="flex items-center space-x-8 ml-auto text-black cursor-pointer">
                        {menuData.map((menu, idx) => (
                            <div
                                key={idx}
                                className="relative"
                                onMouseEnter={() => setActiveIndex(idx)}
                            >
                                <button className="font-bold text-[16px] hover:text-orange-500 transition">
                                    {menu.title}
                                </button>

                                {activeIndex === idx && (
                                    <div
                                        className={`absolute top-full mt-3 w-[300px] border-t-2 border-orange-400 bg-white shadow-xl z-50 p-6 text-sm text-black ${idx === menuData.length - 1
                                                ? "right-0"
                                                : "left-1/2 -translate-x-1/2"
                                            }`}
                                    >
                                        <div className="space-y-2">
                                            {menu.leftItems.map((item, i) => (
                                                <div key={i} className="hover:text-orange-500 transition">
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

            {/* 제품 디테일 */}
            <div className="max-w-6xl mx-auto px-6 py-12 ">
                {/* 제목 */}
                <div className="mb-6">
                    <h1 className="text-3xl font-bold">{product.name}</h1>

                    <hr className="mt-4 border-gray-300" />
                </div>

                <div className="flex flex-col md:flex-row gap-12">
                    {/* 제품 이미지 */}
                    <div className="flex-1 flex justify-center">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="max-w-[400px] w-full object-contain border"
                        />
                    </div>

                    {/* 제품 정보 */}
                    <div className="flex-1 flex flex-col gap-8 mt-[50px]">
                        {/* 상단 4개 정보 */}
                        <div className="grid grid-cols-4 gap-4 text-center">
                            <div>
                                <FaInfoCircle className="mx-auto text-4xl text-orange-500 mb-2" />
                                <p className="text-sm text-gray-500">중량</p>
                                <p className="font-bold">{product.weight || "110g"}</p>
                            </div>
                            <div>
                                <FaHeart className="mx-auto text-4xl text-orange-500 mb-2" />
                                <p className="text-sm text-gray-500">칼로리</p>
                                <p className="font-bold">{product.calorie || "470kcal"}</p>
                            </div>
                            <div>
                                <FaCalendarAlt className="mx-auto text-4xl text-orange-500 mb-2" />
                                <p className="text-sm text-gray-500">소비기한</p>
                                <p className="font-bold">{product.shelfLife || "6개월"}</p>
                            </div>
                            <div>
                                <FaClock className="mx-auto text-4xl text-orange-500 mb-2" />
                                <p className="text-sm text-gray-500">출시년도</p>
                                <p className="font-bold">{product.releasedAt || "2000.06"}</p>
                            </div>
                        </div>

                        {/* 상세 정보 테이블 */}
                        <div className="border border-gray-200">
                            <table className="w-full text-sm border-collapse">
                                <tbody>
                                    <tr className="border-b border-gray-200">
                                        <td className="bg-gray-50 w-32 p-3 font-medium">식품의 유형</td>
                                        <td className="p-3">{product.type || "유탕면"}</td>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <td className="bg-gray-50 w-32 p-3 font-medium">포장재질</td>
                                        <td className="p-3">
                                            {product.material ||
                                                "용기: 폴리에틸렌(내면)+종이(외면)"}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="bg-gray-50 w-32 p-3 font-medium">제조원</td>
                                        <td className="p-3">
                                            {product.factory ||
                                                "경기도 성남시 분당구 장미로 42, 218호"}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* 버튼 영역 */}
                        <div className="grid grid-cols-3 gap-x-8 mt-6 w-full">
                            <a
                                href={product.introLink || "#"}
                                className="py-3 text-center bg-gray-700 text-white hover:bg-gray-800 transition rounded"
                            >
                                브랜드 소개
                            </a>
                            <button
                                onClick={() => navigate(-1)}
                                className="py-3 text-center bg-gray-500 text-white hover:bg-gray-600 transition rounded"
                            >
                                목록 보기
                            </button>
                            <a
                                href={product.buyLink || "#"}
                                className="py-3 text-center bg-orange-500 text-white hover:bg-orange-600 transition rounded"
                            >
                                구매하기
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
