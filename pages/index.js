import React, { useEffect, useState } from "react";
import Layout from "~/components/layout/Layout";
import Head from "next/head";
import axios from "axios";
import Loading from "~/components/Loading";
import CategoryCard from "~/components/CategoryCard";
function Index() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const { data } = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        setCategories(data.categories);
      } catch (error) {
        alert(error);
      }
    };
    getCategories();
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <Head>
        <title>MEALAPP</title>
      </Head>
      <Layout>
        <section className="h-auto bg-white">
          <div className="px-10 py-24 mx-auto max-w-7xl">
            <div className="w-full mx-auto text-left md:text-center">
              <h1 className="mb-6 text-5xl font-extrabold leading-none max-w-5xl mx-auto tracking-normal text-gray-900 sm:text-6xl md:text-6xl lg:text-7xl md:tracking-tight">
                See All Variety of{" "}
                <span className="w-full text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-300 lg:inline">
                  Delicious
                </span>{" "}
                <br className="lg:block hidden" />
                Foods{" "}
              </h1>
              <div className="px-0 mb-6 text-lg text-gray-600 md:text-xl lg:px-24 font-bold">
                {" "}
                 Meal App API Website
              </div>
              <div className="h-1 md:mx-auto w-1/3 bg-gradient-to-r from-orange-500 to-amber-500"></div>
            </div>
          </div>
        </section>
        <section className="h-auto bg-white px-10 mx-auto max-w-7xl">
          {loading ? (
            <div className="absolute z-10">
              <Loading />
            </div>
          ) : (
            <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {categories.map((item) => (
                <CategoryCard key={item.idCategory} category={item} />
              ))}
            </div>
          )}
        </section>
        <div></div>
      </Layout>
    </>
  );
}

export default Index;
