import { Box, Grid, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import React from "react";
import BaseLayout from "../Wrapper/BaseLayout";
import Skills from "./Skills";
import Timeline from "./Timeline";
import { productCardDetails } from "./__productCardDetails";

const Home = () => {
  return (
    <React.Fragment>
      <BaseLayout mt="10">
        <Heading
          fontSize={{
            base: "5xl",
            md: "5xl",
            lg: "5xl",
            sm: "3xl",
            xs: "3xl",
          }}
          fontWeight="bold"
          textAlign="center"
        >
          The full product development stack.
        </Heading>
        <Text
          textAlign="center"
          fontSize={{ base: "md", md: "md", lg: "md", sm: "sm", xs: "sm" }}
          my="5"
          mx={{ lg: 60, md: 60, sm: 0, xs: 0 }}
        >
          From designing the interface to implementing your fully featured
          application - I can provide the full product design process from an
          idea to a finished hiqh quality app, polished with fantastic design
          and running on state of the art software.
        </Text>
        <Box align="center" my="20">
          <Grid
            display={{
              base: "grid",
              md: "grid",
              lg: "grid",
              sm: "block",
              xs: "block",
            }}
            templateColumns="repeat(2,1fr)"
            maxW="3xl"
            gap="20"
          >
            {productCardDetails.map(
              (item, index) =>
                item?.stack && (
                  <Stack
                    key={index}
                    spacing="3"
                    align="center"
                    mt={{ md: 0, lg: 0, sm: 10, xs: 10 }}
                  >
                    <Box
                      w="60px"
                      h="60px"
                      borderRadius="full"
                      align="center"
                      bg={item?.bgColor}
                      mb="2"
                    >
                      <Icon mt="5" w="5" h="5">
                        {item?.svgIcon}
                      </Icon>
                    </Box>
                    <Heading fontSize="xl">{item?.title}</Heading>
                    <Text fontSize="sm">{item?.description}</Text>
                  </Stack>
                )
            )}
          </Grid>
        </Box>
      </BaseLayout>
      <Skills />
      <BaseLayout mt="24">
        <Heading
          fontSize={{
            base: "5xl",
            md: "5xl",
            lg: "5xl",
            sm: "3xl",
            xs: "3xl",
          }}
          fontWeight="bold"
          textAlign="center"
        >
          Product development, the easy way.
        </Heading>
        <Text
          textAlign="center"
          fontSize="md"
          my="5"
          mx={{ lg: 60, md: 60, sm: 0, xs: 0 }}
        >
          I provide you the following perks for your product development
          process, and more.
        </Text>
        <Box align="center" my="10">
          <Grid
            display={{
              base: "grid",
              md: "grid",
              lg: "grid",
              sm: "block",
              xs: "block",
            }}
            templateColumns="repeat(2,1fr)"
            gap="14"
            maxW="2xl"
          >
            {productCardDetails.map(
              (item, index) =>
                !item?.stack && (
                  <Stack
                    key={index}
                    spacing="3"
                    align="center"
                    mt={{ md: 0, lg: 0, sm: 10, xs: 10 }}
                  >
                    <Box
                      w="60px"
                      h="60px"
                      borderRadius="full"
                      align="center"
                      bg={item.bgColor}
                      mb="2"
                    >
                      <Icon mt="5" w="5" h="5">
                        {item?.svgIcon}
                      </Icon>
                    </Box>
                    <Heading fontSize="xl">{item?.title}</Heading>
                    <Text fontSize="sm">{item?.description}</Text>
                  </Stack>
                )
            )}
          </Grid>
        </Box>
      </BaseLayout>
      <Timeline />
    </React.Fragment>
  );
};

export default Home;
