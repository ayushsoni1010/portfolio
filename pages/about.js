import {
  VStack,
  Text,
  HStack,
  Image,
  Grid,
  GridItem,
  IconButton,
  Box,
  Flex,
} from "@chakra-ui/react";
import { GrAnnounce } from "react-icons/gr";
import React from "react";
import Header from "../components/Header";
import BaseLayout from "../components/Wrapper/BaseLayout";
import BaseText from "../components/Wrapper/BaseText";
import SocialProfiles from "../components/Hero/SocialProfiles";
import Seo from "../components/Seo";
import Footer from "../components/Footer";

const About = () => {
  return (
    <React.Fragment>
      <Seo title="About" />
      <Box>
        <header>
          <Header />
        </header>
        <main>
          <BaseLayout>
            <BaseText
              firstTitle="About"
              secondTitle="Developer"
              textIcon="https://ik.imagekit.io/ayushsoni1010/Website/about?ik-sdk-version=javascript-1.4.3&updatedAt=1669666323627"
              leftSpacing="4"
              topSpacing="2"
            />
            <Grid
              display={{
                base: "grid",
                md: "grid",
                lg: "grid",
                sm: "block",
                xs: "block",
              }}
              templateColumns={{
                md: "repeat(5, 1fr)",
                lg: "repeat(5, 1fr)",
              }}
              gap={4}
              my="10"
            >
              <GridItem colSpan={2}>
                <Image
                  src="/profile.jpg"
                  alt="Hero"
                  w="320px"
                  borderRadius="10px"
                />
              </GridItem>
              <GridItem
                colStart={3}
                colEnd={12}
                mt={{ base: 0, md: 0, lg: 0, sm: 10, xs: 10 }}
              >
                <Text>
                  👨‍🎓 This is{" "}
                  <span
                    style={{
                      color: "var(--chakra-colors-teal-500)",
                      fontWeight: 500,
                    }}
                  >
                    Ayush Soni
                  </span>{" "}
                  , a passionate full-stack developer and devrel engineer with a
                  love for open-source and UI designing. I specialize in
                  building robust and scalable SaaS products, microservices, and
                  design systems. With a strong grasp of frontend and backend
                  architecture, I create intuitive designs for engaging user
                  experiences.
                </Text>
                <Text mt="5">
                  🚀 I have extensive experience in {""}
                  <span
                    style={{
                      color: "var(--chakra-colors-teal-500)",
                      fontWeight: 500,
                    }}
                  >
                    Javascript and Typescript
                  </span>
                  , using them professionally and for personal projects.
                  I&apos;m involved in hackathons, community building, and
                  open-source contributions as both a participant and mentor.
                  Additionally, I also lead community initiatives, offer
                  software development sessions, and provide team leadership.
                </Text>
                <HStack
                  mt={{ base: 8, lg: 8, md: 8, sm: 10, xs: 10 }}
                  display={{
                    base: "block",
                    lg: "block",
                    md: "block",
                    sm: "none",
                    xs: "none",
                  }}
                >
                  <SocialProfiles />
                </HStack>
              </GridItem>
            </Grid>
            <VStack
              mt={{ base: 28, lg: 28, md: 28, sm: 20, xs: 20 }}
              p="10"
              spacing={4}
              w="full"
              borderRadius="10px"
              color="black"
              alignItems={"flex-start"}
              bgGradient="linear(to-r, gray.300, yellow.400, pink.200)"
            >
              <Flex gap="4" alignItems={"center"}>
                <IconButton
                  size="lg"
                  width={{ base: 14, lg: 14, md: 14, sm: 14, xs: 10 }}
                  height={{ base: 14, lg: 14, md: 14, sm: 14, xs: 10 }}
                  fontSize={{
                    base: "3xl",
                    lg: "3xl",
                    md: "3xl",
                    sm: "2xl",
                    xs: "2xl",
                  }}
                  variant="solid"
                  color="current"
                  bg="white"
                  icon={<GrAnnounce />}
                />
                <Text
                  fontSize={{
                    base: "4xl",
                    lg: "4xl",
                    md: "4xl",
                    sm: "4xl",
                    xs: "2xl",
                  }}
                  fontWeight={"bold"}
                >
                  Open for roles
                </Text>
              </Flex>

              <Text
                display={{
                  base: "block",
                  lg: "block",
                  md: "block",
                  sm: "none",
                  xs: "none",
                }}
              >
                As a versatile developer, I am excited about the prospect of
                taking on diverse roles and responsibilities in both frontend
                and backend development, and I am open to exploring
                opportunities in various work arrangements, including full-time,
                part-time, or contract positions.
              </Text>
              <Text
                display={{
                  base: "none",
                  lg: "none",
                  md: "none",
                  sm: "block",
                  xs: "block",
                }}
              >
                I&apos;m a versatile developer excited about diverse roles in
                frontend and backend development, and open to different work
                arrangements.
              </Text>
            </VStack>
          </BaseLayout>
        </main>
        <footer>
          <Footer />
        </footer>
      </Box>
    </React.Fragment>
  );
};

export default About;
