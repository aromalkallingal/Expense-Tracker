import { useState } from "react";
import "./Categories.css";


export default function Categories () {

    const [groceries, setGroceries] = useState("");
    const [dineOut, setDineOut] = useState("");
    const [transport, setTransport] = useState("");
    const [others, setOthers] = useState("");

    const [savedData, setSavedData] = useState({
        groceries: 0,
        dineOut: 0,
        transport: 0,
        others: 0
    });

    return (
        <>
        <div className="categories">
            <div className="category-card groceries">
                <h2>Groceries</h2>
                <input type="text" />
                <button>Add</button>
            </div>
            
            <div className="category-card dineOut">
                <h2>Dine Out</h2>
                <input type="text" />
                <button>Add</button>
            </div>

            <div className="category-card transport">
                <h2>Transport</h2>
                <input type="text" />
                <button>Add</button>
            </div>

            <div className="category-card others">
                <h2>Others</h2>
                <input type="text" />
                <button>Add</button>
            </div>
        </div>
        </>
        
    )

}
