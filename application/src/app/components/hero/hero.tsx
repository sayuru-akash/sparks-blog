import { getFeaturedPosts } from "@/app/ghost-client";
import Image from "next/image";
import Link from "next/link";
import type { PostOrPage } from "@tryghost/content-api";

interface HeroCardProps {
  post: PostOrPage;
  isLarge?: boolean;
}

function HeroCard({ post, isLarge = false }: HeroCardProps) {
  const tagSlug = post.tags?.[0]?.slug;
  const tagName = post.tags?.[0]?.name;
  const imageUrl = post.feature_image || "/logo.png";
  const title = post.title?.slice(0, 30) + "...";
  const excerpt = post.excerpt?.slice(0, 80) + "...";

  return (
    <div className={`relative h-96 w-full overflow-hidden rounded-lg shadow-md ${isLarge ? "lg:col-span-2" : ""}`}>
      <Image
        src={imageUrl}
        alt={post.feature_image_alt || post.title || "Featured post"}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        priority={isLarge}
      />
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6">
        {tagSlug && (
          <Link
            href={`/tag/${tagSlug}`}
            className="mb-4 inline-block border-2 border-white px-3 py-2 font-mono text-xs uppercase text-white transition-colors hover:bg-white hover:text-black"
          >
            {tagName}
          </Link>
        )}
        <Link href={`/${post.slug}`} className="block">
          <h3 className="mb-2 text-2xl font-semibold text-white md:text-3xl">
            {title}
          </h3>
        </Link>
        <Link href={`/${post.slug}`} className="block">
          <p className="text-lg text-white/90">{excerpt}</p>
        </Link>
      </div>
    </div>
  );
}

export default async function Hero() {
  const featuredPosts = await getFeaturedPosts(3);

  if (!featuredPosts || featuredPosts.length < 3) {
    return (
      <div className="mx-auto px-4 py-8">
        <div className="flex min-h-[400px] items-center justify-center rounded-lg border-2 border-dashed border-gray-300">
          <p className="text-gray-500">No featured posts available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto px-4 py-8">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
        <HeroCard post={featuredPosts[0]} isLarge />
        <HeroCard post={featuredPosts[1]} />
        <HeroCard post={featuredPosts[2]} />
      </div>
    </div>
  );
}
