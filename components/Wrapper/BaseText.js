import { Flex, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

const BaseText = ({ firstTitle, secondTitle, textIcon, ...props }) => {
  return (
    <React.Fragment>
      <Flex my={{ base: 0, md: 0, lg: 0, sm: 10, xs: 12 }} {...props}>
        <VStack align="start" position="relative">
          <Text
            fontSize={{
              base: "7xl",
              lg: "7xl",
              md: "7xl",
              sm: "6xl",
              xs: "6xl",
            }}
            fontWeight="900"
            zIndex="5"
          >
            {firstTitle}
          </Text>
          <Text
            fontSize={{
              base: "5xl",
              lg: "5xl",
              md: "5xl",
              sm: "4xl",
              xs: "4xl",
            }}
            fontWeight="900"
            color="teal.400"
            position="absolute"
            top="45"
          >
            {secondTitle}
          </Text>
        </VStack>
        <Image
          src={textIcon}
          w={{ lg: 120, md: 120, sm: 100, xs: 100 }}
          h={{ lg: 120, md: 120, sm: 100, xs: 100 }}
          alt="AboutMe"
        />
      </Flex>
    </React.Fragment>
  );
};

export default BaseText;
