import React from 'react';

import DigitalClock from './components/DigitalClock';
import CountDown from './components/CountDown';
import StopWatch from './components/StopWatch';
import { ChakraProvider, Flex } from '@chakra-ui/react';

const App = () => {
  return (
    <ChakraProvider>
      <Flex
        flexDirection="column"
        justifyContent="space-around"
        alignItems="center"
        height="100vh"
        backgroundColor="#0f0026"
        backgroundImage="url(https://www.transparenttextures.com/patterns/green-dust-and-scratches.png)"
        padding="2rem"
      >
        <DigitalClock />
        <CountDown />
        <StopWatch />
      </Flex>
    </ChakraProvider>
  );
};

export default App;
