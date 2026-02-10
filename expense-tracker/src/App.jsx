import { useState } from 'react'
import './App.css'
import MyDatePicker from './calendar';
import Categories from './categories';

function App() {
  return (
    <div style={{ padding: "40px" }}>
      <h2>Expense Tracker</h2>
      <MyDatePicker />
      <Categories />
    </div>
  );
}

export default App
