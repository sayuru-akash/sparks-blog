import { getFeaturedPosts } from "@/app/ghost-client";
import Link from "next/link";

export default async function Hero() {
  const getFeaturedPost = await getFeaturedPosts(3);

  if (!getFeaturedPost) {
    throw new Error("Failed to load posts");
  }

  return (
    <div className="mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4 w-full justify-start items-start">
        <div
          className="col-span-1 lg:col-span-2 bg-white rounded-lg shadow-md w-full relative h-96 bg-cover bg-center"
          style={{
            backgroundImage: `url(${
              getFeaturedPost[0].feature_image || "/logo.png"
            })`,
          }}
        >
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <Link
              href={`/tag/${
                getFeaturedPost[0].tags &&
                getFeaturedPost[0].tags[0].slug &&
                getFeaturedPost[0].tags[0].slug
              }`}
              className="text-white border-2 hover:text-black hover:bg-white font-mono rounded-full text-xs uppercase px-3 py-2 text-center mr-2"
            >
              {getFeaturedPost[0].tags &&
                getFeaturedPost[0].tags[0].name &&
                getFeaturedPost[0].tags[0].name}
            </Link>
            <Link
              className="flex justify-start w-full items-start"
              href={`/${getFeaturedPost[0].slug}`}
            >
              <p className="text-2xl md:text-3xl font-primary font-semibold my-4">
                {getFeaturedPost[0].title?.slice(0, 30) + "..."}
              </p>
            </Link>
            <Link
              className="flex justify-start w-full items-start"
              href={`/${getFeaturedPost[0].slug}`}
            >
              <p className="text-lg font-md mb-2">
                {getFeaturedPost[0].excerpt?.slice(0, 80) + "..."}
              </p>
            </Link>
          </div>
        </div>
        <div
          className="bg-white rounded-lg shadow-md px-4 py-8 w-full relative h-96 bg-cover bg-center"
          style={{
            backgroundImage: `url(${
              getFeaturedPost[1].feature_image || "/logo.png"
            })`,
          }}
        >
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <Link
              href={`/tag/${
                getFeaturedPost[1].tags &&
                getFeaturedPost[1].tags[0].slug &&
                getFeaturedPost[1].tags[0].slug
              }`}
              className="text-white border-2 border-white hover:text-black hover:bg-white font-mono rounded-full text-xs uppercase px-3 py-2 text-center mr-2"
            >
              {getFeaturedPost[1].tags &&
                getFeaturedPost[1].tags[0].name &&
                getFeaturedPost[1].tags[0].name}
            </Link>
            <Link
              className="flex justify-start w-full items-start"
              href={`/${getFeaturedPost[1].slug}`}
            >
              <p className="text-2xl md:text-3xl lg:text-2xl font-primary font-semibold my-4">
                {getFeaturedPost[1].title?.slice(0, 30) + "..."}
              </p>
            </Link>
            <Link
              className="flex justify-start w-full items-start"
              href={`/${getFeaturedPost[1].slug}`}
            >
              <p className="text-lg font-md mb-2">
                {getFeaturedPost[1].excerpt?.slice(0, 80) + "..."}
              </p>
            </Link>
          </div>
        </div>
        <div
          className="bg-white rounded-lg shadow-md px-4 py-8 relative h-96 w-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${
              getFeaturedPost[2].feature_image || "/logo.png"
            })`,
          }}
        >
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <Link
              href={`/tag/${
                getFeaturedPost[2].tags &&
                getFeaturedPost[2].tags[0].slug &&
                getFeaturedPost[2].tags[0].slug
              }`}
              className="text-white border-2 border-white hover:text-black hover:bg-white font-mono rounded-full text-xs uppercase px-3 py-2 text-center mr-2"
            >
              {getFeaturedPost[2].tags &&
                getFeaturedPost[2].tags[0].name &&
                getFeaturedPost[2].tags[0].name}
            </Link>
            <Link
              className="flex justify-start w-full items-start"
              href={`/${getFeaturedPost[2].slug}`}
            >
              <p className="text-2xl md:text-3xl lg:text-2xl font-primary font-semibold my-4">
                {getFeaturedPost[2].title?.slice(0, 30) + "..."}
              </p>
            </Link>
            <Link
              className="flex justify-start w-full items-start"
              href={`/${getFeaturedPost[2].slug}`}
            >
              <p className="text-lg font-md mb-2">
                {getFeaturedPost[2].excerpt?.slice(0, 80) + "..."}
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
