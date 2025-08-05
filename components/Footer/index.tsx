import { Box, Flex, Link, Text } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";
import SocialProfiles from "../Hero/SocialProfiles";
import BaseLayout from "../Wrapper/BaseLayout";

const Footer = () => {
  const year = new Date();
  return (
    <BaseLayout>
      <Flex
        my="10"
        alignItems="center"
        justify={{
          base: "space-between",
          lg: "space-between",
          md: "space-between",
          sm: "center",
          xs: "center",
        }}
        flexDirection={{
          base: "row",
          lg: "row",
          md: "row",
          sm: "column",
          xs: "column",
        }}
        rowGap="4"
      >
        <Box>
          <NextLink href="/">
            <Text cursor="pointer">
              Ayush Soni | &#169;{year.getFullYear()}
            </Text>
          </NextLink>
        </Box>
        <SocialProfiles />
      </Flex>
    </BaseLayout>
  );
};

export default Footer;
