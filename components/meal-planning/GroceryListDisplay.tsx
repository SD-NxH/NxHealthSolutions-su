"use client"

import type React from "react"
import type { GroceryListItem } from "@/lib/types"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoppingCart, Check } from "lucide-react"
import { useState } from "react"

interface GroceryListDisplayProps {
  groceryList: GroceryListItem[]
}

const GroceryListDisplay: React.FC<GroceryListDisplayProps> = ({ groceryList }) => {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({})

  if (!groceryList || !Array.isArray(groceryList) || groceryList.length === 0) {
    return (
      <div className="text-center p-8 bg-red-50 rounded-lg border border-red-200">
        <p className="text-red-600">No grocery list data available. Please try again.</p>
      </div>
    )
  }

  // Group items by category
  const groupedItems: Record<string, GroceryListItem[]> = {}
  groceryList.forEach((item) => {
    const category = item.category || "Other"
    if (!groupedItems[category]) {
      groupedItems[category] = []
    }
    groupedItems[category].push(item)
  })

  const toggleItem = (itemKey: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [itemKey]: !prev[itemKey],
    }))
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-primary-dark mb-2">Your Shopping List</h2>
        <p className="text-neutral-600">
          Here's everything you'll need for your meal plan. Check off items as you shop!
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {Object.entries(groupedItems).map(([category, items]) => (
          <Card key={category}>
            <CardHeader className="py-4 bg-primary/5">
              <CardTitle className="flex items-center gap-2 text-lg">
                <ShoppingCart className="w-5 h-5 text-primary" />
                {category}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <ul className="divide-y">
                {items.map((item, index) => {
                  const itemKey = `${category}-${index}-${item.item}`
                  const isChecked = !!checkedItems[itemKey]

                  return (
                    <li key={itemKey} className="p-3">
                      <label className="flex items-center gap-3 cursor-pointer">
                        <div
                          className={`w-5 h-5 rounded border flex items-center justify-center ${
                            isChecked ? "bg-primary border-primary text-white" : "border-gray-300 bg-transparent"
                          }`}
                          onClick={() => toggleItem(itemKey)}
                        >
                          {isChecked && <Check className="w-3 h-3" />}
                        </div>
                        <div className={`flex-1 ${isChecked ? "line-through text-neutral-400" : "text-neutral-800"}`}>
                          <span className="font-medium">{item.item}</span>
                          {item.quantity && <span className="text-sm text-neutral-500 ml-2">({item.quantity})</span>}
                        </div>
                      </label>
                    </li>
                  )
                })}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 6 2 18 2 18 9"></polyline>
            <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
            <rect x="6" y="14" width="12" height="8"></rect>
          </svg>
          Print Shopping List
        </button>
      </div>
    </div>
  )
}

export default GroceryListDisplay
