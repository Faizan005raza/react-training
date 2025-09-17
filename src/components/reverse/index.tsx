import React, { useState } from "react";



const ReverseString: React.FC = () => {
  const [text, setText] = useState(""); // Input text
  const [result, setResult] = useState(""); // Reversed output

  const reverseString = () => {
    const arr = text.split("");
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
      const temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    }
    setResult(arr.join(""));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setText(e.target.value);
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Reverse the string</h1>
      <div>
        <label>Enter Text:</label>
        <br />
        <br />
        <input type="text" value={text} onChange={handleInputChange} />
        <br />
        <br />
        <button onClick={reverseString}>Reverse</button>
        </div>
      <p>Output: {result}</p>
      <p>Want to go to HomePage:-</p><a href="http://localhost:5173/home">HomePage</a>
    </>
  );
};

export default ReverseString;
