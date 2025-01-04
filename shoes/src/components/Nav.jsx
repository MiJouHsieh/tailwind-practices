import { TbShoppingBag } from "react-icons/tb"; 
import NikeLogo from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from 'react'
const ROUTES = ["Home","About","Services","Pricing","Contact"]

export function Nav() {
  const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);

  return (
    <nav className="outline flex flex-wrap justify-between items-center">
      <a href="#">
        <NikeLogo className="h-20 w-20" />
      </a>

      <button
        className="hover:bg-gray-100 p-2 focus:ring-2 focus:ring-gray-200 rounded-lg lg:hidden"
        onClick={() => setIsMobileMenuShown(!isMobileMenuShown)}
      >
        <RxHamburgerMenu size={25} />
      </button>

      <div
        className={`${!isMobileMenuShown && "hidden"} w-full lg:w-auto lg:block`}
      >
        <ul className="lg:space-x-8 flex flex-col lg:flex-row bg-gray-50 lg:bg-transparent border border-gray-100 lg:border-none text-lg rounded-lg p-4">
          {ROUTES.map((route, i) => {
            return (
              <li
                className={`rounded px-3 py-2 cursor-pointer ${i === 0 ? "bg-blue-500 text-white lg:bg-transparent lg:text-blue-500" : "hover:bg-gray-100"}`}
                key={route}
              >
                {route}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="fixed bottom-4 left-4 lg:static">
        <div className="flex-center h-12 w-12 rounded-full bg-white shadow-md">
          <TbShoppingBag />
        </div>
      </div>
    </nav>
  );
}
