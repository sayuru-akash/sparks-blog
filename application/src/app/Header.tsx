"use client";
import { faBars, faClose, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header({
  navLinks,
}: {
  navLinks: { label: string; url: string }[];
}) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();
  const normalizedPathname = pathname.endsWith("/") ? pathname : `${pathname}/`;

  // const handleSearch = () => {
  //   const searchInput = document.getElementById("search") as HTMLInputElement;
  //   const searchQuery = searchInput.value;

  //   if (!searchQuery) return;

  //   console.log(searchQuery);
  // };

  return (
    <>
      <header className="min-w-screen w-screen overflow-hidden justify-center items-center flex flex-col bg-white fixed z-20 top-0 left-0 border-b border-gray-200">
        <div className="flex container items-center justify-between mx-auto p-4 w-full">
          <Link href="/" className="flex items-center">
            <span className="self-center text-3xl text-purple-600 font-bold whitespace-nowrap">
              sparks
            </span>
          </Link>
          <div className="lg:flex hidden w-full justify-center items-center">
            <div
              className="flex items-center justify-between w-full"
              id="navbar-desktop"
            >
              <ul className="flex flex-col w-full mt-8 justify-center font-light items-center border rounded-lg lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0 lg:bg-white">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.url}
                      className={`block py-2 pl-3 pr-4 ${
                        link.url === "/"
                          ? "text-gray-900 font-semibold"
                          : "text-gray-900"
                      } rounded ${
                        link.url !== "/" && "hover:bg-gray-100"
                      } lg:bg-transparent lg:p-0 ${
                        link.url !== "/" &&
                        "lg:hover:bg-transparent lg:hover:text-purple-700"
                      } ${
                        normalizedPathname === link.url ? "text-purple-700" : ""
                      }`}
                      aria-current={link.url === "/" ? "page" : undefined}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="hidden lg:flex w-44 -ml-44 items-center justify-end">
              {/* <FontAwesomeIcon
                icon={faSearch}
                height={16}
                width={16}
                className="text-purple-700 mr-8 h-4 w-4"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              /> */}
              <Link
                href="https://codezela.com/contact"
                className="w-fit min-w-max h-10 justify-center items-center flex text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-3xl text-sm px-4 py-2 text-center"
              >
                &nbsp;Let&rsquo;s Talk&nbsp;
              </Link>
            </div>
          </div>
          <div className="flex w-full lg:hidden">
            <div className="flex w-full justify-end align-middle">
              {/* <FontAwesomeIcon
                icon={faSearch}
                height={16}
                width={30}
                className="text-purple-700 mr-8"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              /> */}
              <FontAwesomeIcon
                icon={isNavOpen ? faClose : faBars}
                height={24}
                width={24}
                data-collapse-toggle="navbar-mobile"
                aria-expanded={isNavOpen}
                onClick={() => setIsNavOpen(!isNavOpen)}
                aria-controls="navbar-mobile"
                className="inline-flex p-2 text-lg text-black lg:hidden"
              />
            </div>
          </div>
        </div>
        <div
          className={`flex container items-start justify-between w-full h-screen lg:hidden ${
            isNavOpen ? "" : "hidden"
          }`}
          id="navbar-mobile"
        >
          <ul className="flex container flex-col w-full mt-8 font-medium mx-4 lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0 lg:bg-white">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.url}
                  className={`block py-8 pl-4 text-lg pr-4 ${
                    link.url === "/"
                      ? "text-white bg-purple-700"
                      : "text-gray-900"
                  } rounded ${
                    link.url !== "/" && "hover:bg-gray-100"
                  } lg:bg-transparent lg:p-0 ${
                    link.url !== "/" &&
                    "lg:hover:bg-transparent lg:hover:text-purple-700"
                  }`}
                  aria-current={link.url === "/" ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </header>
      {/* <div
        className={`fixed w-screen h-screen inset-0 z-50 overflow-hidden ${
          isSearchOpen ? "flex" : "hidden"
        }`}
      >
        <div className="absolute w-screen h-screen inset-0 overflow-hidden">
          <div
            className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            aria-hidden="true"
          ></div>
          <section
            className="absolute inset-y-0 right-0 pl-10 flex"
            onClick={(e) => {
              const clickTarget = e.target as HTMLElement;
              const isInputField = clickTarget.tagName === "INPUT";
              const isSearchIcon =
                clickTarget.tagName === "BUTTON" &&
                clickTarget.contains(
                  document.querySelector(".fa-search") as HTMLElement
                );

              if (!isInputField && !isSearchIcon) {
                setIsSearchOpen(!isSearchOpen);
              }
            }}
          >
            <div className="relative w-screen">
              <div className="h-full flex flex-col py-4 bg-white bg-opacity-10 backdrop-blur-sm shadow-xl overflow-y-scroll">
                <div className="px-4 md:px-40">
                  <div className="flex items-end justify-end">
                    <div className="flex items-center text-black">
                      <button
                        type="button"
                        className="bg-white bg-opacity-90 rounded-md text-gray-600 hover:text-purple-700 focus:ring-2 focus:ring-purple-500"
                        onClick={() => setIsSearchOpen(!isSearchOpen)}
                      >
                        <span className="sr-only">Close panel</span>
                        <FontAwesomeIcon
                          icon={faClose}
                          height={36}
                          width={36}
                          className="h-5 w-5 p-3"
                        />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="mt-6 relative flex-1 px-4 sm:px-6">
                  <div className="absolute inset-0 px-4 sm:px-6">
                    <div className="h-full" aria-hidden="true">
                      <div className="flex items-center justify-center h-full md:px-36">
                        <input
                          type="text"
                          name="search"
                          id="search"
                          placeholder="bring your search to life..."
                          className={`px-4 font-semibold py-2 h-20 border-0 text-purple-700 text-lg shadow-xs rounded-l-md bg-white w-full`}
                        ></input>
                        <button
                          type="button"
                          className="bg-white h-20 rounded-r-md w-16 text-purple-400 hover:text-purple-700 border-l"
                          onClick={handleSearch}
                        >
                          <FontAwesomeIcon
                            icon={faSearch}
                            height={24}
                            width={24}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div> */}
    </>
  );
}
