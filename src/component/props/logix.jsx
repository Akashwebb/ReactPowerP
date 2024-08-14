import React, { useState, useMemo } from 'react';

const ConditionalComponent = ({ condition }) => {
  console.log('ConditionalComponent rendered');
  return <div>{condition ? 'Condition is true' : 'Condition is false'}</div>;
};

const App = () => {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(false);

  const memoizedCondition = useMemo(() => {
    return (count % 2 === 0) || (count % 3 !== 0 && count > 4);
  }, [count]);

  const handleButtonPress = () => {
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1); 
    setOtherState(prevState => !prevState); 
  };

  return (
    <div style={{ padding: '20px' }}>
      <div>Count: {count}</div>
      <ConditionalComponent condition={memoizedCondition} />

      <button onClick={handleButtonPress}>Increment & Toggle</button>
     
    </div>
  );
};

export default App;
