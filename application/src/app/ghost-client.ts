import GhostContentAPI from "@tryghost/content-api";
import type { PostsOrPages, Settings, PostOrPage, Tags, Tag, Author } from "@tryghost/content-api";

// Environment variable validation helper
function validateEnv() {
  const GHOST_URL = process.env.GHOST_URL;
  const CONTENT_KEY = process.env.CONTENT_KEY;

  if (!GHOST_URL || !CONTENT_KEY) {
    throw new Error(
      "Missing required environment variables: GHOST_URL and CONTENT_KEY must be set"
    );
  }

  return { GHOST_URL, CONTENT_KEY };
}

// Lazy API client initialization
let api: InstanceType<typeof GhostContentAPI> | null = null;

function getApi(): InstanceType<typeof GhostContentAPI> {
  if (!api) {
    const { GHOST_URL, CONTENT_KEY } = validateEnv();
    api = new GhostContentAPI({
      url: GHOST_URL,
      key: CONTENT_KEY,
      version: "v5.0",
    });
  }
  return api;
}

// Types
export type NavigationItem = {
  label: string;
  url: string;
};

export type SiteSettings = Settings & {
  navigation?: NavigationItem[];
};

export type PostsResult = PostsOrPages | undefined;
export type PostResult = PostOrPage | undefined;

/**
 * Get site navigation and settings from Ghost CMS
 */
export async function getNavigation(): Promise<SiteSettings | undefined> {
  try {
    const settings = await getApi().settings.browse();
    return settings;
  } catch (error) {
    console.error("Error fetching Ghost navigation:", error);
    return undefined;
  }
}

/**
 * Get posts with pagination
 * @param limit - Number of posts to retrieve
 * @param page - Page number for pagination
 */
export async function getPosts(
  limit: number,
  page: number = 1
): Promise<PostsResult> {
  try {
    return await getApi().posts.browse({
      limit,
      include: ["tags", "authors"],
      page,
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
    return undefined;
  }
}

/**
 * Get featured posts
 * @param limit - Number of featured posts to retrieve
 * @param page - Page number for pagination
 */
export async function getFeaturedPosts(
  limit: number,
  page: number = 1
): Promise<PostsResult> {
  try {
    return await getApi().posts.browse({
      limit,
      filter: "featured:true",
      include: ["tags", "authors"],
      page,
    });
  } catch (error) {
    console.error("Error fetching featured posts:", error);
    return undefined;
  }
}

/**
 * Get posts by tag
 * @param tag - Tag slug to filter by
 * @param limit - Number of posts to retrieve
 * @param page - Page number for pagination
 */
export async function getPostsByTag(
  tag: string,
  limit: number,
  page: number = 1
): Promise<PostsResult> {
  try {
    return await getApi().posts.browse({
      filter: `tag:${tag}`,
      limit,
      page,
      include: ["tags", "authors"],
    });
  } catch (error) {
    console.error(`Error fetching posts for tag ${tag}:`, error);
    return undefined;
  }
}

/**
 * Get posts by author
 * @param slug - Author slug to filter by
 * @param limit - Number of posts to retrieve
 * @param page - Page number for pagination
 */
export async function getPostsByAuthor(
  slug: string,
  limit: number,
  page: number = 1
): Promise<PostsResult> {
  try {
    return await getApi().posts.browse({
      filter: `author:${slug}`,
      limit,
      include: ["authors", "tags"],
      page,
    });
  } catch (error) {
    console.error(`Error fetching posts for author ${slug}:`, error);
    return undefined;
  }
}

/**
 * Get a single post by slug
 * @param slug - Post slug
 */
export async function getPostBySlug(slug: string): Promise<PostResult> {
  try {
    return await getApi().posts.read(
      { slug },
      { include: ["authors", "tags"] }
    );
  } catch (error) {
    console.error(`Error fetching post ${slug}:`, error);
    return undefined;
  }
}

/**
 * Get tag by slug
 * @param slug - Tag slug
 */
export async function getTagBySlug(slug: string): Promise<Tag | undefined> {
  try {
    return await getApi().tags.read(
      { slug },
      { include: ["count.posts"] }
    );
  } catch (error) {
    console.error(`Error fetching tag ${slug}:`, error);
    return undefined;
  }
}

/**
 * Get all tags
 * @param limit - Number of tags to retrieve
 * @param page - Page number for pagination
 */
export async function getTags(
  limit: number | "all" = "all",
  page: number = 1
): Promise<Tags | undefined> {
  try {
    return await getApi().tags.browse({
      limit,
      page,
      include: ["count.posts"],
    });
  } catch (error) {
    console.error("Error fetching tags:", error);
    return undefined;
  }
}

/**
 * Get author by slug
 * @param slug - Author slug
 */
export async function getAuthorBySlug(slug: string): Promise<Author | undefined> {
  try {
    return await getApi().authors.read(
      { slug },
      { include: ["count.posts"] }
    );
  } catch (error) {
    console.error(`Error fetching author ${slug}:`, error);
    return undefined;
  }
}
