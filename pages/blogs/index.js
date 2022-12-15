/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import {
  Box,
  Image,
  Text,
  Flex,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import Seo from "../../components/Seo";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BaseLayout from "../../components/Wrapper/BaseLayout";
import BaseText from "../../components/Wrapper/BaseText";

const Blog = (blogsData) => {
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
            <Flex
              mt="24"
              justify="space-evenly"
              flexWrap="wrap"
              alignItems="start"
              rowGap="20"
            >
              {blogsData.frontmatter.map((item, index) => {
                return (
                  <Box
                    key={index}
                    bgColor="gray.100"
                    borderRadius="base"
                    w="400px"
                    h={{
                      base: "430px",
                      lg: "430px",
                      md: "430px",
                      sm: "430px",
                      xs: "480px",
                    }}
                    overflow="hidden"
                    // eslint-disable-next-line react/jsx-no-duplicate-props
                    bgColor={useColorModeValue("white", "gray.700")}
                    boxShadow="outline"
                    transition="ease-in-out"
                    transitionDuration="0.5s"
                    _hover={{ boxShadow: "2xl" }}
                  >
                    <Link key={index} href={item.href} passHref>
                      <Image
                        src={item.cover_image}
                        alt={item.title}
                        h="250px"
                        borderRadius="base"
                        transition="ease-in-out"
                        transitionDuration="0.5s"
                        _hover={{
                          transform: "scale(1.1)",
                          cursor: "pointer",
                          transition: "ease-in-out",
                          transitionDuration: "0.3s",
                        }}
                      />
                    </Link>
                    <Box mt="4" p="4">
                      <Link key={index} href={item.href} passHref>
                        <Heading fontSize="2xl" cursor="pointer">
                          {item.title}
                        </Heading>
                      </Link>
                      <Text my="2">{item.date}</Text>
                      <Text my="2" fontWeight="600">
                        {item.excerpt}
                      </Text>
                    </Box>
                  </Box>
                );
              })}
            </Flex>
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

  let slug = [];
  let markdown = [];
  let matterResult = [];
  let contentHtml = [];
  let frontmatter = [];

  files.map((filename) => {
    slug.push({ name: filename.replace(".md", "") });
    markdown.push(fs.readFileSync(path.join("posts", filename), "utf-8"));
  });

  markdown.map(async (item, index) => {
    matterResult.push(matter(item));
    frontmatter.push(matterResult[index].data);
    const processedContent = await remark()
      .use(html)
      .process(matterResult[index].content);
    contentHtml.push({ content: processedContent.toString() });
  });

  return {
    props: {
      slug,
      frontmatter,
      contentHtml,
    },
  };
}

export default Blog;
