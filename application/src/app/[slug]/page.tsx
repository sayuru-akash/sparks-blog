import { notFound } from "next/navigation";
import { getPostBySlug } from "../ghost-client";
import Link from "next/link";

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
      <div className="flex flex-col p-6 text-white dark:text-black gap-4 sm:gap-8 h-full text-center items-center">
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
    </div>
  );
}
