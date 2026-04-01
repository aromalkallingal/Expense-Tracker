import { useState } from "react";
import "./Categories.css";
import { useEffect } from "react";

export default function Categories() {

  const categories = ["groceries", "dineOut", "transport", "others"]

  const [inputs, setInputs] = useState({
    gorceries: "",
    dineOut: "",
    transport: "",
    others: "" 
  });

  const [saved, setSaved] = useState({
    gorceries: 0,
    dineOut: 0,
    transport: 0,
    others: 0
  });

  const handleChange = (category, value) => {
    setInputs({
      ...inputs, [category]: value
    });
  };


  const handleAdd = (category) => {
    setSaved({
      ...saved,
      [category]: saved[category] + Number(inputs[category])
    });
    
    setInputs({
      ...inputs,
      [category]: ""
    });
  };

  const handleClear = (category) => {
    setSaved({
      ...saved,
      [category]: 0
    });
  };

 
return (
    <div>
      {categories.map((cat) => (
        <div key={cat}>
          <h2>{cat} {saved[cat]}</h2>

          <input
            type="text"
            value={inputs[cat]}
            onChange={(e) => handleChange(cat, e.target.value)}
          />

          <button onClick={() => handleAdd(cat)}>Add</button>
          <button onClick={() => handleClear(cat)}>Clear</button>
        </div>
      ))}
    </div>
  );


 

}