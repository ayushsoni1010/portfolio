import React from 'react';
import { Box, BoxProps } from '@chakra-ui/react';

const BaseLayout = ({ children, ...props }) => {
  return (
    <React.Fragment>
      <Box
        px={{ base: '6', md: '8', lg: '24', xl: '36' }}
        pb="0"
        pt={{ base: '8', sm: '16', md: '20' }}
        {...props}
      >
        {children}
      </Box>
    </React.Fragment>
  );
};

export default BaseLayout;
