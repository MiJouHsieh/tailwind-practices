import NikeLogo from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";

const ROUTES = ["Home","About","Services","Pricing","Contact"]
export function Nav() {
  return (
    <nav className="flex flex-wrap justify-between items-center">
      <a href="#">
        <NikeLogo className="h-20 w-20" />
      </a>
      <button className="hover:bg-gray-100 p-2 focus:ring-2 focus:ring-gray-200 rounded-lg">
        <RxHamburgerMenu size={25} />
      </button>
      <div className="w-full ">
        <ul className="bg-gray-50 border border-gray-100 text-lg rounded-lg p-4">
          {ROUTES.map((route, i) => {
            return (
              <li className={`rounded px-3 py-2 cursor-pointer ${i===0 ? "bg-blue-500 text-white" : "hover:bg-gray-100"}`} key={route}>
                {route}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
