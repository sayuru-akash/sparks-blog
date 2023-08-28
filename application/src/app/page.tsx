import Hero from "./components/hero/hero";
import LatestPosts from "./components/latest-posts/latest-posts";
import CategoricalPosts from "./components/categorical-posts/categorical-posts";
import FeaturedPost from "./components/featured-post/featured-post";

const cat1 = "case-studies";
const cat2 = "news";

export default async function Home() {
  return (
    <>
      <main className="container mt-20 mx-auto">
        <Hero />
        <LatestPosts />
        <CategoricalPosts category={cat1} />
        <FeaturedPost />
        <CategoricalPosts category={cat2} />
      </main>
    </>
  );
}
