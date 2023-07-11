import React, { useState } from "react";
import NextLink from "next/link";
import ColorModeSwitcher from "../../utils/ThemeToggleButton";
import {
  Box,
  Flex,
  Stack,
  Button,
  ButtonGroup,
  IconButton,
  Image,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import NavItems from "./NavItems";
import CollapseMenu from "./CollapseMenu";
import BaseLayout from "../Wrapper/BaseLayout";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <React.Fragment>
      <BaseLayout px="0" pt="0">
        <Box
          position="fixed"
          top="0"
          zIndex="10"
          maxW="1536"
          w="100%"
          px={{ md: 20, lg: 20, sm: 5 }}
        >
          <Flex
            backdropFilter="blur(7px)"
            border="none"
            minH="60px"
            py={{ base: 3, md: 3, lg: 3, sm: 3, xs: 4 }}
            px={{ base: 4, md: 7 }}
            alignSelf="center"
          >
            <Stack flex={{ base: 1, md: 1 }} direction="row" align="center">
              <NextLink
                href="/"
                style={{ textDecoration: "none", cursor: "pointer" }}
              >
                <Image
                  src="https://ik.imagekit.io/ayushsoni1010/Logo/logo_QMXL5sBnF.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1665559064546"
                  alt="Brand Logo"
                  w={50}
                  h={50}
                  cursor="pointer"
                />
              </NextLink>
            </Stack>
            <NavItems />
            <Stack
              flex={{ base: 1, md: 1 }}
              justify="end"
              direction="row"
              align="center"
              spacing="3"
              mx={{
                base: 0,
              }}
            >
              <ColorModeSwitcher
                justifySelf="flex-end"
                display={{
                  base: "none",
                  md: "inline-flex",
                  sm: "inline-flex",
                  xs: "inline-flex",
                }}
                _focus={{ boxShadow: "outline" }}
              />
              <Box display={{ md: "none", lg: "none", sm: "flex", xs: "flex" }}>
                <IconButton
                  variant="outline"
                  icon={<FiMenu />}
                  colorScheme="teal"
                  onClick={handleToggle}
                  border="2px"
                  aria-label={"Hamburger Menu"}
                  _focus={{ boxShadow: "outline" }}
                />
              </Box>
              <ButtonGroup
                display={{ base: "flex", md: "flex", sm: "none", xs: "none" }}
              >
                <Button
                  as="a"
                  target="_blank"
                  href="/resume"
                  border="2px"
                  variant="outline"
                  size="md"
                  colorScheme="teal"
                >
                  Resume
                </Button>
                <Button
                  colorScheme="teal"
                  target="_blank"
                  as="a"
                  href="https://cal.com/ayushsoni1010/"
                  variant="solid"
                  size="md"
                  bgGradient="linear(to-r, teal.500, green.400)"
                >
                  Schedule a Meeting
                </Button>
              </ButtonGroup>
            </Stack>
          </Flex>
          <CollapseMenu isOpen={isOpen} setOpen={handleToggle} />
        </Box>
      </BaseLayout>
    </React.Fragment>
  );
};

export default Header;
