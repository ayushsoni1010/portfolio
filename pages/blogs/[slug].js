import React from "React";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Box } from "@chakra-ui/react";
import Seo from "../../components/Seo";
import Header from "../../components/Header";
import BaseLayout from "../../components/Wrapper/BaseLayout";
import BaseText from "../../components/Wrapper/BaseText";

const BlogPage = ({ frontmatter, slug, content }) => {
  return (
    <React.Fragment>
      <Box>
        <Seo />
      </Box>
      <Box>
        <header>
          <Header />
        </header>
      </Box>
      <main>
        <BaseLayout>
          <BaseText
            firstTitle="Technical"
            secondTitle="Writer"
            textIcon="https://ik.imagekit.io/ayushsoni1010/Website/blogs?ik-sdk-version=javascript-1.4.3&updatedAt=1669666499904"
            topSpacing="2"
          />
        </BaseLayout>
      </main>
    </React.Fragment>
  );
};

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  console.log(slug);
  const markdown = fs.readFileSync(path.join("posts", slug + ".md"), "utf-8");

  const { data: frontmatter, content } = matter(markdown);
  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}

export default BlogPage;
