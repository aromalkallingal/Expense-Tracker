import { useState } from "react";
import "./Categories.css";
import { useEffect } from "react";

export default function Categories() {

  useEffect(() => {
  const saved = localStorage.getItem("totals");
  if (saved) {
    setTotals(JSON.parse(saved));
  }
}, []);

useEffect(() => {
  localStorage.setItem("totals", JSON.stringify(totals));
}, [totals]);

  const categories = ["groceries", "dineOut", "transport", "others"];

  const [inputs, setInputs] = useState({
    groceries: "",
    dineOut: "",
    transport: "",
    others: ""
  });

  const [totals, setTotals] = useState({
    groceries: 0,
    dineOut: 0,
    transport: 0,
    others: 0
  });

  // handle input change
  const handleChange = (category, value) => {
    setInputs({
      ...inputs,
      [category]: value
    });
  };

  // handle add button
  const handleAdd = (category) => {
    const value = Number(inputs[category]);

    if (!value) return; // prevent empty or invalid input

    setTotals({
      ...totals,
      [category]: totals[category] + value
    });

    // clear input after adding
    setInputs({
      ...inputs,
      [category]: ""
    });
  };

  return (
    <div className="categories">
      {categories.map((cat) => (
        <div key={cat} className={`category-card ${cat}`}>
          <h2>
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </h2>

          <input
            type="number"
            placeholder="Enter amount"
            value={inputs[cat]}
            onChange={(e) => handleChange(cat, e.target.value)}
          />

          <button onClick={() => handleAdd(cat)}>Add</button>

          <p>Total: ₹ {totals[cat]}</p>
        </div>
      ))}
    </div>
  );
}