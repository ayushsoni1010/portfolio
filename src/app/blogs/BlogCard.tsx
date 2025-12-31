"use client";

import React from "react";
import { Box, Image, Text, Heading, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import type { BlogFrontmatter } from "@/lib/blogs";

interface BlogCardProps {
  item: BlogFrontmatter;
  slug: string;
}

/**
 * Blog card component for displaying blog previews
 * Client component for interactivity
 */
const BlogCard: React.FC<BlogCardProps> = ({ item, slug }) => {
  const bgColor = useColorModeValue("gray.50", "gray.700");

  return (
    <Box
      borderRadius="base"
      w="375px"
      h={{
        base: "440px",
        lg: "440px",
        md: "440px",
        sm: "440px",
        xs: "480px",
      }}
      overflow="hidden"
      bgColor={bgColor}
      boxShadow="outline"
      transition="ease-in-out"
      transitionDuration="0.5s"
      _hover={{ boxShadow: "2xl" }}
    >
      <Link href={`/blogs/${slug}`}>
        <Image
          src={item.cover_image}
          alt={item.title}
          h="250px"
          w="full"
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
        <Link href={`/blogs/${slug}`}>
          <Heading fontSize="2xl" cursor="pointer">
            {item.title}
          </Heading>
        </Link>
        <Text my="2">{item.date}</Text>
        <Text my="2" fontWeight="600">
          {item.subtitle}
        </Text>
      </Box>
    </Box>
  );
};

export default BlogCard;
