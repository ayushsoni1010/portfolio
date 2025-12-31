import {
  Box,
  Heading,
  Image,
  Text,
  Tag,
  Flex,
  Divider,
} from "@chakra-ui/react";
import BaseLayout from "@/components/Wrapper/BaseLayout";
import BaseText from "@/components/Wrapper/BaseText";
import PageLayout from "@/components/layouts/PageLayout";
import ReactMarkdown from "react-markdown";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogBySlug, getAllBlogSlugs } from "@/lib/blogs";

/**
 * Generate static params for all blog posts at build time
 * Optimized for Next.js 16 App Router
 */
export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

/**
 * Generate metadata for blog post pages
 * Optimized for Next.js 16 App Router with async params
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blogData = await getBlogBySlug(slug);

  if (!blogData) {
    return {
      title: "Blog Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  const blogDate = new Date(blogData.data.date);
  const published_date = blogDate.toISOString().substring(0, 10);

  return {
    title: blogData.data.title,
    description: blogData.data.subtitle,
    openGraph: {
      type: "article",
      title: blogData.data.title,
      description: blogData.data.subtitle,
      images: [`https://ayushsoni1010.com${blogData.data.cover_image}`],
      url: `https://ayushsoni1010.com${blogData.data.href}`,
      publishedTime: published_date,
    },
    alternates: {
      canonical: `https://ayushsoni1010.com${blogData.data.href}`,
    },
  };
}

/**
 * Individual blog post page
 * Uses Next.js 16 App Router with optimized static generation
 */
const BlogPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const blogData = await getBlogBySlug(slug);

  if (!blogData) {
    notFound();
  }

  const { data, contentHtml } = blogData;

  return (
    <PageLayout>
      <BaseLayout>
        <BaseText
          firstTitle="Technical"
          secondTitle="Writer"
          textIcon="https://ik.imagekit.io/ayushsoni1010/Website/blogs?ik-sdk-version=javascript-1.4.3&updatedAt=1669666499904"
          topSpacing={2}
        />
        <Box>
          <Box>
            <Box
              alignItems="center"
              my={{ base: 20, lg: 20, md: 20, sm: 10, xs: 10 }}
              bgColor="gray.300"
              p="10"
              borderRadius="base"
            >
              <Image
                mx="auto"
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
              {data.tags.split(", ").map((item: string, index: number) => {
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
    </PageLayout>
  );
};

export default BlogPage;
