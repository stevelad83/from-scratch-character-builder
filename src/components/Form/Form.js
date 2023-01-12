import React from 'react';
import Select from './Select.js';

export default function Form({ head, input, handleChange }) {
  return (
    <div className="form">
      <Select
        label="Head"
        options={['bird', 'duck', 'dog']}
        value={head}
        onChange={(e) => handleChange('head', e.target.value)}
      />
      {/* <Select label="Shirt" options={['white', 'black', 'rainbow']} value={shirt} />
      <Select label="Pants" options={['trousers', 'gown', 'kilt']} value={pants} /> */}
      <div className="form-control">
        <input type="text" value={input} />
        <label>Add a catchphrase</label>
        <button>Add</button>
      </div>
    </div>
  );
}
