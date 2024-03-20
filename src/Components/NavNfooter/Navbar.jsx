import React from "react";
import { RiSearch2Line } from "react-icons/ri";
import { LuShoppingBag, LuUser } from "react-icons/lu";
const Navbar = () => {
  return (
    <nav>
      <div class="max-w-screen-xl flex flex-wrap items-center mx-auto p-4 gap-[20%]">
        <a
          href="/"
          class="self-center flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span class="font-serif font-bold text-4xl first-letter:text-[#f71000]">
            Laziza
          </span>
        </a>
        <div
          class="items-center self-center  justify-between hidden w-full md:flex md:w-auto md:order-1 gap-32"
          id="navbar-cta"
        >
          <ul class="flex flex-col font-medium   md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-2">
            <li>
              <a
                href="/"
                class="block py-2 px-3 md:p-0 rounded md:bg-transparent]"
                aria-current="page"
              >
                Menu
              </a>
            </li>
            <li>
              <a
                href="/"
                class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent "
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/"
                class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent "
              >
                Our Specials
              </a>
            </li>
            <li>
              <a
                href="/"
                class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent "
              >
                Our Location
              </a>
            </li>
            <li>
              <a
                href="/"
                class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent "
              >
                Our Chefs
              </a>
            </li>
          </ul>
          <div className="flex gap-8 items-center md:mt-2">
            <RiSearch2Line size={18} cursor="pointer" />
            <LuShoppingBag size={18} cursor="pointer" />
            <LuUser size={18} cursor="pointer" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
