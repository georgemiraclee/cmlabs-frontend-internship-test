import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const menus = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "Foods",
      link: "#",
    },
    {
      id: 3,
      name: "Ingredients",
      link: "#",
    },
    {
      id: 4,
      name: "Local Culinary",
      link: "#",
    },
  ];

  return (
    <header className="md:relative w-full bg-white body-font absolute">
      <div className="container justify-between mx-auto lg:max-w-7xl md:items-center md:flex  md:py-4 py-2">
        <div className="flex justify-between items-center px-10">
          <Link href="/">
            <div className="text-xl font-black leading-none text-gray-900 select-none logo">
              MEALAPP<span className="text-orange-600">.</span>
            </div>
          </Link>
          <div className="md:hidden">
            <button
              className="p-2 text-gray-700 rounded-md outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.72 5.72a.75.75 0 011.06 0L12 10.94l5.22-5.22a.75.75 0 111.06 1.06L13.06 12l5.22 5.22a.75.75 0 11-1.06 1.06L12 13.06l-5.22 5.22a.75.75 0 01-1.06-1.06L10.94 12 5.72 6.78a.75.75 0 010-1.06z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div className={`${isOpen ? "block" : "hidden"} md:block`}>
          <div className="flex flex-col px-10 space-y-4 md:flex-row md:items-center md:justify-between md:space-x-10 md:space-y-0">
            {menus.map((menu) => (
              <Link href={menu.link} key={menu.id}>
                <div
                  className={`cursor-pointer relative font-medium leading-6  transition duration-150 ease-out  + ${
                    router.pathname === menu.link
                      ? "text-gray-900 hover:text-gray-600"
                      : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  {menu.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
