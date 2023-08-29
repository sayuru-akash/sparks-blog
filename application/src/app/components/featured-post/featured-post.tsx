import Link from "next/link";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getPostsByTag } from "@/app/ghost-client";

export default async function FeaturedPost() {
  const getTrendingPost = await getPostsByTag("trending", 1);

  if (!getTrendingPost) {
    throw new Error("Failed to load posts");
  }

  return (
    <div className="flex mx-auto px-4 py-8 justify-center items-end">
      <div
        className="flex rounded-lg shadow-md p-6 w-full h-[32rem] hover: bg-cover bg-center"
        style={{
          backgroundImage: `url(${
            getTrendingPost[0].feature_image || "/logo.png"
          })`,
        }}
      >
        <div className="flex flex-col p-0 lg:p-6 text-white gap-4 h-full justify-end">
          <div className="flex">
            <Link
              href={`/tag/${
                getTrendingPost[0].tags &&
                getTrendingPost[0].tags[0].slug &&
                getTrendingPost[0].tags[0].slug
              }`}
              className="text-white border font-mono hover:text-black hover:bg-white font-medium rounded-full text-sm px-3 py-2 text-center mr-2 mb-2"
            >
              {getTrendingPost[0].tags &&
                getTrendingPost[0].tags[0].name &&
                getTrendingPost[0].tags[0].name}
            </Link>
            <button className="text-white border font-mono hover:text-black hover:bg-white font-medium rounded-full text-sm px-3 py-2 text-center mr-2 mb-2">
              TRENDING
            </button>
          </div>
          <Link href={`/${getTrendingPost[0].slug}`}>
            <p className="text-2xl sm:text-4xl font-semibold mb-2">
              {getTrendingPost[0].title?.slice(0, 50) + "..."}
            </p>
          </Link>
          <p className="text-lg sm:text-2xl font-md mb-2">
            {getTrendingPost[0].excerpt?.slice(0, 180) + "..."}
          </p>
          <Link
            href={`/${getTrendingPost[0].slug}`}
            className="text-white hover:underline"
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
  );
}
