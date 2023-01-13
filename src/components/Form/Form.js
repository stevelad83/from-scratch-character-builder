import React from 'react';
import Select from './Select.js';

export default function Form({ head, middle, pants, input, setInput, handleChange, handleClick }) {
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
