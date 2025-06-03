// Basic Imports
import React from "react";
import NextLink from "next/link";

// Chakra UI Imports
import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  Text,
} from "@chakra-ui/react";

// Components Imports
import BaseLayout from "../components/Wrapper/BaseLayout";
import Seo from "../components/Seo";

const Custom500 = () => {
  return (
    <React.Fragment>
      <Seo title="Internal Server Error" />
      <BaseLayout>
        <Container m="auto" mt="20">
          <Heading as="h1">Internal server error</Heading>
          <Text mt="2">Oops, looks like we broke something...</Text>
          <Text>An unexpected error occured</Text>
          <Heading fontSize="4xl" my="4">
            ❌ 500
          </Heading>
          <Divider my="6" />
          <Box my="6">
            <NextLink href="/" passHref>
              <Button
                type="button"
                variant="solid"
                colorScheme="teal"
                bgGradient="linear(to-r, teal.500, green.400)"
              >
                This way back to safety, please ❤️
              </Button>
            </NextLink>
          </Box>
        </Container>
      </BaseLayout>
    </React.Fragment>
  );
};

export default Custom500;
