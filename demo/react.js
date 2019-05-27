import React, { useState, useCallback } from 'react';
import calculate from '../logic/calculate';
import './App.css';
import ButtonPanel from './ButtonPanel';
import Display from './Display';

function App() {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = useCallback(
    buttonName => {
      setState(state => calculate(state, buttonName));
    },
    [setState],
  );

  return (
    <div className="component-app">
      Tacos
      <Display value={state.next || state.total || '0'} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  );
}

export default App;
