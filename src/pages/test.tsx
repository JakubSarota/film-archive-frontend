import React, { useState } from 'react';

export default function test() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Kliknięto {count} razy</p>
      <button onClick={() => setCount(count + 1)}>
        Kliknij mnie
      </button>
    </div>
  );
}
