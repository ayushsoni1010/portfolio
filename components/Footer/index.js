import { Box, Flex, Link, Text } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";
import SocialProfiles from "../Hero/SocialProfiles";

const Footer = () => {
  const year = new Date();
  return (
    <React.Fragment>
      <Flex my="10" alignItems="center" justify="space-between">
        <Box>
          <NextLink href="/">
            <Text cursor="pointer">
              Ayush Soni | &#169;{year.getFullYear()}
            </Text>
          </NextLink>
        </Box>
        <SocialProfiles />
      </Flex>
    </React.Fragment>
  );
};

export default Footer;
