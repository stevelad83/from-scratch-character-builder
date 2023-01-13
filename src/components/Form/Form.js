import React from 'react';
import Select from './Select.js';
import { useState } from 'react';

export default function Form({ head, middle, pants, handleChange, setCatchphrases }) {
  const [input, setInput] = useState('');
  const handleClick = () => {
    if (!input) return;
    setCatchphrases((prevState) => {
      // console.log('prevState', prevState);
      // console.log(input);
      return [...prevState, input];
    });

    setInput('');
  };

  return (
    <div className="form">
      <Select
        label="Head"
        options={['bird', 'duck', 'dog']}
        value={head}
        onChange={(e) => handleChange('head', e.target.value)}
      />
      <Select
        label="Middle"
        options={['blue', 'dress', 'pink']}
        value={middle}
        onChange={(e) => handleChange('middle', e.target.value)}
      />
      <Select
        label="Pants"
        options={['leg', 'white', 'dog']}
        value={pants}
        onChange={(e) => handleChange('pants', e.target.value)}
      />
      <div className="form-control">
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <label>Add a catchphrase</label>
        <button onClick={handleClick}>Add</button>
      </div>
    </div>
  );
}
