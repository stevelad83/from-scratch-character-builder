import React, { useState } from 'react';
import './App.css';
import Form from './components/Form/Form.js';
// import Stats from './components/Stats';
import Avatar from './components/Avatar/Avatar.js';

function App() {
  const [head, setHead] = useState('dog');
  const [middle, setMiddle] = useState('blue');
  // const [headCount, setHeadCount] = useState(0);

  const handleChange = (type, value) => {
    if (type === 'head') {
      setHead(value);
      // setHeadCount(headCount + 1);
    }
    if (type === 'middle') {
      setMiddle(value);
      // setHeadCount(headCount + 1);
    }
  };

  return (
    <main className="App">
      <h1>Character Designer</h1>
      <section className="container">
        <div className="left">
          <Form {...{ head, middle, handleChange }} />

          {/* <Stats /> */}
        </div>
        <div className="right">
          <Avatar {...{ head, middle }} />
        </div>
      </section>
    </main>
  );
}

export default App;
