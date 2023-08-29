import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
  url: process.env.GHOST_URL as string,
  key: process.env.CONTENT_KEY as string,
  version: "v5.0",
});

export async function getNavigation() {
  return await api.settings.browse().catch((err) => {
    console.error(err);
  });
}

export async function getPosts(limit: number, page: number = 1) {
  return await api.posts
    .browse({
      limit: limit,
      include: ["tags"],
      page: page,
    })
    .catch((err) => {
      console.error(err);
    });
}

export async function getFeaturedPosts(limit: number, page: number = 1) {
  return await api.posts
    .browse({
      limit: limit,
      filter: "featured:true",
      include: ["tags"],
      page: page,
    })
    .catch((err) => {
      console.error(err);
    });
}

export async function getPostsByTag(
  tag: string,
  limit: number,
  page: number = 1
) {
  return await api.posts
    .browse({
      filter: `tag:${tag}`,
      limit: limit,
      page: page,
      include: ["tags"],
    })
    .catch((err) => {
      console.error(err);
    });
}

export async function getPostsByAuthor(
  slug: string,
  limit: number,
  page: number = 1
) {
  return await api.posts
    .browse({
      filter: `author:${slug}`,
      limit: limit,
      include: ["authors", "tags"],
      page: page,
    })
    .catch((err) => {
      console.error(err);
    });
}

export async function getPostBySlug(slug: string) {
  return await api.posts
    .read(
      {
        slug,
      },
      {
        include: ["authors", "tags"],
      }
    )
    .catch((err) => {
      console.error(err);
    });
}
