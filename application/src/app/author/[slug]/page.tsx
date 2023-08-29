import { getPostsByAuthor } from "@/app/ghost-client";
import Pagination from "@/app/pagination";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function AuthorSingle({
  params,
}: {
  params: { slug: string };
}) {
  const postPerPage = 6;
  const getPost = await getPostsByAuthor(params.slug, postPerPage);

  if (!getPost || getPost.length === 0) {
    return notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div
        className="bg-white rounded-xl z-0 -mb-24 lg:-mb-48 shadow-md p-6 h-48 lg:h-96 mt-16 bg-cover bg-top"
        style={{
          backgroundImage: `url(${
            getPost[0].primary_author?.cover_image ||
            getPost[0].primary_author?.cover_image ||
            "/logo.png"
          })`,
        }}
      ></div>
      <div className="flex flex-col p-6 z-80 mx-8 lg:mx-44 mb-16 bg-white h-full text-white gap-4 sm:gap-8 text-center items-center border rounded-lg justify-center shadow-lg">
        <div className="flex flex-col items-center py-2">
          <p className="mb-1 text-sm font-medium text-gray-600">
            Read all posts by:
          </p>
          <Image
            className="w-24 h-24 mt-6 mb-2 rounded-full shadow-lg"
            src={
              `${
                getPost &&
                getPost[0].primary_author &&
                getPost[0].primary_author.profile_image
              }` || "/logo.png"
            }
            alt="Author image"
            height={400}
            width={400}
          />
          <h1 className="mb-1 text-xl font-medium text-gray-900">
            {getPost[0].primary_author?.name}
          </h1>
          <span className="text-sm text-gray-500">
            {getPost[0].primary_author?.bio?.slice(0, 100)}
          </span>
          <div className="w-full flex mt-4 space-x-3 md:mt-6 justify-center items-center">
            <Link
              href={`${
                (getPost &&
                  getPost[0].primary_author &&
                  getPost[0].primary_author.website !== null &&
                  getPost[0].primary_author.website) ||
                "https://codezela.com/contact"
              }`}
              className="w-full inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300"
            >
              Contact
            </Link>
          </div>
        </div>
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
        currentUrl={`./author/${params.slug}`}
      />
    </div>
  );
}
