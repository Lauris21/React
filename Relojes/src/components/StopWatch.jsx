import { useState, useEffect } from 'react';
import React from 'react';
import BoxFlex from './BoxFlex';
import MiniBox from './MiniBox';
import { ButtonGroup, Button, Image } from '@chakra-ui/react';
import TextUI from './Text';
import stopwatchIcon from '../public/stopwatch-svgrepo-com.svg';

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  return (
    <BoxFlex>
      <Image src={stopwatchIcon} alt="stopwatch icon" width="2rem" />
      <MiniBox direction="row">
        <TextUI>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</TextUI>
        <TextUI>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}:</TextUI>
        <TextUI>{('0' + Math.floor((time / 10) % 100)).slice(-2)}</TextUI>
      </MiniBox>
      <ButtonGroup>
        {!timerOn && time === 0 && (
          <Button
            width="4rem"
            height="4rem"
            borderRadius="50%"
            colorScheme="teal"
            onClick={() => setTimerOn(true)}
          >
            Start
          </Button>
        )}
        {timerOn && (
          <Button
            width="4rem"
            height="4rem"
            borderRadius="50%"
            colorScheme="teal"
            onClick={() => setTimerOn(false)}
          >
            Stop
          </Button>
        )}
        {!timerOn && time > 0 && (
          <Button
            width="4rem"
            height="4rem"
            borderRadius="50%"
            colorScheme="teal"
            onClick={() => setTimerOn(true)}
          >
            Play
          </Button>
        )}
        {!timerOn && time > 0 && (
          <Button
            width="4rem"
            height="4rem"
            borderRadius="50%"
            colorScheme="teal"
            onClick={() => setTime(0)}
          >
            Reset
          </Button>
        )}
      </ButtonGroup>
    </BoxFlex>
  );
};

export default StopWatch;
