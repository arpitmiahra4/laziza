import React from "react";

const Footer = () => {
  return (
    <footer className="flex p-10 gap-20 bg-red-200 mt-10 justify-around">
      <aside>
        <a
          href="/"
          class="self-center flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span class="font-serif font-bold text-6xl first-letter:text-[#f71000]">
            Laziza
          </span>
        </a>
        <p className=" mt-2 text-gray-500">
          ACME Industries Ltd.
          <br />
          Providing reliable tech since 1992
        </p>
      </aside>
      <nav className="flex flex-col">
        <h6 className="font-bold text-black">Services</h6>
        <a href="/" className=" mt-2 text-gray-500">
          Branding
        </a>
        <a href="/" className=" mt-2 text-gray-500">
          Design
        </a>
        <a href="/" className=" mt-2 text-gray-500">
          Marketing
        </a>
        <a href="/" className=" mt-2 text-gray-500">
          Advertisement
        </a>
      </nav>
      <nav className="flex flex-col">
        <h6 className="font-bold text-black">Company</h6>
        <a href="/" className=" mt-2 text-gray-500">
          About us
        </a>
        <a href="/" className=" mt-2 text-gray-500">
          Contact
        </a>
        <a href="/" className=" mt-2 text-gray-500">
          Jobs
        </a>
        <a href="/" className=" mt-2 text-gray-500">
          Press kit
        </a>
      </nav>
      <nav className="flex flex-col">
        <h6 className="font-bold text-black">Legal</h6>
        <a href="/" className=" mt-2 text-gray-500">
          Terms of use
        </a>
        <a href="/" className=" mt-2 text-gray-500">
          Privacy policy
        </a>
        <a href="/" className=" mt-2 text-gray-500">
          Cookie policy
        </a>
      </nav>
      <nav className="flex flex-col">
        <h6 className="font-bold text-black">Company</h6>
        <a href="/" className=" mt-2 text-gray-500">
          About us
        </a>
        <a href="/" className=" mt-2 text-gray-500">
          Contact
        </a>
        <a href="/" className=" mt-2 text-gray-500">
          Jobs
        </a>
        <a href="/" className=" mt-2 text-gray-500">
          Press kit
        </a>
      </nav>
      <nav className="flex flex-col">
        <h6 className="font-bold text-black">Legal</h6>
        <a href="/" className=" mt-2 text-gray-500">
          Terms of use
        </a>
        <a href="/" className=" mt-2 text-gray-500">
          Privacy policy
        </a>
        <a href="/" className=" mt-2 text-gray-500">
          Cookie policy
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
