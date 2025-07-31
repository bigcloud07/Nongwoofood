import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import listitem1 from "../assets/product_list/list_item_1.jpg";
import listitem2 from "../assets/product_list/list_item_2.jpg";
import listitem3 from "../assets/product_list/list_item_3.jpg";
import listitem4 from "../assets/product_list/list_item_4.jpg";

// 메뉴 데이터
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

// 제품 데이터
const products = [
    {
        id: 1,
        name: "농우푸드1",
        image: listitem1,
        introLink: "#",
        buyLink: "#",
    },
    {
        id: 2,
        name: "농우푸드2",
        image: listitem2,
        introLink: "#",
        buyLink: "#",
    },
    {
        id: 3,
        name: "농우푸드3",
        image: listitem3,
        introLink: "#",
        buyLink: "#",
    },
    {
        id: 4,
        name: "농우푸드4",
        image: listitem4,
        introLink: "#",
        buyLink: "#",
    },
];

const ProductPage: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const navigate = useNavigate();

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
                                        className={`absolute top-full mt-3 w-[300px] border-t-2 border-orange-400 bg-white shadow-xl z-50 p-6 text-sm text-black ${
                                            idx === menuData.length - 1
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

            {/* 제품 리스트 */}
            <div className="w-full max-w-5xl mx-auto py-16 text-center">
                <h2 className="text-2xl font-bold mb-10">제품리스트</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-10">
                    {products.map((product) => (
                        <div key={product.id} className="flex flex-col items-center">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-32 h-32 object-contain mb-4"
                            />
                            <p className="mb-3 text-lg">{product.name}</p>
                            <div className="flex gap-2">
                                {/* 제품소개 → 상세 페이지 이동 */}
                                <button
                                    onClick={() => navigate(`/product/${product.id}`, { state: product })}
                                    className="px-4 py-1 bg-orange-500 text-white text-sm hover:bg-orange-600 transition"
                                >
                                    제품소개
                                </button>
                                <a
                                    href={product.buyLink}
                                    className="px-4 py-1 border border-orange-500 text-orange-500 text-sm hover:bg-orange-50 transition"
                                >
                                    구매하기
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
