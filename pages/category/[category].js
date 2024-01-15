import React, { useEffect, useState } from "react";
import Layout from "~/components/layout/Layout.js";
import Head from "next/head";
import axios from "axios";
import Loading from "~/components/Loading.js";
import { useRouter } from "next/router";
import ItemCard from "~/components/ItemCard.js";

function Category() {
  const router = useRouter();
  const { category } = router.query;
  const [loading, setLoading] = useState(true);
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    if (category) {
      const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
      async function getMeals() {
        await axios
          .get(url)
          .then(({ data }) => {
            setMenu(data.meals);
          })
          .catch((err) => {
            alert(err);
          });
      }
      getMeals();
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, [category]);

  return (
    <>
      <Head>
        <title>Category</title>
      </Head>
      <Layout>
        <section className="relative py-20 overflow-hidden bg-white">
          <span className="absolute top-0 right-0 flex flex-col items-end mt-0 -mr-16 opacity-60">
            <span className="container hidden w-screen h-32 max-w-xs mt-20 transform rounded-full rounded-r-none md:block md:max-w-xs lg:max-w-lg 2xl:max-w-3xl bg-blue-50" />
          </span>
          <span className="absolute bottom-0 left-0"></span>
          <div className="relative px-16 mx-auto max-w-7xl">
            <h2 className="relative max-w-lg mt-5 mb-10 text-4xl font-bold leading-tight lg:text-5xl">
              Find Your Foods
            </h2>
            <div className="grid w-full grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-4">
              {loading ? (
                <div className="absolute z-10">
                  <Loading />
                </div>
              ) : (
                menu.map((item) => (
                  <ItemCard key={item.idMeal} item={item} />
                ))
              )}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default Category;
