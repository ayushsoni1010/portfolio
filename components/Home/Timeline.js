import {
  Box,
  Divider,
  Grid,
  Heading,
  IconButton,
  Text,
  Link,
  Flex,
  Tag,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import BaseLayout from "../Wrapper/BaseLayout";
import BaseText from "../Wrapper/BaseText";
import { timelineDetails } from "./__timelineDetails";

const Timeline = () => {
  return (
    <React.Fragment>
      <BaseLayout id="timeline">
        <BaseText
          id="timeline-header-wrapper"
          firstTitle="Featured"
          secondTitle="Timeline"
          textIcon="https://ik.imagekit.io/ayushsoni1010/Website/timeline?ik-sdk-version=javascript-1.4.3&updatedAt=1669666586717"
          topSpacing="2"
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
          id="timeline-wrapper"
        >
          {timelineDetails.map((item, index) => {
            return index % 2 ? (
              <Grid
                key={index}
                display="grid"
                gridTemplateColumns={{
                  base: "1fr 2px 1fr",
                  md: "1fr 2px 1fr",
                  lg: "1fr 2px 1fr",
                  sm: "none",
                  xs: "none",
                }}
                flexDirection="column"
                gridColumnGap="80px"
                gridRowGap="20px"
              >
                <Box alignSelf="center">
                  <Text
                    textAlign={{
                      base: "right",
                      md: "right",
                      lg: "right",
                      sm: "left",
                      xs: "left",
                    }}
                  >
                    {item.timeline_date}
                  </Text>
                  <Link
                    textAlign={{
                      base: "right",
                      md: "right",
                      lg: "right",
                      sm: "left",
                      xs: "left",
                    }}
                    href={item.timeline_event_link}
                    isExternal={true}
                  >
                    <Text>{item.timeline_hostedby}</Text>
                  </Link>
                  <Text
                    textAlign={{
                      base: "right",
                      md: "right",
                      lg: "right",
                      sm: "left",
                      xs: "left",
                    }}
                  >
                    {item.timeline_place}
                  </Text>
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
                    top="47%"
                    right="-8.5px"
                    bgGradient="linear(to-tr, teal.500, green.400)"
                  ></Text>
                </Box>
                <Box
                  borderRadius="base"
                  p={{ base: 5, lg: 5, md: 5, sm: 4, xs: 4 }}
                  pl={{ base: 14, lg: 14, md: 14, sm: 14, xs: 14 }}
                  position="relative"
                  // eslint-disable-next-line react-hooks/rules-of-hooks
                  bgColor={useColorModeValue("white", "gray.700")}
                  boxShadow="outline"
                  transition={"ease-in-out"}
                  transitionDuration="0.5s"
                  _hover={{ boxShadow: "2xl" }}
                >
                  <Heading fontSize="lg">{item.timeline_title}</Heading>
                  <Text fontSize="md" textAlign="left" mt="2">
                    {item.timeline_description}
                  </Text>
                  <Flex
                    wrap="wrap"
                    direction="row"
                    gap={2}
                    mt="4"
                    justify="left"
                  >
                    {item.timeline_tags.map((tag, i) => {
                      return (
                        <Tag key={i} size="lg">
                          {tag.tag}
                        </Tag>
                      );
                    })}
                  </Flex>
                  <Box
                    position="absolute"
                    w={{ base: 14, lg: 14, md: 14, sm: 10, xs: 10 }}
                    h={{ base: 14, lg: 14, md: 14, sm: 10, xs: 10 }}
                    bgColor={item.timeline_card_color}
                    top={{ base: "12%", lg: "12%", md: "12%", sm: 6, xs: 6 }}
                    left={{ base: -7, lg: -7, md: -7, sm: 1, xs: 1 }}
                    borderRadius={{
                      base: "20px 0 20px 0",
                      lg: "20px 0 20px 0",
                      md: "20px 0 20px 0",
                      sm: "15px 0 15px 0",
                      xs: "15px 0 15px 0",
                    }}
                    boxShadow="2xl"
                    transition={"ease-in-out"}
                    transitionDuration="0.5s"
                    _hover={{ boxShadow: "outline" }}
                    align="center"
                  >
                    <IconButton
                      as="a"
                      fontSize={{
                        base: "3xl",
                        lg: "3xl",
                        md: "3xl",
                        sm: "2xl",
                        xs: "2xl",
                      }}
                      aria-label={`${item.timeline_title}`}
                      variant="unstyled"
                      color="white"
                      colorScheme="gray"
                      boxShadow="inner"
                      position="relative"
                      top={{ base: 3, lg: 3, md: 3, sm: 2, xs: 2 }}
                      icon={item.timeline_icon}
                    />
                  </Box>
                </Box>
              </Grid>
            ) : (
              <Grid
                key={index}
                display="grid"
                gridTemplateColumns={{
                  base: "1fr 2px 1fr",
                  md: "1fr 2px 1fr",
                  lg: "1fr 2px 1fr",
                  sm: "none",
                  xs: "none",
                }}
                gridColumn="2 / -1"
                flexDirection="column"
                gridColumnGap="80px"
                gridRowGap="20px"
                gridAutoFlow={"dense"}
              >
                <Box
                  borderRadius="base"
                  p={{ base: 5, lg: 5, md: 5, sm: 4, xs: 4 }}
                  pr={{
                    base: 14,
                    lg: 14,
                    md: 14,
                    sm: "inherit",
                    xs: "inherit",
                  }}
                  pl={{ base: "none", lg: "none", md: "none", sm: 14, xs: 14 }}
                  position="relative"
                  my="20"
                  // eslint-disable-next-line react-hooks/rules-of-hooks
                  bgColor={useColorModeValue("white", "gray.700")}
                  boxShadow="outline"
                  transition={"ease-in-out"}
                  transitionDuration="0.5s"
                  _hover={{ boxShadow: "2xl" }}
                >
                  <Heading
                    fontSize="lg"
                    textAlign={{
                      base: "right",
                      md: "right",
                      lg: "right",
                      sm: "left",
                      xs: "left",
                    }}
                  >
                    {item.timeline_title}
                  </Heading>
                  <Text
                    fontSize="md"
                    textAlign={{
                      base: "right",
                      md: "right",
                      lg: "right",
                      sm: "left",
                      xs: "left",
                    }}
                    mt="2"
                  >
                    {item.timeline_description}
                  </Text>
                  <Flex
                    wrap="wrap"
                    direction="row"
                    gap={2}
                    mt="4"
                    justify={{
                      base: "right",
                      md: "right",
                      lg: "right",
                      sm: "left",
                      xs: "left",
                    }}
                  >
                    {item.timeline_tags.map((tag, i) => {
                      return (
                        <Tag key={i} size="lg">
                          {tag.tag}
                        </Tag>
                      );
                    })}
                  </Flex>
                  <Box
                    display={{
                      base: "inherit",
                      lg: "inherit",
                      md: "inherit",
                      sm: "none",
                      xs: "none",
                    }}
                    position="absolute"
                    w={{ base: 14, lg: 14, md: 14, sm: 10, xs: 10 }}
                    h={{ base: 14, lg: 14, md: 14, sm: 10, xs: 10 }}
                    bgColor={item.timeline_card_color}
                    top={{ base: "12%", lg: "12%", md: "12%", sm: 6, xs: 6 }}
                    right={{ base: -7, lg: -7, md: -7, sm: "none", xs: "none" }}
                    borderRadius={{
                      base: "20px 0 20px 0",
                      lg: "20px 0 20px 0",
                      md: "20px 0 20px 0",
                      sm: "15px 0 15px 0",
                      xs: "15px 0 15px 0",
                    }}
                    boxShadow="2xl"
                    transition={"ease-in-out"}
                    transitionDuration="0.5s"
                    _hover={{ boxShadow: "outline" }}
                    align="center"
                  >
                    <IconButton
                      as="a"
                      fontSize={{
                        base: "3xl",
                        lg: "3xl",
                        md: "3xl",
                        sm: "2xl",
                        xs: "2xl",
                      }}
                      aria-label={`${item.timeline_title}`}
                      variant="unstyled"
                      color="white"
                      colorScheme="gray"
                      boxShadow="inner"
                      position="relative"
                      top={{ base: 3, lg: 3, md: 3, sm: 2, xs: 2 }}
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
                    top="48%"
                    right="-8.5px"
                    bgGradient="linear(to-tr, teal.500, green.400)"
                  />
                </Box>
                <Box alignSelf="center">
                  <Text>{item.timeline_date}</Text>
                  <Link href={item.timeline_event_link} isExternal={true}>
                    <Text>{item.timeline_hostedby}</Text>
                  </Link>
                  <Text>{item.timeline_place}</Text>
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
          {timelineDetails.map((item, index) => {
            return (
              <Flex key={index} gap="10">
                <Box position="relative">
                  <Divider
                    variant="dashed"
                    orientation="vertical"
                    style={{
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
                    top="15%"
                    right="-8.5px"
                    bgGradient="linear(to-tr, teal.500, green.400)"
                  />
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
                  gap="4"
                  my="10"
                >
                  <Box alignSelf="left">
                    <Text
                      textAlign={{
                        base: "right",
                        md: "right",
                        lg: "right",
                        sm: "left",
                        xs: "left",
                      }}
                    >
                      {item.timeline_date}
                    </Text>
                    <Link
                      textAlign={{
                        base: "right",
                        md: "right",
                        lg: "right",
                        sm: "left",
                        xs: "left",
                      }}
                      href={item.timeline_event_link}
                      isExternal={true}
                    >
                      <Text>{item.timeline_hostedby}</Text>
                    </Link>
                    <Text
                      textAlign={{
                        base: "right",
                        md: "right",
                        lg: "right",
                        sm: "left",
                        xs: "left",
                      }}
                    >
                      {item.timeline_place}
                    </Text>
                  </Box>

                  <Box
                    borderRadius="base"
                    p={{ base: 5, lg: 5, md: 5, sm: 4, xs: 4 }}
                    pl={{ base: 14, lg: 14, md: 14, sm: 14, xs: 14 }}
                    position="relative"
                    // eslint-disable-next-line react-hooks/rules-of-hooks
                    bgColor={useColorModeValue("white", "gray.700")}
                    boxShadow="outline"
                    transition={"ease-in-out"}
                    transitionDuration="0.5s"
                    _hover={{ boxShadow: "2xl" }}
                  >
                    <Heading fontSize="lg">{item.timeline_title}</Heading>
                    <Text fontSize="md" textAlign="left">
                      {item.timeline_description}
                    </Text>
                    <Flex
                      wrap="wrap"
                      direction="row"
                      gap={2}
                      mt="4"
                      justify="left"
                    >
                      {item.timeline_tags.map((tag, i) => {
                        return (
                          <Tag key={i} size="md">
                            {tag.tag}
                          </Tag>
                        );
                      })}
                    </Flex>
                    <Box
                      position="absolute"
                      w={{ base: 14, lg: 14, md: 14, sm: 10, xs: 10 }}
                      h={{ base: 14, lg: 14, md: 14, sm: 10, xs: 10 }}
                      bgColor={item.timeline_card_color}
                      top={{ base: "25%", lg: "25%", md: "25%", sm: 6, xs: 6 }}
                      left={{ base: -7, lg: -7, md: -7, sm: 1, xs: 1 }}
                      borderRadius={{
                        base: "20px 0 20px 0",
                        lg: "20px 0 20px 0",
                        md: "20px 0 20px 0",
                        sm: "15px 0 15px 0",
                        xs: "15px 0 15px 0",
                      }}
                      boxShadow="2xl"
                      transition={"ease-in-out"}
                      transitionDuration="0.5s"
                      _hover={{ boxShadow: "outline" }}
                      align="center"
                    >
                      <IconButton
                        as="a"
                        fontSize={{
                          base: "3xl",
                          lg: "3xl",
                          md: "3xl",
                          sm: "2xl",
                          xs: "2xl",
                        }}
                        aria-label={`${item.timeline_title}`}
                        variant="unstyled"
                        color="white"
                        colorScheme="gray"
                        boxShadow="inner"
                        position="relative"
                        top={{ base: 3, lg: 3, md: 3, sm: 2, xs: 2 }}
                        icon={item.timeline_icon}
                      />
                    </Box>
                  </Box>
                </Flex>
              </Flex>
            );
          })}
        </Box>
      </BaseLayout>
    </React.Fragment>
  );
};

export default Timeline;
