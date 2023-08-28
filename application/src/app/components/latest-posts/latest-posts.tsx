import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleRight,
  faHandPointRight,
} from "@fortawesome/free-solid-svg-icons";

export default function LatestPosts() {
  return (
    <div className="mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
        <h2 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl text-dark mb-2 sm:mb-0">
          Latest Posts
        </h2>
        <Link
          href="https://sample.com"
          className="flex border text-black border-black hover:text-white hover:bg-black font-medium rounded-full text-sm px-3 py-2 text-center mr-2 mb-2 sm:mr-0 sm:mb-0"
        >
          Read All Posts
        </Link>
      </div>
      <div className="w-full flex flex-col lg:flex-row mt-14 gap-12">
        <div className="w-full lg:w-2/3 flex flex-col gap-6">
          <div className="flex flex-col gap-6">
            <div className="h-96 md:h-48 flex flex-col items-center bg-white rounded-lg shadow md:flex-row hover:bg-gray-100">
              <>
                <Image
                  className="object-cover w-full md:w-48 h-48 rounded-lg md:rounded-none md:rounded-l-lg"
                  src="http://127.0.0.1:2368/content/images/size/w1000/2023/08/Frame-10.png"
                  alt="frame"
                  height={800}
                  width={800}
                />
                <div className="flex flex-col justify-center p-4 py-6 h-full">
                  <p className="mb-2 text-2xl font-bold text-gray-900">
                    This is a title
                  </p>
                  <p className="mb-3 text-sm text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <Link
                    href="https://sample.com"
                    className="text-sm text-black hover:underline"
                  >
                    <p className="flex">
                      Read more
                      <FontAwesomeIcon
                        icon={faAngleDoubleRight}
                        height={12}
                        width={12}
                        className="ml-1 mt-1"
                      />
                    </p>
                  </Link>
                </div>
              </>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="h-96 md:h-48 flex flex-col items-center bg-white rounded-lg shadow md:flex-row hover:bg-gray-100">
              <Image
                className="object-cover w-full md:w-48 h-48 rounded-lg md:rounded-none md:rounded-l-lg"
                src="http://127.0.0.1:2368/content/images/size/w1000/2023/08/Frame-10.png"
                alt="frame"
                height={800}
                width={800}
              />
              <div className="flex flex-col justify-between p-4 py-6 h-full">
                <p className="mb-2 text-2xl font-bold text-gray-900">
                  This is a title
                </p>
                <p className="mb-3 text-sm text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Link
                  href="https://sample.com"
                  className="text-sm text-black hover:underline"
                >
                  <p className="flex">
                    Read more
                    <FontAwesomeIcon
                      icon={faAngleDoubleRight}
                      height={12}
                      width={12}
                      className="ml-1 mt-1"
                    />
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="h-96 md:h-48 flex flex-col items-center bg-white rounded-lg shadow md:flex-row hover:bg-gray-100">
              <Image
                className="object-cover w-full md:w-48 h-48 rounded-lg md:rounded-none md:rounded-l-lg"
                src="http://127.0.0.1:2368/content/images/size/w1000/2023/08/Frame-10.png"
                alt="frame"
                height={800}
                width={800}
              />
              <div className="flex flex-col justify-between p-4 py-6 h-full">
                <p className="mb-2 text-2xl font-bold text-gray-900">
                  This is a title
                </p>
                <p className="mb-3 text-sm text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Link
                  href="https://sample.com"
                  className="text-sm text-black hover:underline"
                >
                  <p className="flex">
                    Read more
                    <FontAwesomeIcon
                      icon={faAngleDoubleRight}
                      height={12}
                      width={12}
                      className="ml-1 mt-1"
                    />
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/3 flex flex-col">
          <div className="bg-white border flex flex-col align-middle items-center justify-evenly border-gray-200 rounded-2xl shadow p-12 text-center h-full w-full">
            <Link href="https://sample.com">
              <Image
                src={"/logo.png"}
                width={300}
                height={300}
                alt="logo codezela"
                className="w-20 h-20 object-contain mx-auto"
              />
            </Link>
            <form className="space-y-8">
              <span className="text-xl font-medium text-gray-900 text-center">
                Subscribe to our <br />
                <span className="font-bold text-purple-500">NEWSLETTER</span>
              </span>
              <p className="text-md font-sm text-gray-900 text-center">
                Join the{" "}
                <span className="text-purple-500 font-semibold">
                  #CodezelaCommunity
                </span>{" "}
                and stay ahead of the curve with our newsletter on what we do,
                global tech news, and trends.
              </p>
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email Address"
                  className="text-center text-purple-600 bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full flex justify-center text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Subscribe for Free
                <FontAwesomeIcon
                  icon={faHandPointRight}
                  height={12}
                  width={12}
                  className="ml-2 mt-1"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
