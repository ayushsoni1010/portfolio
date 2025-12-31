import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";

interface BaseLayoutProps extends Omit<BoxProps, "children"> {
  children: React.ReactNode;
}

/**
 * Base layout wrapper component for consistent spacing and max-width
 * Provides responsive padding and centers content with max-width constraint
 */
const BaseLayout: React.FC<BaseLayoutProps> = ({ children, ...props }) => {
  return (
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
  );
};

export default BaseLayout;
