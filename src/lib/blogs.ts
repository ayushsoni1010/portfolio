import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface BlogFrontmatter {
  title: string;
  subtitle: string;
  date: string;
  cover_image: string;
  href: string;
  tags: string;
}

export interface BlogData {
  data: BlogFrontmatter;
  slug: string;
  contentHtml: string;
}

export interface BlogListItem {
  slug: string;
  frontmatter: BlogFrontmatter;
}

const BLOGS_DIR = path.join(process.cwd(), "src", "data", "blogs");

/**
 * Get all blog posts with their frontmatter
 * Optimized for Next.js 16 App Router
 */
export async function getAllBlogs(): Promise<BlogListItem[]> {
  try {
    const files = fs.readdirSync(BLOGS_DIR);

    const blogs = await Promise.all(
      files
        .filter((filename) => filename.endsWith(".mdx"))
        .map(async (filename) => {
          const slug = filename.replace(".mdx", "");
          const filePath = path.join(BLOGS_DIR, filename);
          const fileContents = fs.readFileSync(filePath, "utf-8");
          const { data } = matter(fileContents);

          return {
            slug,
            frontmatter: data as BlogFrontmatter,
          };
        })
    );

    // Sort by date (newest first)
    return blogs.sort((a, b) => {
      const dateA = new Date(a.frontmatter.date).getTime();
      const dateB = new Date(b.frontmatter.date).getTime();
      return dateB - dateA;
    });
  } catch (error) {
    console.error("Error reading blog files:", error);
    return [];
  }
}

/**
 * Get a single blog post by slug
 * Optimized for Next.js 16 App Router
 */
export async function getBlogBySlug(slug: string): Promise<BlogData | null> {
  try {
    const filePath = path.join(BLOGS_DIR, `${slug}.mdx`);

    if (!fs.existsSync(filePath)) {
      return null;
    }

    const fileContents = fs.readFileSync(filePath, "utf-8");
    const matterResult = matter(fileContents);

    return {
      data: matterResult.data as BlogFrontmatter,
      slug,
      contentHtml: matterResult.content,
    };
  } catch (error) {
    console.error(`Error reading blog file ${slug}:`, error);
    return null;
  }
}

/**
 * Get all blog slugs for static generation
 */
export function getAllBlogSlugs(): string[] {
  try {
    const files = fs.readdirSync(BLOGS_DIR);
    return files
      .filter((filename) => filename.endsWith(".mdx"))
      .map((filename) => filename.replace(".mdx", ""));
  } catch (error) {
    console.error("Error reading blog slugs:", error);
    return [];
  }
}
