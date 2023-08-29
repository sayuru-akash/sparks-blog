import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { getPosts } from "@/app/ghost-client";
import NewsletterForm from "./newsletter-form";

export default async function LatestPosts() {
  const getPost = await getPosts(3);

  if (!getPost) {
    throw new Error("Failed to load posts");
  }

  return (
    <div className="mx-auto px-4 py-8">
      <div className="flex flex-row justify-between items-start gap-2">
        <h2 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl mb-2 sm:mb-0">
          Latest Posts
        </h2>
        <Link
          href="/tag/all/"
          className="flex border text-black border-black hover:text-white hover:bg-black font-medium rounded-full text-sm px-3 py-2 text-center mr-2 mb-2 sm:mr-0 sm:mb-0"
        >
          Read All Posts
        </Link>
      </div>
      <div className="w-full flex flex-col lg:flex-row mt-14 gap-8 lg:gap-12">
        <div className="w-full lg:w-2/3 flex flex-col gap-8 lg:gap-6">
          {getPost?.map((item) => {
            return (
              <div className="flex flex-col gap-6" key={item.id}>
                <Link href={`/${item.slug}`}>
                  <div className="h-96 md:h-48 flex flex-col items-center bg-white rounded-lg shadow md:flex-row hover:bg-gray-100">
                    <Image
                      className="object-cover w-full md:w-48 h-48 rounded-lg md:rounded-none md:rounded-l-lg"
                      src={item.feature_image || "/logo.png"}
                      alt="frame"
                      height={800}
                      width={800}
                    />
                    <div className="flex flex-col justify-center p-4 py-6 h-full">
                      <p className="mb-2 text-2xl font-bold text-gray-900">
                        {item.title?.slice(0, 50)}
                      </p>
                      <p className="mb-3 text-sm text-gray-700">
                        {item.excerpt?.slice(0, 160) + "..."}
                      </p>
                      <p className="flex text-sm text-black">
                        Read more
                        <FontAwesomeIcon
                          icon={faAngleDoubleRight}
                          height={12}
                          width={12}
                          className="ml-1 mt-1"
                          bounce
                        />
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
        <div className="w-full lg:w-1/3 flex flex-col">
          <div className="bg-white border flex flex-col align-middle items-center justify-evenly border-gray-200 rounded-2xl shadow p-12 text-center h-full w-full">
            <Link href="https://codezela.com">
              <Image
                src={"/logo.png"}
                width={300}
                height={300}
                alt="logo codezela"
                className="w-20 h-20 object-contain mx-auto"
              />
            </Link>
            <NewsletterForm />
          </div>
        </div>
      </div>
    </div>
  );
}
