import React from "react";
import NextLink from "next/link";
import { linkDetails } from "./__linkDetails";
import { HStack, Button, ButtonGroup } from "@chakra-ui/react";

const NavItems = () => {
  return (
    <React.Fragment>
      <HStack
        display={{ base: "flex", md: "flex", sm: "none" }}
        flexDir={"row"}
      >
        <ButtonGroup isAttached alignSelf="center">
          {linkDetails.map((item, index) => (
            <NextLink key={index} href={item.link} passHref>
              <Button variant={"ghost"} size="md" colorScheme="teal">
                {item.name}
              </Button>
            </NextLink>
          ))}
        </ButtonGroup>
      </HStack>
    </React.Fragment>
  );
};

export default NavItems;
