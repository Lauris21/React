import { Box } from '@chakra-ui/react';
import React from 'react';

const BoxFlex = ({ children }) => {
  return (
    <Box
      min-width="60%"
      height="auto"
      justifyContent="center"
      gap="1.5rem"
      alignItems="center"
      display="flex"
      flexDirection="column"
      padding="1rem"
      border="1px solid #CDF6E850"
      backgroundColor="#0f0026A6"
      borderRadius="21px"
    >
      {children}
    </Box>
  );
};
export default BoxFlex;
