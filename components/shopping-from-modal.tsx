"use client"

import { X } from "lucide-react"

interface ShoppingFromModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ShoppingFromModal({ isOpen, onClose }: ShoppingFromModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 relative">
        {/* Close button - black circle with white X */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Title with green icon above */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mb-3">
            <div className="w-4 h-4 bg-white rounded-sm" />
          </div>
          <h2 className="text-xl font-semibold text-center">Start Shopping From</h2>
        </div>

        {/* China Button with actual flag design */}
        <button className="w-full flex items-center justify-center gap-4 p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors mb-4">
          <div className="w-12 h-8 bg-red-500 rounded-sm flex items-center justify-center relative">
            <div className="absolute top-1 left-1 w-2 h-2 bg-yellow-400 rounded-full" />
          </div>
          <span className="text-lg font-medium">China</span>
        </button>

        {/* OR divider */}
        <div className="relative text-center mb-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative inline-block px-4 bg-white">
            <span className="text-gray-500 text-sm">OR</span>
          </div>
        </div>

        {/* Alibaba Button with actual logo design */}
        <button className="w-full flex items-center justify-center gap-4 p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          <div className="w-20 h-8 bg-orange-500 rounded flex items-center justify-center">
            <span className="text-white text-sm font-bold">Alibaba</span>
          </div>
        </button>
      </div>
    </div>
  )
}
