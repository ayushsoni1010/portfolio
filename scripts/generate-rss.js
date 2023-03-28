const { promises: fs } = require("fs");
const path = require("path");
const RSS = require("rss");
const matter = require("gray-matter");

const generate = async () => {
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

  const posts = await fs.readdir(path.join(__dirname, "..", "data", "blogs"));

  await Promise.all(
    posts.map(async (filename) => {
      const blogsData = await fs.readFile(
        path.join(path.join(__dirname, "..", "data", "blogs", filename))
      );

      const frontmatter = matter(blogsData);

      feed.item({
        title: frontmatter.data.title,
        description: frontmatter.data.excerpt,
        url: frontmatter.data.url,
        author: "Ayush Soni",
        date: frontmatter.data.date,
        categories: frontmatter.data.tags.split(", "),
      });
    })
  );

  await fs.writeFile("../public/feed.xml", feed.xml({ indent: true }));
};

generate();
