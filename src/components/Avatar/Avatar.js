import React from 'react';
import './Avatar.css';

export default function Avatar({ head, middle, pants }) {
  return (
    <div className="avatar">
      <div className="head-img" style={{ backgroundImage: `url(./${head}-head.png)` }}></div>
      <div className="middle-img" style={{ backgroundImage: `url(./${middle}-middle.png)` }}></div>
      <div className="pants-img" style={{ backgroundImage: `url(./${pants}-pants.png)` }}></div>
    </div>
  );
}
