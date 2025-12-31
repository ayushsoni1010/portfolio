import Link from "next/link";
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button,
} from "@chakra-ui/react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Not Found",
};

const NotFound = () => {
  return (
    <Container m="auto" mt="20">
      <Heading as="h1">Not found</Heading>
      <Text>The page you&apos;re looking for was not found.</Text>
      <Divider my={6} />
      <Box my={6} alignSelf={"start"}>
        <Link href="/">
          <Button
            type="button"
            variant="solid"
            colorScheme="teal"
            bgGradient="linear(to-r, teal.500, green.400)"
          >
            Return to home
          </Button>
        </Link>
      </Box>
    </Container>
  );
};

export default NotFound;

