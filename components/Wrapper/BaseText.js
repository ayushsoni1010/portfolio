import { Flex, Icon, IconButton, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Header from "../Header";

const BaseText = ({ firstTitle, secondTitle, textIcon }) => {
  return (
    <React.Fragment>
      <Flex my={{ base: 0, md: 0, lg: 0, sm: 10, xs: 10 }}>
        <VStack align="start" position="relative">
          <Text fontSize="7xl" fontWeight="900" zIndex="5">
            {firstTitle}
          </Text>
          <Text
            fontSize="5xl"
            fontWeight="900"
            color="teal.400"
            position="absolute"
            top="45"
          >
            {secondTitle}
          </Text>
        </VStack>
        <Image src={textIcon} alt="AboutMe" />
      </Flex>
    </React.Fragment>
  );
};

export default BaseText;
