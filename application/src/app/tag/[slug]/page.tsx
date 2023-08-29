import { getPostsByTag, getPosts, getFeaturedPosts } from "@/app/ghost-client";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/pagination";
import { notFound } from "next/navigation";

export default async function PostsbyTag({
  params,
}: {
  params: { slug: string };
}) {
  let getPost = null;
  let pageTitle: string;
  const postPerPage = 12;

  if (params.slug === "all") {
    getPost = await getPosts(postPerPage);
    pageTitle = "All Posts";
  } else if (params.slug === "featured") {
    getPost = await getFeaturedPosts(postPerPage);
    pageTitle = "Featured Posts";
  } else {
    getPost = await getPostsByTag(params.slug, postPerPage);
    pageTitle = params.slug.replace(/-/g, " ");
  }

  if (!getPost || getPost.length === 0) {
    return notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-row justify-between items-start gap-2 mt-24">
        <h1 className="text-4xl font-extrabold leading-none capitalize tracking-tight text-gray-900 md:text-3xl lg:text-4xl mb-2 sm:mb-0">
          {pageTitle}
        </h1>
      </div>
      <div className="flex flex-col flex-wrap sm:flex-row mt-14 w-full ml-0 sm:-ml-8">
        {getPost?.map((item) => {
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
      <Pagination
        item={getPost.meta.pagination}
        currentUrl={`./tag/${params.slug}`}
      />
    </div>
  );
}
