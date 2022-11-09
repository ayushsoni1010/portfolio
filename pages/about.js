import {
  VStack,
  Text,
  HStack,
  Image,
  Grid,
  GridItem,
  IconButton,
  Button,
  Box,
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
      <Seo title="About | Ayush Soni" />
      <Box>
        <header>
          <Header />
        </header>
        <main>
          <BaseLayout>
            <BaseText
              firstTitle="About"
              secondTitle="Developer"
              textIcon="https://ik.imagekit.io/ayushsoni1010/Website/about_OAHDfHioo.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666637958900"
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
              my="5"
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
                  This is{" "}
                  <span
                    style={{
                      color: "var(--chakra-colors-teal-500)",
                      fontWeight: 500,
                    }}
                  >
                    Ayush Soni
                  </span>{" "}
                  , a junior-year computer science undergraduate, pursuing
                  B.Tech from Medi-Caps University, Indore. I am always
                  fascinated by programming and passionate about exploring the
                  latest technology and developing new cool things. An
                  enthusiastic person with a touch of curiosity and hard work
                  and is heavily ambitious to improve knowledge. Always aiming
                  to be a rainbow at the end of a thunderstorm.
                </Text>
                <Text mt="5">
                  I am a{" "}
                  <span
                    style={{
                      color: "var(--chakra-colors-teal-500)",
                      fontWeight: 500,
                    }}
                  >
                    Full Stack Developer, an Open-Source Enthusiast, and a UX/UI
                    Designer
                  </span>{" "}
                  who loves to work with frontend and design things creatively
                  and curiously. As a designer, I have worked on design systems.
                  I have participated as a participant, and mentor in many
                  open-source contribution programs and hackathons. I have taken
                  sessions in the communities, mentored many people, and
                  contributed to open-source communities.
                </Text>
                <HStack
                  mt="5"
                  p="3"
                  w="fit-content"
                  borderRadius="10px"
                  color="black"
                  bgGradient="linear(to-r, gray.300, yellow.400, pink.200)"
                >
                  <IconButton
                    size="md"
                    fontSize="lg"
                    variant="solid"
                    color="current"
                    icon={<GrAnnounce />}
                  />
                  <Text>
                    open for full-time/part-time intern roles in frontend and
                    backend development.
                  </Text>
                </HStack>
                <VStack align="start" mt="10" spacing={3}>
                  <Button
                    border="2px"
                    variant="outline"
                    size="md"
                    colorScheme="teal"
                  >
                    Connect with me on🚀
                  </Button>
                  <SocialProfiles />
                </VStack>
              </GridItem>
            </Grid>
          </BaseLayout>
        </main>
        <footer>
          <BaseLayout>
            <Footer />
          </BaseLayout>
        </footer>
      </Box>
    </React.Fragment>
  );
};

export default About;
