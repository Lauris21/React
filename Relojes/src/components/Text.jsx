import { Text } from '@chakra-ui/react';
import React from 'react';
const TextUI = ({ children, size = '1.5rem' }) => {
  return (
    <Text color="#BEFFE8CC" fontSize={size}>
      {children}
    </Text>
  );
};

export default TextUI;
