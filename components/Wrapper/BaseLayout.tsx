import React from "react";
import { Box } from "@chakra-ui/react";

const BaseLayout = ({ children, ...props }) => {
  return (
    <React.Fragment>
      <Box
        px={{ base: "6", md: "6", lg: "20", sm: "10", xl: "28" }}
        pb="0"
        pt={{ base: "8", sm: "16", md: "20" }}
        {...props}
        mx="auto"
        maxW="1536"
      >
        {children}
      </Box>
    </React.Fragment>
  );
};

export default BaseLayout;
