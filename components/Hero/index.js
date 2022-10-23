import React from "react";
import dynamic from "next/dynamic";
import VoxelDogLoader from "../DevDog/voxel-dog";
import BaseLayout from "../../layouts/BaseLayout";
import {
  Button,
  VStack,
  Flex,
  Stack,
  Heading,
  Text,
  ButtonGroup,
  IconButton,
} from "@chakra-ui/react";
import { connectionLinks } from "./__connectLinks";
import SocialProfiles from "./SocialProfiles";

const LazyVoxelDog = dynamic(() => import("../DevDog"), {
  ssr: false,
  loading: () => <VoxelDogLoader />,
});

const Hero = () => {
  return (
    <React.Fragment>
      <BaseLayout>
        <VStack m="auto" my="10" zIndex="100">
          <Button
            borderRadius="full"
            borderColor="blue.600"
            h="30px"
            fontSize="sm"
            borderWidth="2px"
          >
            Hello, I&apos;m a Full Stack Developer based in India
          </Button>
        </VStack>
        <Flex
          flex={{ base: 1, md: 1, sm: 0 }}
          justify="space-between"
          direction={{ base: "row", md: "row", sm: "column-reverse" }}
        >
          <Stack>
            <Heading
              fontSize={{ md: "6xl", lg: "6xl", sm: "4xl" }}
              fontWeight="extrabold"
            >
              <Stack display="flex" gap="2" direction="row">
                <Text colorScheme="black">I&apos;m</Text>
                <Text
                  bgGradient="linear(to-tr, teal.500, green.400)"
                  bgClip="text"
                >
                  Ayush Soni,
                </Text>
              </Stack>
              <Stack display="flex" gap="2" direction="row">
                <Text colorScheme="black">full stack</Text>
                <Text
                  bgGradient="linear(to-tr, teal.500, green.400)"
                  bgClip="text"
                >
                  developer
                </Text>
              </Stack>
              <Stack display="flex" gap="2" direction="row">
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
            <ButtonGroup>
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
