import React, { useState } from 'react';
import './App.css';
import Form from './components/Form/Form.js';
// import Stats from './components/Stats';
import Avatar from './components/Avatar/Avatar.js';

function App() {
  const [head, setHead] = useState('dog');
  // const [headCount, setHeadCount] = useState(0);

  const handleChange = (type, value) => {
    if (type === 'head') {
      setHead(value);
      // setHeadCount(headCount + 1);
    }
  };

  return (
    <main className="App">
      <h1>Character Designer</h1>
      <section className="container">
        <div className="left">
          <Form {...{ head, handleChange }} />

          {/* <Stats /> */}
        </div>
        <div className="right">
          <Avatar {...{ head }} />
        </div>
      </section>
    </main>
  );
}

export default App;
