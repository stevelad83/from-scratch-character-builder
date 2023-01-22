import React from 'react';
import './Stats.css';

export default function Stats({ headCount, middleCount, pantsCount, catchphrases }) {
  return (
    <div className="stats-div">
      <p>
        You have changed your head {headCount} times, middle {middleCount} times, and pants{' '}
        {pantsCount} times.
      </p>
      <ul className="catchphrases">
        {catchphrases.map((catchphrase) => (
          <li className="catchphrase" key={catchphrase}>
            {catchphrase}
          </li>
        ))}
      </ul>
    </div>
  );
}
