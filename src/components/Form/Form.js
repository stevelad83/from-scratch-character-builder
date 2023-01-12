import React from 'react';
import Select from './Select.js';

export default function Form({ head, shirt, pants }) {
  return (
    <div className="form">
      <Select label="Head" options={['bird', 'duck', 'dog']} value={head} />
      <Select label="Shirt" options={['white', 'black', 'rainbow']} value={head} />
      <Select label="Pants" options={['trousers', 'gown', 'kilt']} value={head} />
    </div>
  );
}
