import React from "react";
import fs from "fs";
import path from "path";
import { remark } from "remark";
import html from "remark-html";
import matter from "gray-matter";
import {
  Box,
  Heading,
  Image,
  Text,
  Tag,
  Flex,
  Divider,
} from "@chakra-ui/react";
import Seo from "../../components/Seo";
import Header from "../../components/Header";
import BaseLayout from "../../components/Wrapper/BaseLayout";
import BaseText from "../../components/Wrapper/BaseText";
import Footer from "../../components/Footer";

import ReactMarkdown from "react-markdown";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";

const BlogPage = ({ data, slug, contentHtml }) => {
  const blogDate = new Date(data.date);
  const published_date = blogDate.toISOString().substring(0, 10);

  return (
    <React.Fragment>
      <Box>
        <Seo
          title={data.title}
          description={data.subtitle}
          OGImage={`https://ayushsoni1010.com${data.cover_image}`}
          OGType="article"
          canonicalUrl={`https://ayushsoni1010.com${data.href}`}
          publishedDate={published_date}
        />
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
          <Box>
            <Box>
              <Box
                align="center"
                my={{ base: 20, lg: 20, md: 20, sm: 10, xs: 10 }}
                bgColor="gray.300"
                p="10"
                borderRadius="base"
              >
                <Image
                  src={data.cover_image}
                  alt={slug}
                  w="700px"
                  borderRadius={{
                    base: "2xl",
                    lg: "2xl",
                    md: "2xl",
                    sm: "xl",
                    xs: "xl",
                  }}
                  transition="ease-in-out"
                  transitionDuration="0.5s"
                  _hover={{
                    transform: "scale(1.15)",
                    cursor: "pointer",
                    transition: "ease-in-out",
                    transitionDuration: "0.3s",
                  }}
                />
              </Box>
              <Box px={{ base: 32, lg: 32, md: 0, sm: 0, xs: 0 }}>
                <Heading
                  fontSize={{
                    base: "5xl",
                    lg: "5xl",
                    md: "5xl",
                    sm: "3xl",
                    xs: "3xl",
                  }}
                  fontWeight="800"
                  my="2"
                >
                  {data.title}
                </Heading>
              </Box>
              <Flex
                gap="3"
                my="4"
                flexWrap="wrap"
                px={{ base: 32, lg: 32, md: 0, sm: 0, xs: 0 }}
              >
                {data.tags.split(", ").map((item, index) => {
                  return (
                    <Tag
                      key={index}
                      cursor="pointer"
                      size={{
                        base: "lg",
                        lg: "lg",
                        md: "lg",
                        sm: "md",
                        xs: "sm",
                      }}
                      _active={{
                        boxShadow: "outline",
                        cursor: "pointer",
                        transition: "ease-in-out",
                        transitionDuration: "0.2s",
                      }}
                    >
                      {item}
                    </Tag>
                  );
                })}
              </Flex>
              <Text px={{ base: 32, lg: 32, md: 0, sm: 0, xs: 0 }}>
                {data.date}
              </Text>
            </Box>
            <Divider my="4" />
            <Box my="4" px={{ base: 32, lg: 32, md: 0, sm: 0, xs: 0 }}>
              <ReactMarkdown
                components={ChakraUIRenderer()}
                // eslint-disable-next-line react/no-children-prop
                children={contentHtml}
                skipHtml
              />
            </Box>
          </Box>
        </BaseLayout>
      </main>
      <footer>
        <Footer />
      </footer>
    </React.Fragment>
  );
};

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("data", "blogs"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdown = fs.readFileSync(
    path.join("data", "blogs", slug + ".mdx"),
    "utf-8"
  );

  const matterResult = matter(markdown);

  return {
    props: {
      data: matterResult.data,
      slug,
      contentHtml: matterResult.content,
    },
  };
}

export default BlogPage;
