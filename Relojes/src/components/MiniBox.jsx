import { Box } from '@chakra-ui/react';
import React from 'react';

const MiniBox = ({ children, direction = 'column' }) => {
  return (
    <Box
      display="flex"
      flexDirection={direction}
      textAlign="center"
      border="1px solid #CDF6E850"
      backgroundColor="#0f0026A6"
      borderRadius="6px"
      padding="0.5rem"
      min-width="2.5rem"
    >
      {children}
    </Box>
  );
};
export default MiniBox;
