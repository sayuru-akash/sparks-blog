import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { getPostsByTag } from "@/app/ghost-client";

export default async function CategoricalPosts(props: { category: string }) {
  const getCategoryPost = await getPostsByTag(props.category, 6);

  if (!getCategoryPost) {
    throw new Error("Failed to load posts");
  }

  return (
    <div className="mx-auto px-4 py-8">
      <div className="flex flex-row justify-between items-start gap-2">
        <h2 className="text-4xl font-extrabold leading-none capitalize tracking-tight text-gray-900 md:text-3xl lg:text-4xl mb-2 sm:mb-0">
          {props.category.replace(/-/g, " ")}
        </h2>
        <Link
          href="https://sample.com"
          className="flex text-black border border-black hover:text-white hover:bg-black font-medium rounded-full text-sm px-3 py-2 text-center mr-2 mb-2 sm:mr-0 sm:mb-0"
        >
          Read More
        </Link>
      </div>
      <div className="flex flex-col flex-wrap sm:flex-row mt-14 w-full ml-0 sm:-ml-8">
        {getCategoryPost?.map((item) => {
          return (
            <div
              className="w-full sm:w-1/2 lg:w-1/3 pl-0 sm:pl-8"
              key={item.id}
            >
              <div className="min-h-full">
                <Link href={`/${item.slug}`}>
                  <Image
                    className="rounded-2xl w-full h-80 object-cover"
                    src={item.feature_image || "/logo.png"}
                    alt="frame"
                    height={1200}
                    width={1200}
                  />
                </Link>
                <div className="py-5 px-2 space-y-4">
                  <Link href={`/${item.slug}`}>
                    <span className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                      {item.title?.slice(0, 50)}
                    </span>
                  </Link>
                  <p className="pb-4 font-normal text-gray-700">
                    {item.excerpt?.slice(0, 160) + "..."}
                  </p>
                  <Link
                    href={`/${item.slug}`}
                    className="text-sm text-black hover:underline"
                  >
                    <p className="flex mb-8">
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
        })}
      </div>
    </div>
  );
}
