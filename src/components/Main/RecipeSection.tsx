import React from "react";
import food1 from "../../assets/Recipe/food1.jpg";
import food2 from "../../assets/Recipe/food2.jpg";
import food3 from "../../assets/Recipe/food3.jpg";
import food4 from "../../assets/Recipe/food4.jpg";


interface Recipe {
  image: string;
  title: string;
  tags: string[];
}

const recipes: Recipe[] = [
  {
    image: food1,
    title: "카나페",
    tags: ["연어", "크림치즈", "홈파티"],
  },
  {
    image: food2,
    title: "스테이크",
    tags: ["소고기", "채소", "고급요리"],
  },
  {
    image: food3,
    title: "불고기 피자",
    tags: ["불고기", "루꼴라", "간식"],
  },
  {
    image: food4,
    title: "샌드위치",
    tags: ["잠봉뵈르", "토마토", "피크닉"],
  },
];

const RecipeSection: React.FC = () => {
  return (
    <section className="bg-white py-20 text-center">
      {/* 제목 */}
      <h2 className="text-orange-500 text-xl font-bold mb-2 tracking-widest">RECIPE</h2>
      <div className="w-6 h-1 bg-orange-500 mx-auto mb-6"></div>

      {/* 부제목 */}
      <p className="text-2xl md:text-3xl font-medium text-gray-800 mb-12 leading-relaxed">
        농우에서 식재료를 활용한 다양한 레시피를 만나보세요!
      </p>

      {/* 레시피 카드들 */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6 text-left">
        {recipes.map((recipe, idx) => (
          <div key={idx}>
            <img
              src={recipe.image}
              alt={recipe.title}
              className="rounded-xl w-full h-52 object-cover mb-4"
            />
            <p className="text-gray-800 font-semibold text-lg mb-1">
              {recipe.title} <span className="text-sm">↗</span>
            </p>
            <p className="text-gray-500 text-sm">
              {recipe.tags.map(tag => `#${tag}`).join(" ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecipeSection;
