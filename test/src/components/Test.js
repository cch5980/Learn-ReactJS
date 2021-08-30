import React, { useState, useEffect } from "react";

const Test = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("effect");
  }, []);

  console.log("render");

  const melong = () => {
    console.log("hi");
  };

  melong();

  return (
    <>
      <div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <div>{count}</div>
      </div>
    </>
  );
};

export default Test;
