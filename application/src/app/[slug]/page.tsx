import { notFound } from "next/navigation";
import { getPostBySlug } from "../ghost-client";
import Link from "next/link";
import Image from "next/image";

export default async function PostSingle({
  params,
}: {
  params: { slug: string };
}) {
  const getPost = await getPostBySlug(params.slug);

  if (!getPost) {
    return notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div
        className="bg-white rounded-xl shadow-md p-6 relative h-48 lg:h-96 mt-16 bg-cover bg-top"
        style={{
          backgroundImage: `url(${getPost.feature_image || "/logo.png"})`,
        }}
      >
        <div className="flex flex-col items-center text-white h-full justify-end">
          <div className="flex">
            <p className="text-black font-mono text-sm bg-white bg-opacity-50 font-medium rounded-full px-12 py-2 text-center">
              Published On:{" "}
              {getPost.published_at
                ? new Date(getPost.published_at).toLocaleDateString("en-GB")
                : ""}
              {/* &nbsp; · &nbsp;
              <span>
                Read: {getPost.reading_time && getPost.reading_time}min
              </span> */}
            </p>
          </div>
        </div>
      </div>
      <div className="flex text-black flex-col p-6 gap-4 sm:gap-8 h-full text-center items-center">
        <Link
          href={
            (getPost.primary_tag &&
              getPost.primary_tag.slug &&
              `/tag/${getPost.primary_tag.slug}`) ||
            ""
          }
          className="text-black border border-purple-600/50 hover:text-white hover:bg-purple-600 font-light rounded-full text-xs sm:text-sm px-3 py-2 text-center"
        >
          {getPost.primary_tag &&
            getPost.primary_tag.name &&
            getPost.primary_tag.name}
        </Link>
        <p className="text-2xl sm:text-4xl font-semibold mb-2 p-0 lg:px-48">
          {getPost.title}
        </p>
        <div className="text-md sm:text-lg mb-2 text-justify p-0 lg:px-52">
          {getPost.html && (
            <div dangerouslySetInnerHTML={{ __html: getPost.html }} />
          )}
        </div>
      </div>
      <div className="flex flex-col p-6 mb-16 text-white gap-4 sm:gap-8 h-full text-center items-center border rounded-lg justify-center shadow-sm">
        <div className="flex flex-col items-center py-2">
          <h6 className="mb-1 text-sm font-medium text-gray-600">
            Brought to you by:
          </h6>
          <Image
            className="w-24 h-24 mt-6 mb-2 rounded-full shadow-lg"
            src={
              `${
                getPost &&
                getPost.primary_author &&
                getPost.primary_author.profile_image
              }` || "/logo.png"
            }
            alt="Author image"
            height={400}
            width={400}
          />
          <h6 className="mb-1 text-xl font-medium text-gray-900">
            {getPost.primary_author?.name}
          </h6>
          <span className="text-sm text-gray-500">
            {getPost.primary_author?.bio?.slice(0, 100)}
          </span>
          <div className="flex mt-4 space-x-3 md:mt-6">
            <Link
              href={`/author/${
                getPost && getPost.primary_author && getPost.primary_author.slug
              }`}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300"
            >
              Read more from{" "}
              {getPost &&
                getPost.primary_author &&
                getPost.primary_author.name?.slice(0, 10)}
            </Link>
            <Link
              href={`${
                (getPost &&
                  getPost.primary_author &&
                  getPost.primary_author.website !== null &&
                  getPost.primary_author.website) ||
                "https://codezela.com/contact"
              }`}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
