import React from 'react';

import DigitalClock from './components/DigitalClock';
import CountDown from './components/CountDown';

const App = () => {
  return (
    <div className="App">
      <DigitalClock />
      <CountDown />
    </div>
  );
};

export default App;
