import { useState } from "react";

function Count() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h3>Increase Counter Value:{counter}</h3>
      <button onClick={() => setCounter(counter + 1)}>
        Increase Counter Val:
      </button>
    </div>
  );
}
export default Count;
