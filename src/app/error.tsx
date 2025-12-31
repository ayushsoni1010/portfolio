"use client";

import {
  Box,
  Text,
  Flex,
  Image,
  Button,
  VStack,
  Heading,
  Container,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.700", "gray.200");
  const errorBg = useColorModeValue("red.50", "red.900");
  const errorBorder = useColorModeValue("red.200", "red.700");
  const hoverBg = useColorModeValue("teal.50", "teal.900");

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Box minH="100vh" bg={bgColor} py={{ base: 8, md: 16 }}>
      <Container maxW="container.lg" centerContent>
        <VStack spacing={8} textAlign="center" w="full">
          {/* SVG Illustration */}
          <Box
            w={{ base: "100%", md: "80%", lg: "60%" }}
            maxW="600px"
            mx="auto"
          >
            <Image
              src="/500.svg"
              alt="500 Error Illustration"
              w="full"
              h="auto"
              objectFit="contain"
            />
          </Box>

          {/* Error Content */}
          <VStack spacing={4} maxW="2xl">
            <Heading
              as="h1"
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
              fontWeight="bold"
              bgGradient="linear(to-r, teal.500, green.400)"
              bgClip="text"
            >
              Internal Server Error
            </Heading>
            <VStack gap={1}>
              <Text
                fontSize={{ base: "lg", md: "xl" }}
                color={textColor}
                fontWeight="500"
              >
                Oops! Something went wrong.
              </Text>
              <Text fontSize={{ base: "md", md: "lg" }} color={textColor}>
                Sorry for the inconvenience.
              </Text>
            </VStack>

            {/* Error Details (Development only) */}
            {process.env.NODE_ENV === "development" && error.message && (
              <Box
                mt={4}
                p={4}
                bg={errorBg}
                borderRadius="md"
                border="1px solid"
                borderColor={errorBorder}
                w="full"
                textAlign="left"
              >
                <Text fontSize="sm" fontWeight="bold" mb={2} color="red.600">
                  Error Details:
                </Text>
                <Text fontSize="xs" fontFamily="mono" color={textColor}>
                  {error.message}
                </Text>
                {error.digest && (
                  <Text fontSize="xs" mt={2} color={textColor}>
                    Error ID: {error.digest}
                  </Text>
                )}
              </Box>
            )}

            {/* Action Buttons */}
            <Flex
              direction={{ base: "column", sm: "row" }}
              gap={4}
              mt={6}
              w="full"
              justify="center"
            >
              <Button
                type="button"
                size={{ base: "md", md: "lg" }}
                variant="solid"
                colorScheme="teal"
                bgGradient="linear(to-r, teal.500, green.400)"
                _hover={{
                  bgGradient: "linear(to-r, teal.600, green.500)",
                  transform: "translateY(-2px)",
                  boxShadow: "lg",
                }}
                onClick={reset}
                transition="all 0.2s"
              >
                Try Again
              </Button>
              <Link href="/" style={{ width: "100%", maxWidth: "200px" }}>
                <Button
                  type="button"
                  size={{ base: "md", md: "lg" }}
                  variant="outline"
                  colorScheme="teal"
                  borderWidth="2px"
                  w="full"
                  _hover={{
                    bg: hoverBg,
                    transform: "translateY(-2px)",
                    boxShadow: "md",
                  }}
                  transition="all 0.2s"
                >
                  Go Home
                </Button>
              </Link>
            </Flex>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
}
