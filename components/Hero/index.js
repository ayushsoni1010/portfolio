import React from "react";
import dynamic from "next/dynamic";
import VoxelDogLoader from "../DevDog/blender-dog";
import BaseLayout from "../Wrapper/BaseLayout";
import {
  Button,
  VStack,
  Flex,
  Stack,
  Heading,
  Text,
  ButtonGroup,
} from "@chakra-ui/react";
import SocialProfiles from "./SocialProfiles";

const LazyVoxelDog = dynamic(() => import("../DevDog"), {
  ssr: false,
  loading: () => <VoxelDogLoader />,
});

const Hero = () => {
  return (
    <React.Fragment>
      <BaseLayout>
        <VStack
          m="auto"
          my="10"
          mt={{ base: 10, md: 10, lg: 10, sm: 10, xs: "4em" }}
          zIndex="100"
        >
          <Button
            borderRadius="full"
            borderColor="blue.600"
            h="30px"
            fontSize={{ base: "sm", sm: "sm", xs: "xs" }}
            borderWidth="2px"
          >
            Hello, I&apos;m a Full Stack Developer based in India
          </Button>
        </VStack>
        <Flex
          // display={{ base: "flex", md: "flex", sm: "block", xs: "block" }}
          flex={{ base: 1, md: 1, sm: 0, xs: 0 }}
          justify="space-between"
          direction={{
            base: "row",
            md: "row",
            sm: "column-reverse",
            xs: "column-reverse",
          }}
        >
          <Stack>
            <Heading
              fontSize={{ md: "6xl", lg: "6xl", sm: "4xl", xs: "3xl" }}
              fontWeight="extrabold"
            >
              <Stack display="flex" direction="row">
                <Text colorScheme="black">I&apos;m</Text>
                <Text
                  bgGradient="linear(to-tr, teal.500, green.400)"
                  bgClip="text"
                >
                  Ayush Soni,
                </Text>
              </Stack>
              <Stack display="flex" direction="row">
                <Text colorScheme="black">full stack</Text>
                <Text
                  bgGradient="linear(to-tr, teal.500, green.400)"
                  bgClip="text"
                >
                  developer
                </Text>
              </Stack>
              <Stack display="flex" direction="row">
                <Text colorScheme="black">and</Text>
                <Text
                  bgGradient="linear(to-tr, teal.500, green.400)"
                  bgClip="text"
                >
                  designer.
                </Text>
              </Stack>
            </Heading>
            <Text py="5" colorScheme="black" fontWeight="400">
              I design and create{" "}
              <span
                style={{
                  color: "var(--chakra-colors-teal-500)",
                  fontWeight: 500,
                }}
              >
                functional and beautiful applications
              </span>{" "}
              with passion and a focus on{" "}
              <span
                style={{
                  color: "var(--chakra-colors-teal-500)",
                  fontWeight: 500,
                }}
              >
                user experience
              </span>{" "}
              and{" "}
              <span
                style={{
                  color: "var(--chakra-colors-teal-500)",
                  fontWeight: 500,
                }}
              >
                high quality.
              </span>{" "}
            </Text>
            <ButtonGroup gap="1">
              <Button
                as="a"
                target="_blank"
                href="mailto:ayushsoni1010.work@gmail.com"
                border="2px"
                variant="outline"
                size={{ base: "md", md: "md", sm: "sm" }}
                colorScheme="teal"
              >
                Hire me
              </Button>
              <Button
                colorScheme="teal"
                target="_blank"
                as="a"
                href="https://calendly.com/ayushsoni1010/"
                variant="solid"
                size={{ base: "md", md: "md", sm: "sm" }}
                bgGradient="linear(to-r, teal.500, green.400)"
              >
                Schedule a Meeting
              </Button>
            </ButtonGroup>
            <Stack py="4">
              <SocialProfiles />
            </Stack>
          </Stack>
          <Stack>
            <LazyVoxelDog />
          </Stack>
        </Flex>
      </BaseLayout>
    </React.Fragment>
  );
};

export default Hero;
