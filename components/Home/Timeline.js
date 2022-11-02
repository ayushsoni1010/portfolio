import {
  Box,
  Divider,
  Grid,
  useColorModeValue,
  Heading,
  IconButton,
  Text,
} from "@chakra-ui/react";
import React from "react";
import BaseLayout from "../Wrapper/BaseLayout";
import BaseText from "../Wrapper/BaseText";
import { timelineDetails } from "./__timelineDetails";

const Timeline = () => {
  return (
    <React.Fragment>
      <BaseLayout>
        <BaseText
          firstTitle="Featured"
          secondTitle="Timeline"
          textIcon="https://ik.imagekit.io/ayushsoni1010/Website/featured-timeline_mfh--P4f5.png?ik-sdk-version=javascript-1.4.3&updatedAt=1667325001664"
        />
        <Box my="20">
          {timelineDetails.map((item, index) => {
            return index % 2 ? (
              <Grid
                key={index}
                display="grid"
                templateColumns="1fr 2px 1fr"
                gridColumnGap="80px"
              >
                <Box alignSelf="center">
                  <Text textAlign="right">{item.timeline_date}</Text>
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
                    top="40%"
                    right="-8.5px"
                    bgGradient="linear(to-tr, teal.500, green.400)"
                  ></Text>
                </Box>
                <Box
                  boxShadow="base"
                  borderRadius="base"
                  p="5"
                  pl="20"
                  position="relative"
                >
                  <Heading fontSize="lg">{item.timeline_title}</Heading>
                  <Text fontSize="md">{item.timeline_description}</Text>
                  <Box
                    position="absolute"
                    w="14"
                    h="14"
                    bgColor={item.timeline_card_color}
                    top="25%"
                    left="-7"
                    borderRadius="20px 0 20px 0"
                    boxShadow="outline"
                    transition={"ease-in-out"}
                    transitionDuration="0.5s"
                    _hover={{ boxShadow: "2xl" }}
                    align="center"
                  >
                    <IconButton
                      as="a"
                      fontSize="3xl"
                      aria-label={`${item.timeline_title}`}
                      variant="unstyled"
                      color="white"
                      colorScheme="gray"
                      boxShadow="inner"
                      position="relative"
                      top="3"
                      icon={item.timeline_icon}
                    />
                  </Box>
                </Box>
              </Grid>
            ) : (
              <Grid
                key={index}
                display="grid"
                templateColumns="1fr 2px 1fr"
                gridColumnGap="80px"
              >
                <Box
                  boxShadow="base"
                  position="relative"
                  borderRadius="base"
                  p="5"
                  pr="20"
                >
                  <Heading fontSize="lg" textAlign="right">
                    {item.timeline_title}
                  </Heading>
                  <Text fontSize="md" textAlign="right">
                    {item.timeline_description}
                  </Text>
                  <Box
                    position="absolute"
                    w="14"
                    h="14"
                    bgColor={item.timeline_card_color}
                    top="25%"
                    right="-7"
                    borderRadius="20px 0 20px 0"
                    boxShadow="outline"
                    transition={"ease-in-out"}
                    transitionDuration="0.5s"
                    _hover={{ boxShadow: "2xl" }}
                    align="center"
                  >
                    <IconButton
                      as="a"
                      fontSize="3xl"
                      aria-label={`${item.timeline_title}`}
                      variant="unstyled"
                      color="white"
                      colorScheme="gray"
                      boxShadow="inner"
                      position="relative"
                      top="3"
                      icon={item.timeline_icon}
                    />
                  </Box>
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
                    top="40%"
                    right="-8.5px"
                    bgGradient="linear(to-tr, teal.500, green.400)"
                  ></Text>
                </Box>
                <Box alignSelf="center">
                  <Text>{item.timeline_date}</Text>
                </Box>
              </Grid>
            );
          })}
        </Box>
      </BaseLayout>
    </React.Fragment>
  );
};

export default Timeline;
