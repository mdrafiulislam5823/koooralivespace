"use client"

import { useState } from "react"
import { Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function SearchBar() {
  const [query, setQuery] = useState("")
  const [isOpen, setIsOpen] = useState(false)

  const searchResults = [
    { id: "1", title: "الهلال مقابل النصر", type: "مباراة" },
    { id: "2", title: "الاتحاد مقابل الأهلي", type: "مباراة" },
    { id: "3", title: "دوري روشن السعودي", type: "بطولة" },
  ]

  const filteredResults = searchResults.filter((result) => result.title.toLowerCase().includes(query.toLowerCase()))

  return (
    <div className="relative">
      <div className="relative">
        <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          type="text"
          placeholder="ابحث عن المباريات..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setIsOpen(e.target.value.length > 0)
          }}
          className="pr-10 pl-4 bg-secondary border-border focus:border-primary"
        />
        {query && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              setQuery("")
              setIsOpen(false)
            }}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0"
          >
            <X className="h-3 w-3" />
          </Button>
        )}
      </div>

      {isOpen && filteredResults.length > 0 && (
        <Card className="absolute top-full left-0 right-0 mt-2 z-50 border-border">
          <CardContent className="p-2">
            {filteredResults.map((result) => (
              <div
                key={result.id}
                className="flex items-center justify-between p-2 hover:bg-secondary rounded cursor-pointer"
                onClick={() => {
                  setQuery(result.title)
                  setIsOpen(false)
                }}
              >
                <span className="text-foreground">{result.title}</span>
                <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">{result.type}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  )
}
