import { useState, useEffect } from 'react';
import React from 'react';
import BoxFlex from './BoxFlex';
import MiniBox from './MiniBox';
import { ButtonGroup, Button } from '@chakra-ui/react';
import TextUI from './Text';

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
      <MiniBox direction="row">
        <TextUI>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</TextUI>
        <TextUI>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}:</TextUI>
        <TextUI>{('0' + Math.floor((time / 10) % 100)).slice(-2)}</TextUI>
      </MiniBox>
      <ButtonGroup>
        {!timerOn && time === 0 && (
          <Button bord onClick={() => setTimerOn(true)}>
            Start
          </Button>
        )}
        {timerOn && <Button onClick={() => setTimerOn(false)}>Stop</Button>}
        {!timerOn && time > 0 && <Button onClick={() => setTimerOn(true)}>Resume</Button>}
        {!timerOn && time > 0 && <Button onClick={() => setTime(0)}>Reset</Button>}
      </ButtonGroup>
    </BoxFlex>
  );
};

export default StopWatch;
