import React from "react";
import {
  Box,
  Flex,
  Divider,
  Grid,
  Text,
  Link,
  Heading,
  Tag,
  useColorModeValue,
  HStack,
  Icon,
  VStack,
} from "@chakra-ui/react";
import Header from "../components/Header";
import BaseLayout from "../components/Wrapper/BaseLayout";
import BaseText from "../components/Wrapper/BaseText";
import Seo from "../components/Seo";
import Footer from "../components/Footer";
import experiencesDetails from "../data/experience/data.json";

import { MdVerified } from "react-icons/md";

const Experience = () => {
  return (
    <React.Fragment>
      <Seo title="Experience" />
      <Box>
        <header>
          <Header />
        </header>
        <main>
          <BaseLayout>
            <BaseText
              firstTitle="Experience"
              secondTitle="Products"
              textIcon="https://ik.imagekit.io/ayushsoni1010/Website/projects?ik-sdk-version=javascript-1.4.3&updatedAt=1669666353424"
            />
            <Box
              my="20"
              display={{
                base: "inherit",
                lg: "inherit",
                md: "inherit",
                sm: "none",
                xs: "none",
              }}
            >
              {experiencesDetails.map((item, index) => {
                return (
                  <Grid
                    key={index}
                    display="grid"
                    gridTemplateColumns={{
                      base: "150px 1px 1fr",
                      md: "150px 1px 1fr",
                      lg: "150px 1px 1fr",
                      sm: "150px 1px 1fr",
                      xs: "150px 1px 1fr",
                    }}
                    flexDirection="column"
                    gridColumnGap="80px"
                    gridRowGap="20px"
                  >
                    <Box alignSelf="center">
                      <Text textAlign={"left"}>{item.start_date}</Text>
                      <Text textAlign={"left"}>{item.end_date}</Text>
                      {item.end_date === "Present" ? (
                        <Text textAlign={"left"}>
                          {new Date().getMonth(item.start_date.split(" ")[0]) +
                            1 -
                            new Date().getMonth()}{" "}
                          months
                        </Text>
                      ) : (
                        <Text textAlign={"left"}>{item.duration}</Text>
                      )}
                    </Box>
                    <Box position="relative">
                      <Divider
                        variant="dashed"
                        orientation="vertical"
                        style={{
                          borderWidth: "1px",
                          borderColor: "teal",
                        }}
                      />
                      <Text
                        w="20px"
                        h="20px"
                        boxShadow="base"
                        borderRadius="full"
                        backgroundColor="black"
                        position="absolute"
                        top="45%"
                        right="-8.5px"
                        bgGradient="linear(to-tr, teal.500, green.400)"
                      ></Text>
                    </Box>
                    <Box
                      borderRadius="base"
                      p={{ base: 5, lg: 5, md: 5, sm: 4, xs: 4 }}
                      // pl={{ base: 14, lg: 14, md: 14, sm: 14, xs: 14 }}
                      position="relative"
                      // eslint-disable-next-line react-hooks/rules-of-hooks
                      bgColor={useColorModeValue("white", "gray.700")}
                      boxShadow="outline"
                      transition={"ease-in-out"}
                      transitionDuration="0.5s"
                      _hover={{ boxShadow: "2xl" }}
                      my="4"
                    >
                      <HStack>
                        <Heading fontSize="lg">{item.role}</Heading>
                        <Icon
                          as={MdVerified}
                          // eslint-disable-next-line react-hooks/rules-of-hooks
                          color={useColorModeValue("teal", "white")}
                        />
                      </HStack>
                      <Link isExternal={true} href={item.company_url} mt="2">
                        <Text
                          fontSize="md"
                          textAlign="left"
                          fontWeight="bold"
                          // eslint-disable-next-line react-hooks/rules-of-hooks
                          color={useColorModeValue("teal", "teal.200")}
                        >
                          {item.company}
                        </Text>
                      </Link>
                      <Text>{item.location + " (" + item.work_type + ")"}</Text>
                      <VStack wrap={"wrap"} mt="2" alignItems="flex-start">
                        {item.role_description.map((item, i) => {
                          return (
                            <HStack key={i}>
                              <Text>{"●"}</Text>
                              <Text>{item}</Text>
                            </HStack>
                          );
                        })}
                      </VStack>
                      <Flex
                        wrap="wrap"
                        direction="row"
                        gap={2}
                        mt="4"
                        justify="left"
                      >
                        {item.tech_stack.map((tag, i) => {
                          return (
                            <Tag key={i} size="lg">
                              {tag}
                            </Tag>
                          );
                        })}
                      </Flex>
                    </Box>
                  </Grid>
                );
              })}
            </Box>
            <Box
              my="20"
              display={{
                base: "none",
                lg: "none",
                md: "none",
                sm: "inherit",
                xs: "inherit",
              }}
            >
              {experiencesDetails.map((item, index) => {
                return (
                  <Flex key={index} gap="10">
                    <Box position="relative">
                      <Divider
                        variant="dashed"
                        orientation="vertical"
                        style={{
                          borderWidth: "1px",
                          borderColor: "teal",
                        }}
                      />
                      <Text
                        w="20px"
                        h="20px"
                        boxShadow="base"
                        borderRadius="full"
                        backgroundColor="black"
                        position="absolute"
                        top={index === 0 ? "13%" : "7.5%"}
                        right="-8.5px"
                        bgGradient="linear(to-tr, teal.500, green.400)"
                      ></Text>
                    </Box>
                    <Flex
                      display={{
                        base: "none",
                        lg: "none",
                        md: "none",
                        sm: "flex",
                        xs: "flex",
                      }}
                      flexDirection="column"
                      mt={10}
                    >
                      <Box alignSelf="left">
                        <Text textAlign={"left"}>
                          {item.start_date + " -- " + item.end_date}
                        </Text>
                        <Text textAlign={"left"}>{}</Text>
                        {item.end_date === "Present" ? (
                          <Text textAlign={"left"}>
                            {new Date().getMonth(
                              item.start_date.split(" ")[0]
                            ) +
                              1 -
                              new Date().getMonth()}{" "}
                            months
                          </Text>
                        ) : (
                          <Text textAlign={"left"}>{item.duration}</Text>
                        )}
                      </Box>
                      <Box
                        borderRadius="base"
                        p={{ base: 5, lg: 5, md: 5, sm: 4, xs: 4 }}
                        // pl={{ base: 14, lg: 14, md: 14, sm: 14, xs: 14 }}
                        position="relative"
                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        bgColor={useColorModeValue("white", "gray.700")}
                        boxShadow="outline"
                        transition={"ease-in-out"}
                        transitionDuration="0.5s"
                        _hover={{ boxShadow: "2xl" }}
                        my="4"
                      >
                        <HStack>
                          <Heading fontSize="lg">{item.role}</Heading>
                          <Icon
                            as={MdVerified}
                            // eslint-disable-next-line react-hooks/rules-of-hooks
                            color={useColorModeValue("teal", "white")}
                          />
                        </HStack>
                        <Link isExternal={true} href={item.company_url} mt="2">
                          <Text
                            fontSize="md"
                            textAlign="left"
                            fontWeight="bold"
                            // eslint-disable-next-line react-hooks/rules-of-hooks
                            color={useColorModeValue("teal", "teal.200")}
                          >
                            {item.company}
                          </Text>
                        </Link>
                        <Text>
                          {item.location + " (" + item.work_type + ")"}
                        </Text>
                        <VStack wrap={"wrap"} mt="2" alignItems="flex-start">
                          {item.role_description.map((item, i) => {
                            return (
                              <HStack key={i} alignItems={"baseline"}>
                                <Text>{"●"}</Text>
                                <Text>{item}</Text>
                              </HStack>
                            );
                          })}
                        </VStack>
                        <Flex
                          wrap="wrap"
                          direction="row"
                          gap={2}
                          mt="4"
                          justify="left"
                        >
                          {item.tech_stack.map((tag, i) => {
                            return (
                              <Tag key={i} size="lg">
                                {tag}
                              </Tag>
                            );
                          })}
                        </Flex>
                      </Box>
                    </Flex>
                  </Flex>
                );
              })}
            </Box>
          </BaseLayout>
        </main>
        <footer>
          <Footer />
        </footer>
      </Box>
    </React.Fragment>
  );
};

export default Experience;
