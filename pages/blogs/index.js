import React from "react";
import fs from "fs";
import path from "path";
import { Box } from "@chakra-ui/react";
import Seo from "../../components/Seo";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BaseLayout from "../../components/Wrapper/BaseLayout";
import BaseText from "../../components/Wrapper/BaseText";

const Blog = () => {
  return (
    <React.Fragment>
      <Box>
        <Seo title="Blogs | Ayush Soni" />
        <Box>
          <header>
            <Header />
          </header>
        </Box>
        <main>
          <BaseLayout>
            <BaseText
              firstTitle="Blogs"
              secondTitle="Content"
              textIcon="https://ik.imagekit.io/ayushsoni1010/Website/blogs?ik-sdk-version=javascript-1.4.3&updatedAt=1669666499904"
              topSpacing="2"
            />
          </BaseLayout>
        </main>
        <footer>
          <Footer />
        </footer>
      </Box>
    </React.Fragment>
  );
};

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts"));

  const blogs = files.map((filename) => {
    const slug = filename.replace(".md", "");

    const markdown = fs.readFileSync(path.join("posts", filename), "utf-8");
    return { slug, markdown };
  });

  return {
    props: {
      posts: blogs,
    },
  };
}

export default Blog;
