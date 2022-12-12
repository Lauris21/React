import React, { useEffect, useState } from 'react';
import BoxFlex from './BoxFlex';
import MiniBox from './MiniBox';
import calendary from '../public/calendar.svg';
import { Image, Box } from '@chakra-ui/react';
import TextUI from './Text';

const CountDown = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [finish, setFinish] = useState('🥳');

  useEffect(() => {
    const countDownDate = new Date('Jan 1, 2024 00:00:00').getTime();
    const x = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((distance % (1000 * 60)) / 1000));

      if (distance < 0) {
        clearInterval(x);
        setFinish('COUNTDOWN FINISHED');
      }
    }, 1000);
  }, []);

  return (
    <BoxFlex>
      <Image src={calendary} alt="icon calendary" width="2rem" />
      <Box display="flex" gap="0.5rem">
        <MiniBox>
          <TextUI>{days}</TextUI>
          <TextUI size="1rem">d</TextUI>
        </MiniBox>
        <MiniBox>
          <TextUI>{hours}</TextUI>
          <TextUI size="1rem">h</TextUI>
        </MiniBox>
        <MiniBox>
          <TextUI>{minutes}</TextUI>
          <TextUI size="1rem">m</TextUI>
        </MiniBox>
        <MiniBox>
          <TextUI>{seconds}</TextUI>
          <TextUI size="1rem">s</TextUI>
        </MiniBox>
      </Box>
      <TextUI>{finish}</TextUI>
    </BoxFlex>
  );
};

export default CountDown;
