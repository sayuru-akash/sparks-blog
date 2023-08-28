import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="bg-white min-w-screen w-screen overflow-hidden border-t border-gray-200">
        <div className="flex container flex-col mx-auto p-4 w-full md:py-8">
          <div className="flex flex-col sm:flex-row items-center w-full justify-between pb-8">
            <Link href="/" className="flex items-start w-full sm:w-fit sm:items-center mb-4 sm:mb-0">
              <span className="self-center text-3xl text-purple-600 font-bold whitespace-nowrap">
                sparks
              </span>
            </Link>
            <ul className="flex flex-col mt-6 sm:mt-0 sm:flex-row flex-wrap items-start w-full sm:w-fit sm:items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 gap-6 sm:gap-0">
              <li>
                <Link href="#" className="mr-0 hover:text-purple-600 sm:mr-6 ">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="mr-0 hover:text-purple-600 sm:mr-6">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="mr-0 hover:text-purple-600 sm:mr-6 ">
                  Licensing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-purple-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center border-t border-gray-200 pt-8 justify-center text-sm text-gray-500 text-center">
            <p className="flex items-center justify-center gap-2">
              © 2023 All Rights Reserved
            </p>
            <p className="flex items-center justify-center gap-1 mt-2">
              A proud initiative brought to you with{" "}
              <FontAwesomeIcon
                icon={faHeart}
                height={12}
                width={12}
                className="text-purple-500"
              />
              by{" "}
              <Link href="/" className="hover:text-purple-600">
                Codezela Technologies
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
