import React, { useEffect, useState } from 'react';
import clock from '../public/clock-svgrepo-com.svg';
import { Image } from '@chakra-ui/react';
import BoxFlex from './BoxFlex';
import TextUI from './Text';

const Digitalclock = () => {
  const [clockState, setClockState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 1000);
  }, []);
  return (
    <BoxFlex>
      <Image src={clock} alt="icon digital clock" width="2rem" />
      <TextUI size="1.5rem">{clockState}</TextUI>
    </BoxFlex>
  );
};

export default Digitalclock;
