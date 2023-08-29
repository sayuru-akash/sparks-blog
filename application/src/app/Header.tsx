"use client";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
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
  const pathname = usePathname();
  const normalizedPathname = pathname.endsWith("/") ? pathname : `${pathname}/`;

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
            <Link
              href="https://codezela.com/contact"
              className="hidden w-28 h-10 justify-center items-center lg:flex text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-3xl text-sm px-4 py-2 text-center"
            >
              Let&rsquo;s Talk
            </Link>
          </div>
          <div className="flex w-full lg:hidden">
            <button
              data-collapse-toggle="navbar-mobile"
              type="button"
              className="inline-flex items-center p-2 text-lg justify-end w-full text-black lg:hidden"
              aria-controls="navbar-mobile"
              aria-expanded={isNavOpen}
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              <FontAwesomeIcon
                icon={isNavOpen ? faClose : faBars}
                height={24}
                width={24}
              />
            </button>
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
    </>
  );
}
