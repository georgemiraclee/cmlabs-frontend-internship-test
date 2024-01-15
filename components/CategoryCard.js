import React from "react";
import Link from "next/link";

function CategoryCard({ category }) {
  const { strCategory, strCategoryThumb, } = category;
  return (
    <Link
      href={`/category/${strCategory}`}
    >
      <div className="flex flex-col items-center bg-slate-100 rounded-lg border shadow-lg md:flex-row md:max-w-md hover:bg-gray-300">
        <img
          className="object-cover bg-cover w-full rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg p-2"
          src={strCategoryThumb}
          alt={strCategory}
        />
        <div className="flex flex-col justify-start p-4 leading-normal align-top  h-full">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {strCategory}
          </h5>
        </div>
      </div>
    </Link>
  );
}

export default CategoryCard;
