import { promises as fs } from "fs";
import path from "path";
import RSS from "rss";
import matter from "gray-matter";

(async function generate() {
  const feed = new RSS({
    title: "Ayush Soni",
    description: "Hey! I am Ayush, a full-stack developer from India",
    feed_url: "https://ayushsoni1010.com/feed.xml",
    site_url: "https://ayushsoni1010.com",
    managingEditor: "Ayush Soni",
    webMaster: "Ayush Soni",
    language: "en",
    copyright: `Ayush Soni | ${new Date().getFullYear()}`,
  });

  const postsDir = path.join(__dirname, "..", "data", "blogs");
  const posts = await fs.readdir(postsDir);

  await Promise.all(
    posts.map(async (filename) => {
      const filePath = path.join(postsDir, filename);
      const fileContent = await fs.readFile(filePath, "utf8");
      const frontmatter = matter(fileContent);

      feed.item({
        title: frontmatter.data.title,
        description: frontmatter.data.subtitle,
        url: frontmatter.data.url,
        author: "Ayush Soni",
        date: frontmatter.data.date,
        categories: frontmatter.data.tags?.split(", "),
      });
    })
  );

  await fs.writeFile("./public/rss.xml", feed.xml({ indent: true }));
})();
