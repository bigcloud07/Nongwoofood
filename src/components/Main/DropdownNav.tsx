import React, { useState } from "react";

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

const DropdownNav: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <div className="relative w-full bg-white shadow-md">
            <div
                className="max-w-[1200px] mx-auto px-4 py-4 flex items-center"
                onMouseLeave={() => setActiveIndex(null)}
            >
                {/* 왼쪽 텍스트 로고 */}
                <div className="text-2xl font-bold">
                    <span className="text-green-600">Nongwoo</span>
                    <span className="text-orange-500">Food</span>
                </div>


                {/* 메뉴들 오른쪽으로 밀기 */}
                <div className="flex items-center space-x-8 ml-[550px]">
                    {menuData.map((menu, idx) => (
                        <div
                            key={idx}
                            className="relative"
                            onMouseEnter={() => setActiveIndex(idx)}
                        >
                            <button className="font-bold text-sm hover:text-orange-500 transition">
                                {menu.title}
                            </button>

                            {activeIndex === idx && (
                                <div className="absolute left-1/2 -translate-x-1/2 top-[100%] mt-4 w-[300px] border-t-orange-500 border-t-2 bg-white shadow-xl z-50 p-6 text-sm border border-gray-100">
                                    <div className="space-y-2">
                                        {menu.leftItems.map((item, i) => (
                                            <div
                                                key={i}
                                                className={`hover:text-orange-500 ${i === 1 ? " text-black" : "text-black"
                                                    }`}
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
    );
};

export default DropdownNav;
