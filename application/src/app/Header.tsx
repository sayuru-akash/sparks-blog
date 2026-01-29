"use client";

import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import type { NavigationItem } from "./ghost-client";

interface HeaderProps {
  navLinks: NavigationItem[];
}

export default function Header({ navLinks }: HeaderProps) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const pathname = usePathname();
  const normalizedPathname = pathname.endsWith("/") ? pathname : `${pathname}/`;

  const toggleNav = useCallback(() => {
    setIsNavOpen((prev) => !prev);
  }, []);

  const closeNav = useCallback(() => {
    setIsNavOpen(false);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 z-20 w-screen border-b border-gray-200 bg-white">
        <div className="container mx-auto flex w-full items-center justify-between p-4">
          <Link href="/" className="flex items-center">
            <span className="text-3xl font-bold text-purple-600 whitespace-nowrap">
              sparks
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden w-full justify-center items-center lg:flex">
            <nav aria-label="Main navigation">
              <ul className="flex flex-col items-center justify-center w-full mt-8 font-light border rounded-lg lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0 lg:bg-white">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.url}
                      className={`block py-2 pl-3 pr-4 rounded ${
                        link.url === "/"
                          ? "text-gray-900 font-semibold"
                          : "text-gray-900"
                      } ${
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
            </nav>

            <div className="hidden lg:flex w-44 -ml-44 items-center justify-end">
              <Link
                href="https://codezela.com/contact"
                className="inline-flex h-10 w-fit min-w-max items-center justify-center rounded-3xl bg-purple-700 px-4 py-2 text-sm font-medium text-white hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300"
              >
                Let's Talk
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex w-full lg:hidden">
            <div className="flex w-full justify-end">
              <button
                type="button"
                data-collapse-toggle="navbar-mobile"
                aria-expanded={isNavOpen}
                aria-controls="navbar-mobile"
                onClick={toggleNav}
                className="inline-flex p-2 text-lg text-black lg:hidden"
                aria-label="Toggle navigation"
              >
                <FontAwesomeIcon
                  icon={isNavOpen ? faClose : faBars}
                  className="h-6 w-6"
                  height={24}
                  width={24}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`container mx-auto flex w-full items-start justify-between h-screen lg:hidden ${
            isNavOpen ? "" : "hidden"
          }`}
          id="navbar-mobile"
        >
          <nav aria-label="Mobile navigation">
            <ul className="container mx-4 flex w-full flex-col mt-8 font-medium lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0 lg:bg-white">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.url}
                    onClick={closeNav}
                    className={`block py-8 pl-4 pr-4 text-lg rounded ${
                      link.url === "/"
                        ? "text-white bg-purple-700"
                        : "text-gray-900"
                    } ${
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
          </nav>
        </div>
      </header>
      {/* Spacer for fixed header */}
      <div className="h-20" />
    </>
  );
}
