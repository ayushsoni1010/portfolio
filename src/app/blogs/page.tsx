import { Flex } from "@chakra-ui/react";
import BaseLayout from "@/components/Wrapper/BaseLayout";
import BaseText from "@/components/Wrapper/BaseText";
import PageLayout from "@/components/layouts/PageLayout";
import BlogCard from "./BlogCard";
import { getAllBlogs } from "@/lib/blogs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Technical blog posts and articles by Ayush Soni",
};

/**
 * Blogs listing page
 * Uses Next.js 16 App Router with optimized data fetching
 */
const Blog = async () => {
  const blogs = await getAllBlogs();

  return (
    <PageLayout>
      <BaseLayout>
        <BaseText
          firstTitle="Blogs"
          secondTitle="Content"
          textIcon="https://ik.imagekit.io/ayushsoni1010/Website/blogs?ik-sdk-version=javascript-1.4.3&updatedAt=1669666499904"
          topSpacing={2}
        />
        <Flex
          justify="space-evenly"
          flexWrap="wrap"
          alignItems="start"
          rowGap="20"
          gap="10"
        >
          {blogs.map((blog) => (
            <BlogCard
              key={blog.slug}
              item={blog.frontmatter}
              slug={blog.slug}
            />
          ))}
        </Flex>
      </BaseLayout>
    </PageLayout>
  );
};

export default Blog;
