import Link from "next/link";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FeaturedPost() {
  return (
    <div className="flex mx-auto px-4 py-8 justify-center items-end">
      <div
        className="flex rounded-lg shadow-md p-6 w-full h-[32rem] hover: bg-cover bg-center"
        style={{
          backgroundImage:
            "url('http://127.0.0.1:2368/content/images/size/w1000/2023/08/Frame-10.png')",
        }}
      >
        <div className="flex flex-col p-0 lg:p-6 text-white gap-4 h-full justify-end">
          <div className="flex">
            <button className="text-white border font-mono hover:text-black hover:bg-white font-medium rounded-full text-sm px-3 py-2 text-center mr-2 mb-2">
              CASE STUDIES
            </button>
            <button className="text-white border font-mono hover:text-black hover:bg-white font-medium rounded-full text-sm px-3 py-2 text-center mr-2 mb-2">
              TRENDING
            </button>
          </div>
          <Link href="https://sample.com">
            <p className="text-2xl sm:text-4xl font-semibold mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
          </Link>
          <p className="text-lg sm:text-2xl font-md mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </p>
          <Link href="#" className="text-white hover:underline">
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
  );
}
