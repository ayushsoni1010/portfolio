import NextLink from "next/link";
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button,
} from "@chakra-ui/react";
import React from "react";
import Seo from "../components/Seo";

const NotFound = () => {
  return (
    <React.Fragment>
      <Seo title="Not Found" />
      <Container m="auto" mt="20">
        <Heading as="h1">Not found</Heading>
        <Text>The page you&apos;re looking for was not found.</Text>
        <Divider my={6} />
        <Box my={6} align="start">
          <NextLink href="/" passHref>
            <Button
              type="button"
              variant="solid"
              colorScheme="teal"
              bgGradient="linear(to-r, teal.500, green.400)"
            >
              Return to home
            </Button>
          </NextLink>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default NotFound;
