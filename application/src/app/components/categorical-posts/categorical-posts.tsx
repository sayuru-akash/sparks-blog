import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

export default function CategoricalPosts() {
  return (
    <div className="mx-auto px-4 py-8">
      <div className="flex flex-row justify-between items-start gap-2">
        <h2 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl mb-2 sm:mb-0">
          Case Studies
        </h2>
        <Link
          href="https://sample.com"
          className="flex text-black border border-black hover:text-white hover:bg-black font-medium rounded-full text-sm px-3 py-2 text-center mr-2 mb-2 sm:mr-0 sm:mb-0"
        >
          Read More
        </Link>
      </div>
      <div className="flex flex-col sm:flex-row gap-8 lg:gap-6 mt-14 w-full">
        <div className="w-full sm:w-1/2 lg:w-1/3">
          <div className="min-h-full">
            <Link href={"https://sample.com"}>
              <Image
                className="rounded-2xl w-full h-80 object-cover"
                src="http://127.0.0.1:2368/content/images/size/w1000/2023/08/Frame-10.png"
                alt="frame"
                height={1200}
                width={1200}
              />
            </Link>
            <div className="py-5 px-2 space-y-4">
              <Link href={"https://sample.com"}>
                <span className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  This is a post in the baking, please wait for it to be ready.
                </span>
              </Link>
              <p className="pb-4 font-normal text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Link
                href={"https://sample.com"}
                className="text-sm text-black hover:underline"
              >
                <p className="flex">
                  Read more
                  <FontAwesomeIcon
                    icon={faAngleDoubleRight}
                    height={12}
                    width={12}
                    className="ml-1 mt-1"
                    bounce
                  />
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
