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

export async function getPosts() {
  return await api.posts
    .browse({
      limit: 10,
      include: ["tags", "authors"],
    })
    .catch((err) => {
      console.error(err);
    });
}

export async function getPostBySlug(slug: string) {
  return await api.posts
    .read({
      slug,
    })
    .catch((err) => {
      console.error(err);
    });
}
