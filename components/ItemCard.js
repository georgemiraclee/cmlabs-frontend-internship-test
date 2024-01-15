import React from "react";
import Link from "next/link";
function ItemCard({ item }) {
  const { strMeal, strMealThumb, idMeal } = item;
  const bgColor = ['bg-blue-50', 'bg-green-50', 'bg-pink-50', 'bg-yellow-50'];
  const randomColor = bgColor[Math.floor(Math.random() * bgColor.length)];
  console.log(randomColor);
  return (
    <Link href={`/meal/${idMeal}`}>
      <div className="flex flex-col items-center justify-center col-span-1">
        <div className="relative p-5">
          <div className={`absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tl-none ${randomColor}`} />
          <img
            className="relative z-20 w-full rounded-full"
            src={strMealThumb}
          />
        </div>
        <div className="mt-3 space-y-2 text-center">
          <div className="space-y-1 text-lg font-medium leading-6">
            <h3>{strMeal}</h3>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ItemCard;
