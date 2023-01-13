import React, { useState } from 'react';
import './App.css';
import Form from './components/Form/Form.js';
import Stats from './components/Stats/Stats.js';
import Avatar from './components/Avatar/Avatar.js';

function App() {
  const [head, setHead] = useState('dog');
  const [middle, setMiddle] = useState('blue');
  const [pants, setPants] = useState('white');
  const [headCount, setHeadCount] = useState(0);
  const [middleCount, setMiddleCount] = useState(0);
  const [pantsCount, setPantsCount] = useState(0);

  const handleChange = (type, value) => {
    if (type === 'head') {
      setHead(value);
      setHeadCount(headCount + 1);
      // console.log('headCount', headCount);
    }
    if (type === 'middle') {
      setMiddle(value);
      setMiddleCount(middleCount + 1);
    }
    if (type === 'pants') {
      setPants(value);
      setPantsCount(pantsCount + 1);
    }
  };

  return (
    <main className="App">
      <h1>Character Designer</h1>
      <section className="container">
        <div className="left">
          <Form
            {...{
              head,
              middle,
              pants,
              setHead,
              setMiddle,
              setPants,
              handleChange,
              setHeadCount,
              setMiddleCount,
              setPantsCount,
            }}
          />

          <Stats {...{ headCount, middleCount, pantsCount }} />
        </div>
        <div className="right">
          <Avatar {...{ head, middle, pants }} />
        </div>
      </section>
    </main>
  );
}

export default App;
