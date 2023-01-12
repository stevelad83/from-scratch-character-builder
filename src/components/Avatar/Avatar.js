import React from 'react';
import './Avatar.css';

export default function Avatar({ head }) {
  return (
    <div className="avatar">
      <div
        className="head-img"
        style={{ backgroundImage: `url(./${head}-head.png)`, height: '100px' }}
      ></div>
    </div>
  );
}
