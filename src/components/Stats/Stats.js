import React from 'react';

export default function Stats({ headCount, middleCount, pantsCount }) {
  return (
    <div>
      <p>
        You have changed your head {headCount} times, middle {middleCount} times, and pants
        {pantsCount} times.
      </p>
    </div>
  );
}
