"use client"

import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { useState } from "react"

export function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = () => {
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <div className="relative w-full">
      <Input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyPress={handleKeyPress}
        className="pr-10 border-gray-300 focus:border-blue-500"
      />
      <button
        onClick={handleSearch}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
      >
        <Search className="h-4 w-4" />
      </button>
    </div>
  )
}
