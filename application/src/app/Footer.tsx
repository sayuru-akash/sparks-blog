import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import type { NavigationItem } from "./ghost-client";

interface FooterProps {
  navLinks: NavigationItem[];
}

export default function Footer({ navLinks }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-screen border-t border-gray-200 bg-white">
      <div className="container mx-auto flex w-full flex-col p-4 md:py-8">
        <div className="flex w-full flex-col items-center justify-between pb-8 sm:flex-row">
          <Link
            href="/"
            className="mb-4 flex w-full items-start sm:w-fit sm:mb-0 sm:items-center"
          >
            <span className="whitespace-nowrap text-3xl font-bold text-purple-600">
              sparks
            </span>
          </Link>
          <nav aria-label="Footer navigation">
            <ul className="flex w-full flex-col flex-wrap items-start gap-6 text-sm font-medium text-gray-500 sm:w-fit sm:flex-row sm:items-center sm:gap-0">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.url}
                    className={`mr-0 hover:text-purple-600 sm:mr-6 ${
                      link.url === "/" && "mr-0"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex flex-col items-center justify-center border-t border-gray-200 pt-8 text-center text-sm text-gray-500">
          <p className="flex items-center justify-center gap-2">
            © {currentYear} All Rights Reserved
          </p>
          <p className="mt-2 flex flex-col items-center justify-center gap-1 sm:flex-row">
            A proud initiative
            <span className="hidden sm:flex">brought to you with</span>
            <FontAwesomeIcon
              icon={faHeart}
              height={12}
              width={12}
              className="hidden text-purple-500 sm:flex"
            />
            from{" "}
            <Link
              href="https://codezela.com"
              className="hover:text-purple-600"
            >
              Codezela Technologies
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
