import { useState } from 'react';
export const Counter = () => {
const [count, setCount] = useState(0);
return (
<div>
<p>Počet: {count}</p>
<button onClick={() => setCount(prevCount => prevCount + 1) }>Přidat</button>
<button onClick={() => setCount(prevCount => prevCount - 1) }>Odebrat</button>
<button onClick={() => setCount(0) }>Restart</button>
</div>
);
};
