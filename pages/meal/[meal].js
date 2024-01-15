import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import axios from "axios";
import Layout from "~/components/layout/Layout";
import Loading from "~/components/Loading";

function _meal() {
  const router = useRouter();
  const { meal } = router.query;
  const [loading, setLoading] = useState(true);
  const [menu, setMenu] = useState({});
  useEffect(() => {
    if (meal) {
      const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal}`;
      async function getMeals() {
        await axios
          .get(url)
          .then(({ data }) => {
            setMenu(data.meals[0]);
          })
          .catch((err) => {
            router.push("/404");
          });
      }

      getMeals();
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  }, [meal, router]);

  function getIngredients(menu) {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      if (menu[`strIngredient${i}`]) {
        ingredients.push([menu[`strMeasure${i}`], menu[`strIngredient${i}`]]);
      } else {
        break;
      }
    }
    return ingredients;
  }
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <Head>
        <title>{!menu ? "My Meals" : menu.strMeal}</title>
      </Head>
      <Layout>
        {/* Header Section */}
        <section className="px-10 py-24 mx-auto max-w-7xl">
          <div className="flex flex-col items-start sm:px-5 md:flex-row">
            <div className="w-full md:w-1/2">
              <div className="block">
                <img
                  className="object-cover w-full h-full rounded-lg max-h-64 sm:max-h-96"
                  src={menu.strMealThumb} alt={menu.strMeal}
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-center w-full h-full py-6 mb-6 md:mb-0 md:w-1/2">
              <div className="flex flex-col items-start justify-center h-full space-y-3 transform md:pl-10 lg:pl-16 md:space-y-5">
                <Link href={`/category/${menu.strCategory}`}>
                  <a
                    href="#_"
                    className="flex items-center px-4 py-2.5 mb-3 text-sm text-white bg-amber-500 rounded-md sm:mb-0 hover:bg-amber-700 sm:w-auto"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 mr-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1={5} y1={12} x2={25} y2={12} />
                      <polyline points="12 5 5 12 12 19" />
                    </svg>
                    {menu.strCategory}
                  </a>
                </Link>
                <h1 className="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl">
                  <div href="#_">{menu.strMeal}</div>
                </h1>
                <div className="h-1 block my-2 w-1/6 bg-gray-200 rounded-xl"></div>
                <div className="pt-2 text-sm font-medium text-gray-600">
                  Original{": "}
                  <div className="mr-1 inline">{menu.strArea}</div>{" "}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="px-10 mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row items-start justify-center w-full h-full gap-2">
            <div className="rounded-lg border shadow-lg p-4 sm:p-6 w-full sm:w-1/2">
              <div className="text-2xl font-bold leading-relaxed flex-auto mb-2">
                Ingredients
              </div>
              <table className="text-sm text-left text-gray-500 w-full">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                  <tr>
                    <th scope="col" className="py-3 px-6">
                      Number
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Ingredient
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {getIngredients(menu).map((ingredient, index) => (
                    <tr className="bg-white border-b" key={index}>
                      <td scope="row" className="py-4 px-6 ">
                        {index + 1}
                      </td>
                      <td className="py-4 px-6 font-medium text-gray-900">
                        {ingredient[1]}
                      </td>
                      <td className="py-4 px-6">{ingredient[0]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="text-md leading-5"></div>
            </div>
            <div className="rounded-lg border shadow-lg p-4 sm:p-6 w-full sm:w-1/2">
              <div className="text-2xl font-bold leading-relaxed">Recipes</div>
              <div className="h-1 block my-2 w-1/6 bg-gray-200 rounded-xl"></div>
              <div className="text-md">
                {menu.strInstructions}
              </div>
            </div>
          </div>
        </section>
        <section className="px-0 py-8 md:py-32 bg-white sm:px-10">
          <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
            <div className="flex flex-wrap items-center sm:-mx-3">
              <div className="w-full md:w-1/2 md:px-3">
                <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                  <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                    <span className="block xl:inline">Watch the </span>
                    <span className="block text-amber-500 xl:inline">
                      Video Tutorial
                    </span>
                  </h1>
                  <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">
                    We help you to learn how to make {menu.strMeal} with this video.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <iframe
                  className="w-full h-48 md:h-80 overflow-hidden rounded-md shadow-xl sm:rounded-xl"
                  src={menu.strYoutube?.replace("watch?v=", "embed/")}
                />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default _meal;
