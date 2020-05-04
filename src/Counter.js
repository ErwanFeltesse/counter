import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState('');

  function handleChange(event){
    const newCount = event.target.value
    newCount===''?setCount(0):setCount(parseInt(newCount))
  }

  return (
    <div>
      <input type='text 'onClick={handleChange} value={count}/>
      <p>Le compteur est  à : {count} </p>
      <button onClick={() => setCount(count + 1)}>
        +1
      </button>
      <button onClick={() => setCount(count - 1)}>
        -1
      </button>
    </div>
  );
}

export default Counter;