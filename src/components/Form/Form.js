import React from 'react';
import Select from './Select.js';

export default function Form({ head, middle, pants, input, handleChange }) {
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
        <input type="text" value={input} />
        <label>Add a catchphrase</label>
        <button>Add</button>
      </div>
    </div>
  );
}
