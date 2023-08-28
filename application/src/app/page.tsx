import Hero from "./components/hero/hero";
import LatestPosts from "./components/latest-posts/latest-posts";
import CategoricalPosts from "./components/categorical-posts/categorical-posts";
import FeaturedPost from "./components/featured-post/featured-post";

export default async function Home() {
  return (
    <>
      <main className="container mt-20 mx-auto">
        <Hero />
        <LatestPosts />
        <CategoricalPosts />
        <FeaturedPost />
        <CategoricalPosts />
      </main>
    </>
  );
}
