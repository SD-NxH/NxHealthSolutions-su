import type React from "react"
// components/meal-planning/GroceryListDisplay.tsx

// Update the import at the top
import type { GroceryListItem } from "@/lib/types"

interface GroceryListDisplayProps {
  groceryList: GroceryListItem[]
}

const GroceryListDisplay: React.FC<GroceryListDisplayProps> = ({ groceryList }) => {
  return (
    <div>
      <h2>Grocery List</h2>
      {groceryList.length === 0 ? (
        <p>Your grocery list is empty.</p>
      ) : (
        <ul>
          {groceryList.map((item) => (
            <li key={item.id}>
              {item.name} - {item.quantity} {item.unit}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default GroceryListDisplay
