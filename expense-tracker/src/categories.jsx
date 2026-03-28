import { useState } from "react";
import "./Categories.css";
import { useEffect } from "react";

export default function Categories() {

  const [count, setCount] = useState(0)
  return (
    <div> 
      <h1>count {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
   
  )

 

}