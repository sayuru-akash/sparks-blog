import { getPosts } from "./ghost-client";
import Card from "./components/card/card";
import Hero from "./components/hero/hero";
import LatestPosts from "./components/latest-posts/latest-posts";
import CategoricalPosts from "./components/categorical-posts/categorical-posts";
import FeaturedPost from "./components/featured-post/featured-post";

export default async function Home() {
  const getPost = await getPosts();

  if (!getPost) {
    throw new Error("Failed to load posts");
  }

  return (
    <>
      <main className="container my-12 mx-auto">
        <Hero />
        <LatestPosts />
        <CategoricalPosts />
        <FeaturedPost />
        <CategoricalPosts />
        <div>
          {getPost?.map((item) => {
            return <Card key={item.uuid} item={item} />;
          })}
        </div>
      </main>
    </>
  );
}
