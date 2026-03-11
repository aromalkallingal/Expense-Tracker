import "./Categories.css"

export default function Categories () {
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


    const CATEGORIES = [
  { key: "groceries", label: "Groceries" },
  { key: "dineOut",   label: "Dine Out"  },
  { key: "transport", label: "Transport" },
  { key: "others",    label: "Others"    },
];
}