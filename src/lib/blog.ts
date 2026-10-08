import { notion } from "./notion";

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  date: string;
  tags: string[];
};

export async function getPublishedPosts() : Promise<BlogPost[]> {
  if (!process.env.NOTION_API_KEY || !process.env.NOTION_DATABASE_ID) {
    return [];
  }

  const res = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
    filter: {
      property: "Published",
      checkbox: { equals: true },
    },
    sorts: [{ property: "Date", direction: "descending" }],
  });

  return res.results.map((post: any) => ({
    id: post.id,
    title: post.properties.Title.title[0]?.plain_text || "",
    slug:
      post.properties.Slug.rich_text[0]?.plain_text?.trim().toLowerCase() || "",
    date: post.properties.Date.date?.start || "",
    tags: post.properties.Tags.multi_select.map((t: any) => t.name),
  }));
}
