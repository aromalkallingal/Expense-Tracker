import { useState } from "react";
import "./Categories.css";
import { useEffect } from "react";

export default function Categories() {

  const [count, setCount] = useState("")
  const [saved, setSaved] = useState([]);

  const Change = (e) => {
    setCount(e.target.value);
  }


  const Add = () => {
    setSaved([...saved, count]);
    console.log(saved);
    setCount("")
  }

 

  return (
    <div> 
      <h1>Groceries {count}</h1>
      <input type="text" value={count} onChange={Change} />
      <button type="submit" onClick={Add}>Add</button>
    </div>
   
  )

 

}