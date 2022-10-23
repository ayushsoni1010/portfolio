import { useColorModeValue, IconButton, ButtonGroup } from "@chakra-ui/react";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { connectionLinks } from "./__connectLinks";

const SocialProfiles = (props) => {
  return (
    <React.Fragment>
      <AnimatePresence initial={false}>
        <ButtonGroup>
          {connectionLinks.map((item, index) => (
            <motion.div
              key={index}
              style={{ display: "inline-block" }}
              initial={{ y: 5, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              whileHover={{ y: -5, opacity: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <IconButton
                as="a"
                href={item.link}
                target="_blank"
                fontSize="xl"
                aria-label={`Switch to ${item.name} mode`}
                variant="solid"
                colorScheme="gray"
                boxShadow="inner"
                // eslint-disable-next-line react-hooks/rules-of-hooks
                color={useColorModeValue("black", "white")}
                icon={item.icon}
                {...props}
              />
            </motion.div>
          ))}
        </ButtonGroup>
      </AnimatePresence>
    </React.Fragment>
  );
};

export default SocialProfiles;
