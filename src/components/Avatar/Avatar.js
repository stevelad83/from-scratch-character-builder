import React from 'react';
import './Avatar.css';

export default function Avatar({ head, middle, pants }) {
  return (
    <div className="avatar">
      <img className="head-img" src={`./${head}-head.png`} />
      <img className="middle-img" src={`./${middle}-middle.png`} />
      <img className="pants-img" src={`./${pants}-pants.png`} />
    </div>
  );
}
