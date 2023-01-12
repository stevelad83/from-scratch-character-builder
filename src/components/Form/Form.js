import React from 'react';
import Select from './Select.js';

export default function Form({ head, shirt, pants, input }) {
  return (
    <div className="form">
      <Select label="Head" options={['bird', 'duck', 'dog']} value={head} />
      <Select label="Shirt" options={['white', 'black', 'rainbow']} value={shirt} />
      <Select label="Pants" options={['trousers', 'gown', 'kilt']} value={pants} />
      <div className="form-control">
        <input type="text" value={input} />
        <label>Add a catchphrase</label>
        <button>Add</button>
      </div>
    </div>
  );
}
