import React from "react";
import Image from "next/image";
import { Box, Flex, IconButton } from "@chakra-ui/react";
import BaseLayout from "../Wrapper/BaseLayout";
import BaseText from "../Wrapper/BaseText";
import { skillDetails } from "./__skillsDetails";

const Skills = () => {
  return (
    <React.Fragment>
      <BaseLayout id="skills">
        <BaseText
          id="skills-header-wrapper"
          firstTitle="Skills"
          secondTitle="Programming"
          textIcon="https://ik.imagekit.io/ayushsoni1010/Website/skills?ik-sdk-version=javascript-1.4.3&updatedAt=1669666366824"
          leftSpacing={20}
          topSpacing={-4}
        />
        <Box
          boxShadow="2xl"
          borderRadius="3xl"
          my="10"
          bgColor="white"
          id="skills-wrapper"
        >
          <Flex
            gap={{ base: 16, lg: 16, md: 16, sm: 14, xs: 10 }}
            wrap="wrap"
            p={{ base: 10, lg: 10, md: 10, sm: 10, xs: 0 }}
            pt={{ base: 10, lg: 10, md: 10, sm: 10, xs: 10 }}
            pb={{ base: 10, lg: 10, md: 10, sm: 10, xs: 10 }}
            my={{ base: 0, lg: 0, md: 0, sm: 4, xs: 10 }}
            alignItems="center"
            justify="center"
          >
            {skillDetails.map((item) => (
              <Box key={item.key}>
                <Image
                  width="70"
                  height="70"
                  src={item.iconURL}
                  alt={item.name}
                  aria-label={item.name}
                />
              </Box>
            ))}
          </Flex>
        </Box>
      </BaseLayout>
    </React.Fragment>
  );
};
export default Skills;
