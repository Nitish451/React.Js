import { useState } from "react";

export default function Counter() {
  let [count, setCount] = useState(0); //initialization

  let incCount = () => {
    //  setCount((currCount) =>{
    //     return currCount+1;
    //  });
    //  setCount((currCount) =>{       //callback in set state funtion
    //     return currCount+1;
    //  });
    //  setCount((currCount) =>{
    //     return currCount+1;
    //  });
    setCount(25);
  };

  return (
    <div>
      <h3>count={count}</h3>
      <button onClick={incCount}> increase count </button>
    </div>
  );
}
